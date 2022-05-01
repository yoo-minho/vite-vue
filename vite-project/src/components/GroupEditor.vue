<script setup>
import GroupCard from './GroupCard.vue';
import {useGroupStore} from "../stores/group";

const {closeGroupEditor} = useGroupStore();
</script>

<template>
  <q-header bordered class="bg-primary text-white max-width">
    <q-toolbar>
      <q-btn @click="closeGroupEditor" flat round dense icon="close"/>
      <q-toolbar-title>그룹 만들기</q-toolbar-title>
      <q-btn flat>완료</q-btn>
    </q-toolbar>
  </q-header>

  <q-page-container class="max-width">
    <q-page class="q-pa-md">
      메롱
    </q-page>
  </q-page-container>
</template>

<style>
</style>
