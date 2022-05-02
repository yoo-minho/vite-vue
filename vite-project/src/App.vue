<script setup>
import GroupMain from './components/GroupMain.vue';
import GroupEditor from './components/GroupEditor.vue';

import {useGroupStore} from "./stores/group";
import {storeToRefs} from 'pinia'
import {ref} from "vue";

const tab = ref('images');
const {isOpen} = storeToRefs(useGroupStore())
</script>

<template>
  <div>
    <q-layout view="lHr LpR lFr" class="shadow-2 rounded-borders">

      <GroupMain v-if="!isOpen"/>
      <GroupEditor v-if="isOpen"/>

    </q-layout>
  </div>
</template>

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
  max-width: 460px;
  margin: 0 auto;
}
</style>
