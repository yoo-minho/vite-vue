<script setup>

</script>

<template>

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
</template>

<style>
</style>
