<script setup>
import GroupCard from './GroupCard.vue';
import {useGroupStore} from "../stores/group";
import {useQuasar} from 'quasar'
import {BLOGS} from "../constants";
import {ref} from "vue";

</script>

<template>
  <q-layout>
    <q-header bordered class="bg-primary text-white max-width">
      <q-toolbar>
        <q-btn flat round dense icon="search"/>
        <q-toolbar-title>스택</q-toolbar-title>
        <q-btn flat round dense icon="add_circle_outline"/>
      </q-toolbar>
    </q-header>

    <q-page-container class="max-width">
      <q-scroll-area :visible="false" class="max-width container-without-header-n-footer">
        <q-page class="q-pa-md">
          Vue
        </q-page>
      </q-scroll-area>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary max-width">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
        <q-tab name="group" label="그룹"/>
        <q-tab name="blog" label="블로그"/>
        <q-tab name="stack" label="스택"/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<style>

</style>
