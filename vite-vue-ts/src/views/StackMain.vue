<script setup lang="ts">
import StackCard from '../components/StackCard.vue';
import stackArray from '../data/stack.json';
import { usePageStore } from '../stores/page';
import { storeToRefs } from 'pinia';
import { TabName } from '../types/common';

const { tabName } = storeToRefs(usePageStore());
const { setTabName } = usePageStore();

const clickTab = (v: TabName): void => setTabName(v);
</script>

<template>
  <q-layout>
    <q-header bordered class="bg-primary text-white max-width">
      <q-toolbar>
        <q-btn flat round dense icon="search" />
        <q-toolbar-title>스택</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="max-width">
      <q-scroll-area :visible="false" class="max-width container-without-header-n-footer">
        <q-page class="q-pa-md">
          <div v-for="stackJson in stackArray" :key="stackJson.name">
            <StackCard :stack-json="stackJson" />
          </div>
        </q-page>
      </q-scroll-area>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary max-width">
      <q-tabs v-model="tabName" no-caps active-color="primary" indicator-color="transparent" class="text-grey">
        <router-link to="/">
          <q-tab name="group" label="그룹" @click.prevent="clickTab('group')" />
        </router-link>
        <router-link to="/stack">
          <q-tab name="stack" label="스택" @click.prevent="clickTab('stack')" />
        </router-link>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<style></style>
