<script setup>
import {ref} from "vue";
import GroupCard from './GroupCard.vue';
import {storeToRefs} from 'pinia';
import {usePageStore} from "../stores/page";
import {useGroupStore} from "../stores/group";

const {openGroupEditor} = useGroupStore();
const {tabName} = storeToRefs(usePageStore());
const {setTabName} = usePageStore();

const clickTab = v => setTabName(v);
</script>

<template>
  <q-layout>
    <q-header bordered class="bg-primary text-white max-width">
      <q-toolbar>
        <q-btn flat round dense icon="search"/>
        <q-toolbar-title>그룹</q-toolbar-title>
        <q-btn @click="openGroupEditor" flat round dense icon="add_circle_outline"/>
      </q-toolbar>
    </q-header>

    <q-page-container class="max-width">
      <q-scroll-area :visible="false" class="max-width container-without-header-n-footer">
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            <GroupCard/>
          </p>
        </q-page>
      </q-scroll-area>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary max-width">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tabName">
        <q-tab name="group" label="그룹" @click.prevent="clickTab('group')"/>
        <q-tab name="stack" label="스택" @click.prevent="clickTab('stack')"/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<style>
</style>
