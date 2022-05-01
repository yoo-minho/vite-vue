import {defineStore} from "pinia";
import {ref} from "vue";

export const useGroupStore = defineStore("group", () => {
    const isOpen = ref(false);

    const openGroupEditor = () => (isOpen.value = true);
    const closeGroupEditor = () => (isOpen.value = false);

    return {
        isOpen,
        openGroupEditor, closeGroupEditor
    };
});
