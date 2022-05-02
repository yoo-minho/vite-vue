<script setup>
import GroupCard from './GroupCard.vue';
import {useGroupStore} from "../stores/group";

const {openGroupEditor} = useGroupStore();
</script>

<template>
  <div>
    <q-header bordered class="bg-primary text-white max-width">
      <q-toolbar>
        <q-btn flat round dense icon="search"/>
        <q-toolbar-title>그룹</q-toolbar-title>
        <q-btn @click="openGroupEditor" flat round dense icon="add_circle_outline"/>
      </q-toolbar>
    </q-header>

    <q-page-container class="max-width">
      <q-scroll-area :visible="false" class="max-width"
                     style="height: calc(100vh - 100px);">
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            <GroupCard/>
          </p>
        </q-page>
      </q-scroll-area>
    </q-page-container>

    <q-footer bordered class="bg-white text-primary max-width">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
        <q-tab name="images" label="그룹"/>
        <q-tab name="videos" label="블로그"/>
        <q-tab name="articles" label="프로필"/>
      </q-tabs>
    </q-footer>
  </div>
</template>

<style>
</style>
