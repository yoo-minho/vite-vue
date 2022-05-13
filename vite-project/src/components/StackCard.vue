<script setup>
/*vs code로?*/
const props = defineProps({
  stackJson: Object
})

const {
  name,
  version,
  description,
  path,
  url,
  github_star
} = props.stackJson;

const stackImage = new URL(`../assets/images/stacks/${path}`, import.meta.url);
const openUrl = (url) => window.open(url, 'stack');
</script>

<template>
  <q-item>
    <q-item-section top avatar @click="openUrl(url)" style="cursor:pointer">
      <q-avatar rounded size="80px">
        <img :src="stackImage" style="object-fit: cover">
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }} {{ version }}</q-item-label>
      <q-item-label caption>{{ description }}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-badge>{{ github_star }}</q-badge>
    </q-item-section>
  </q-item>
</template>

<style>

</style>
