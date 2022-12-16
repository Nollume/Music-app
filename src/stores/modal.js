import { defineStore } from "pinia";

const useModalStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass() {
      return !this.isOpen ? "hidden" : "";
    },
  },
  actions: {},
});

export default useModalStore;
