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
  <div class="max-width">
    <transition-group
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
    >
      <GroupEditor v-if="isOpen"/>
    </transition-group>
    <GroupMain/>
  </div>
</template>

<style>
body {
  overflow: hidden;
}

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
  min-width: 375px;
  margin: 0 auto;
}

.container-without-header-n-footer {
  height: calc(100vh - 100px);
}
</style>
