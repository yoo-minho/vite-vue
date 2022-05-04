<script setup>
import GroupCard from './GroupCard.vue';
import {useGroupStore} from "../stores/group";
import {ref} from "vue";

const {closeGroupEditor} = useGroupStore();
const groupName = ref('');
const groupDescription = ref('');
const email = ref('');
</script>

<template>
  <q-header bordered class="bg-primary text-white max-width">
    <q-toolbar>
      <q-btn @click="closeGroupEditor" flat round dense icon="close"/>
      <q-toolbar-title>그룹 만들기</q-toolbar-title>
      <q-btn flat round dense icon="done"/>
    </q-toolbar>
  </q-header>

  <q-page-container class="max-width">
    <q-page class="q-pa-md">
      <div class="q-gutter-y-md column">
        <q-input v-model="email" type="email" prefix="" suffix=".logcrew.com" />
        <q-input
            v-model="groupName"
            label="그룹 이름"/>
        <q-input
            v-model="groupDescription"

            clearable
            type="textarea"
            label="그룹 설명"
        />
      </div>
    </q-page>
  </q-page-container>
</template>

<style>
</style>
