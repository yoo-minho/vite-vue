import {defineStore} from "pinia";
import {ref} from "vue";

export const usePageStore = defineStore("page", () => {

    const tabName = ref("group");
    const setTabName = name => tabName.value = name

    return {
        tabName, setTabName
    };
});
