<script setup>
import GroupCard from './GroupCard.vue';
import {useGroupStore} from "../stores/group";
import {reactive, ref} from "vue";
import {useQuasar} from 'quasar'

const $q = useQuasar();

const BLOGS = ['NAVER', 'TISTORY', 'VELOG'];
const BLOG_IMAGES = {
  NAVER: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA5MjRfMTQ0/MDAxNjAwOTI4MDIxMTQ4.LGGIcSU4FrU6c_-MgA5xerYp1KXlF290JkqaG9uTPskg.MHNU4ycUh0ivOCxgEDo6YWorwOtonE7zwtmJMr1I3RAg.PNG.thdnjs4484/%EB%B8%94%EB%A1%9C%EA%B7%B81.png?type=w800',
  TISTORY: 'https://w.namu.la/s/aec084b1eda1878b6aba5c6edba4950075de77d601abdef0894f59c164089a096c2dd305fc578a64f8519dd129f3aea87dc54660d52820a1b33c259f1295501cea87b3965a040256d16ab979f81f6f7724ae8c2e8352be566fc8db9b954ec433',
  VELOG: 'https://velog.velcdn.com/images/velog/profile/9aa07f66-5fcd-41f4-84f2-91d73afcec28/green%20favicon.png'
}
const linkRules = [
  val => val.includes('https://') || '링크에 https://를 포함해주세요!',
  val => isAvailableUrl(val) || '불가능한 url'
]

const isUpperIncludes = (x, y) => x.toUpperCase().includes(y.toUpperCase());
const getMessageByRule = (x, y) => (!!x || (y === true) ? '' : y);
const getErrorMessage = (v) => linkRules.reduce((acc, cul) => acc + getMessageByRule(acc, cul(v)), '');
const isAvailableUrl = (url) => BLOGS.reduce((acc, cul) => acc || isUpperIncludes(url, cul), false);

const {closeGroupEditor} = useGroupStore();
const groupName = ref('');
const groupDescription = ref('');
const email = ref('');
const link = ref('');
const links = reactive([]);

function addLink(e) {
  const url = e.target.value;
  const errorMessage = getErrorMessage(url);
  if ('' !== errorMessage) {
    $q.notify({type: 'negative', message: errorMessage});
    return;
  }
  const type = BLOGS.reduce((acc, cul) => acc || (isUpperIncludes(url, cul) ? cul : ''), '');
  links.push({url, type});
  link.value = '';
}

</script>

<template>
  <q-layout id="groupEditor">
    <q-header bordered class="bg-primary text-white max-width">
      <q-toolbar>
        <q-btn @click="closeGroupEditor" flat round dense icon="close"/>
        <q-toolbar-title>그룹 만들기</q-toolbar-title>
        <q-btn flat round dense icon="done"/>
      </q-toolbar>
    </q-header>

    <q-page-container class="max-width">
      <q-page class="q-pa-md">
        <q-form class="q-gutter-y-md column">
          <q-input
              v-model="groupName"
              placeholder="그룹 이름 추가"
              label="그룹 이름"
              counter
              maxlength="20"
              stack-label
              autofocus
              hide-bottom-space
              :rules="[ val => val?.length > 0 || '그룹 이름을 입력해주세요!']"
          />
          <q-input
              label="전용 링크"
              v-model="email"
              type="email"
              stack-label
              counter
              maxlength="20"
              placeholder="전용 링크 추가"
              prefix="https://"
              suffix=".logcrew.com"
              :rules="[ val => val?.length > 0 || '도메인을 입력해주세요!']"
          />
          <q-input
              v-model="groupDescription"
              stack-label
              autogrow
              clearable
              counter
              maxlength="100"
              type="textarea"
              label="그룹 설명"
              placeholder="(선택) 그룹 설명을 적어주세요!"
              hide-bottom-space
          />

          <q-input
              v-model="link"
              bottom-slots
              label="링크 추가"
              stack-label
              @keypress.enter="addLink"
              :rules="linkRules"
          >

            <template v-slot:hint>
              ※ 'https://' 포함한 블로그 주소를 입력해주세요!
            </template>

            <template v-slot:append>
              <q-btn round flat dense icon="add"/>
            </template>
          </q-input>

          <q-list bordered separator>
            <div v-for="(v, i) in links" :key="i">
              <q-item clickable>
                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img :src="BLOG_IMAGES[v.type]" alt=""/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ v.url }}</q-item-label>
                  <q-item-label caption>{{ v.type }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
#groupEditor {
  position: absolute;
  z-index: 2001;
  background-color: white;
}
</style>
