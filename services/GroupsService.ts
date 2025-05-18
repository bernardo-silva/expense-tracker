import PocketBase from "pocketbase";
import { Collections, type TypedPocketBase } from "~/types/pocketbase-types";
import {
  fetchGroupOptions,
  type Group,
  parseGroup,
  parseGroups,
  type SimpleGroup,
} from "~/types/types";

const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

const getUserGroup = (id: string): Promise<Group> =>
  pb.collection(Collections.Groups).getOne(id, fetchGroupOptions).then(
    parseGroup,
  );

const getUserGroups = (): Promise<Group[]> =>
  pb.collection(Collections.Groups).getList(
    undefined,
    undefined,
    fetchGroupOptions,
  ).then(({ items }) => parseGroups(items));

const createUserGroup = (group: SimpleGroup) =>
  pb.collection(Collections.Groups).create(group);

const deleteUserGroup = (id: string) =>
  pb.collection(Collections.Groups).delete(id);

export const GroupsService = {
  createUserGroup,
  deleteUserGroup,
  getUserGroup,
  getUserGroups,
};
