<script setup>
const randomColor = () => `step-${Math.floor(Math.random() * 10)}`;

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
      <div style="float:right">
        <q-chip square dense color="orange" text-color="white" size="md">Tistory (2)</q-chip>
        <q-chip square dense color="green" text-color="white" size="md">Naver Blog</q-chip>
        <q-chip square dense text-color="gray" size="md">Brunch</q-chip>
      </div>
    </q-card-section>

    <q-separator/>

    <q-card-section>
      <div class="row">
        <div class="col-3">
          <div class="jandi-desc">598 posts<br>In 2022</div>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="left"></div>
            <div class="row" style="width:240px; height: 20px">
              <div class="col-1 jandi-wrap" v-for="k in 12" :key="k">
                <div class="month">{{ k }}</div>
              </div>
            </div>
          </div>
          <div v-for="n in 5" :key="n" class="row">
            <div class="left">{{ n }} week</div>
            <div class="row" style="width:240px; height: 20px">
              <div class="col-1 jandi-wrap" v-for="n in 12" :key="n">
                <div
                    :class="{
                      'jandi': true,
                      [randomColor()]:true
                    }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>


  </q-card>
</template>

<style>
.left {
  color: #ccc;
  font-size: 12px;
  width: 50px;
}

.jandi-desc {
  word-break: break-word;
  padding-right: 16px;
}

.jandi-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.jandi-wrap .jandi {
  width: 12px;
  height: 12px;
  border-radius: 4px;
}

.jandi-wrap .month {
  font-size: 12px;
  color: #ccc;
}

.step-1 {
  background: rgba(86, 61, 124, .1);
}

.step-2 {
  background: rgba(86, 61, 124, .2);
}

.step-3 {
  background: rgba(86, 61, 124, .3);
}

.step-4 {
  background: rgba(86, 61, 124, .4);
}

.step-5 {
  background: rgba(86, 61, 124, .5);
}

.step-6 {
  background: rgba(86, 61, 124, .6);
}

.step-7 {
  background: rgba(86, 61, 124, .7);
}

.step-8 {
  background: rgba(86, 61, 124, .7);
}

.step-9 {
  background: rgba(86, 61, 124, .7);
}

</style>
