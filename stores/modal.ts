import { defineStore } from "pinia";

export type ModalState = {
  isOpen: boolean;
  message?: string;
  _ref: Ref<HTMLDialogElement | undefined>;
};

export const useModalStore = defineStore("modal", {
  state: (): ModalState => ({
    isOpen: false,
    _ref: ref<HTMLDialogElement>(),
  }),
  getters: {},
  actions: {
    open(message?: string) {
      this.message = message ?? "Something unexpected occurred.";
      this._ref?.showModal();
      this.isOpen = true;
    },
    close() {
      this._ref?.close();
      this.isOpen = false;
    },
    setRef(el: HTMLDialogElement) {
      this._ref = el;
    },
  },
});
