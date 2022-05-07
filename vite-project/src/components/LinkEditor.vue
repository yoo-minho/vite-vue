<script setup>
import GroupCard from './GroupCard.vue';
import {useGroupStore} from "../stores/group";
import {useQuasar} from 'quasar'
import {BLOGS} from "../constants";
import {ref} from "vue";

const $q = useQuasar();
const linkRules = [
  val => val?.includes('https://') || '링크에 https://를 포함해주세요!',
  val => isAvailableUrl(val) || '불가능한 url'
]

const {closeLinkEditor, links, addLink} = useGroupStore();
const isUpperIncludes = (x, y) => x.toUpperCase().includes(y.toUpperCase());
const getMessageByRule = (x, y) => (!!x || (y === true) ? '' : y);
const getErrorMessage = (v) => linkRules.reduce((acc, cul) => acc + getMessageByRule(acc, cul(v)), '');
const isAvailableUrl = (url) => BLOGS.reduce((acc, cul) => acc || isUpperIncludes(url, cul), false);
const getBlogType = (url) => BLOGS.reduce((acc, cul) => acc || (isUpperIncludes(url, cul) ? cul : ''), '');

const blogUrl = ref('');

function addBlogLink() {
  const errorMessage = getErrorMessage(blogUrl.value);
  if ('' !== errorMessage) {
    $q.notify({type: 'negative', message: errorMessage});
    return;
  }
  const type = getBlogType(blogUrl.value);
  addLink({url: blogUrl.value, type, index: links.length + 1});
  closeLinkEditor();
}

</script>

<template>
  <q-layout id="linkEditor" class="max-width">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn @click="closeLinkEditor" flat round dense icon="keyboard_backspace"/>
        <q-toolbar-title>링크 추가</q-toolbar-title>
        <q-btn @click="addBlogLink" flat round dense icon="done"/>
      </q-toolbar>
    </q-header>

    <q-page-container class="max-width">
      <q-page class="q-pa-md">
        <q-form class="q-gutter-y-md column">
          <q-input
              v-model="blogUrl"
              bottom-slots
              autofocus
              @keypress.enter.prevent="addBlogLink"
              :rules="linkRules"
          >
            <template v-slot:hint>
              ※ 'https://' 포함한 블로그 주소를 입력해주세요!
            </template>
          </q-input>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
#linkEditor {
  position: absolute;
  z-index: 2002;
  background-color: white;
}
</style>
