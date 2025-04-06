<script setup lang="ts">
const modalStore = useModalStore();
</script>
<template>
  <dialog
:ref="(el) => modalStore.setRef(el as HTMLDialogElement)" class="modal modal-bottom sm:modal-middle"
    @close="modalStore.isOpen = false">
    <div class="modal-box border-error border-t-4">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
          ✕
        </button>
      </form>
      <h3 class="text-error text-lg font-bold">An error occurred!</h3>
      <p class="text-error py-4">{{ modalStore.message }}</p>
    </div>
    <form method="dialog" class="modal-backdrop"><button /></form>
  </dialog>
</template>
