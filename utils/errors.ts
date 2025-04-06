import { useModalStore } from "~/stores/modal";

export const showErrorDialog = (e: unknown) => {
  let message = "";
  if (typeof e === "string") {
    message = e;
  } else if (e instanceof Error) {
    message = e.message;
  }
  const modalStore = useModalStore();
  modalStore.open(message);
};
