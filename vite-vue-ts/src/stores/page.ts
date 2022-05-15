import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { TabName } from '../types/common';

export const usePageStore = defineStore('page', () => {
  const tabName: Ref<string> = ref('group');
  const setTabName = (name: TabName): void => {
    tabName.value = name;
  };

  return {
    tabName,
    setTabName,
  };
});
