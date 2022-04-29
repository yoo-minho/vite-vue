<script setup>
import {ref} from 'vue'

const tab = ref('images');
</script>

<template>
  <div>
    <q-layout view="lHr LpR lFr" class="shadow-2 rounded-borders">

      <q-header bordered class="bg-primary text-white max-width">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            기록를 더 즐겁게, 코드크루
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container class="max-width">
        <q-page class="q-pa-md">
          <p v-for="n in 15" :key="n">
            <q-card class="my-card">
              <q-card-section>
                <q-item>
                  <q-item-section side>
                    <q-avatar rounded color="primary" text-color="white">
                      그
                      <q-badge floating color="orange">N</q-badge>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      <q-item style="padding:0; min-height: 0">
                        <q-item-section>그룹 이름2</q-item-section>
                        <q-item-section side>1시간 전</q-item-section>
                      </q-item>
                    </q-item-label>
                    <q-item-label caption>그룹에 대한 설명을 적는 공간입니다.</q-item-label>
                  </q-item-section>
                </q-item>
              </q-card-section>

              <q-card-section>
                <div class="row" style="text-align: center">
                  <div class="col">
                    티스토리 (2)
                  </div>
                  <div class="col">
                    벨로그 (1)
                  </div>
                  <div class="col">
                    브런치 (3)
                  </div>
                </div>
              </q-card-section>

              <q-separator/>

              <q-card-actions vertical>
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
          </p>

          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="accent" />
          </q-page-sticky>

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
