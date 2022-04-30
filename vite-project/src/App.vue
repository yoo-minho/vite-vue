<template>
  <div>
    <q-layout view="lHr LpR lFr" class="shadow-2 rounded-borders">

      <q-header bordered class="bg-primary text-white max-width">
        <q-toolbar>
          <q-toolbar-title class="">
            Codecrew.io
          </q-toolbar-title>
          <q-btn flat round dense icon="search" />
          <q-btn flat round dense icon="add_circle_outline" />
        </q-toolbar>
      </q-header>

      <q-page-container class="max-width">
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            <GroupCard/>
          </p>
        </q-page>
      </q-page-container>

      <q-footer bordered class="bg-white text-primary max-width">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <q-tab name="images" label="라운지"/>
          <q-tab name="videos" label="그룹"/>
          <q-tab name="articles" label="설정"/>
        </q-tabs>
      </q-footer>

    </q-layout>
  </div>
</template>

<script setup>
import GroupCard from './components/GroupCard.vue'
</script>

<style>
#app {
  font-family: "Noto Sans KR", Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.max-width {
  width: 460px;
  margin: 0 auto;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
