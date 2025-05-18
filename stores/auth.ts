import { defineStore } from "pinia";
import PocketBase from "pocketbase";
import {
  Collections,
  type TypedPocketBase,
  type UsersResponse,
} from "~/types/pocketbase-types";

const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as UsersResponse | null,
    isLoggedIn: false,
  }),
  getters: {
    userData: (state): UsersResponse => {
      if (state.isLoggedIn && state.user) {
        return state.user;
      }
      throw new Error("User data accessed when the user is not logged in.");
    },
  },
  actions: {
    async init() {
      pb.authStore.onChange(async () => {
        console.log("auth changed");
        this.isLoggedIn = pb.authStore.isValid;

        if (this.isLoggedIn) {
          await this.fetchUser();
        } else {
          this.user = null;
        }
      });
      try {
        await pb.collection(Collections.Users).authRefresh();
      } catch (error) {
        console.error("Error initializing auth:", error);
      }
    },
    async fetchUser() {
      console.log("Fetching user data");
      if (!pb.authStore.record) return;
      try {
        this.user = await pb
          .collection(Collections.Users)
          .getOne(pb.authStore.record.id);
      } catch (error) {
        console.error("Error fetching user data:", error);
        showErrorDialog(error);
        this.logout();
      }
    },
    async register(
      name: string,
      email: string,
      password: string,
      passwordConfirm: string,
    ) {
      console.log("Registering");
      return pb
        .collection(Collections.Users)
        .create({
          email,
          password,
          passwordConfirm,
          name,
        })
        .catch((error) => {
          console.error("Register failed:", error);
          throw error;
        });
    },
    async login(email: string, password: string) {
      console.log("logging in");
      return pb
        .collection(Collections.Users)
        .authWithPassword(email, password)
        .catch((error) => {
          console.error("Login failed:", error);
          showErrorDialog(error);
          throw error;
        });
    },
    async logout() {
      pb.authStore.clear();
    },
  },
});
