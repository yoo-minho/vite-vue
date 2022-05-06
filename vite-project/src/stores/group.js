import {defineStore} from "pinia";
import {reactive, ref} from "vue";

export const useGroupStore = defineStore("group", () => {
    const isOpenGroupEditor = ref(false);
    const openGroupEditor = () => (isOpenGroupEditor.value = true);
    const closeGroupEditor = () => (isOpenGroupEditor.value = false);

    const isOpenLinkEditor = ref(false);
    const openLinkEditor = () => (isOpenLinkEditor.value = true);
    const closeLinkEditor = () => (isOpenLinkEditor.value = false);

    let links = reactive([]);
    const initLinks = () => links.length = 0;
    const addLink = v => links.push(v);
    const deleteLink = idx => links.splice(idx, 1);

    return {
        isOpenGroupEditor, openGroupEditor, closeGroupEditor,
        isOpenLinkEditor, openLinkEditor, closeLinkEditor,
        links, initLinks, addLink, deleteLink
    };
});
