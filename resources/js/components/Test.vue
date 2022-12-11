<template>
  <v-app>
    <v-app-bar color="F5F5F5" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Calendar</v-toolbar-title>
    </v-app-bar>
    <v-card>
    <v-navigation-drawer v-model="drawer" model-value rail>
      <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-avatar class="d-block text-center mx-auto my-3">
          <v-btn size="small" icon v-bind="props" >
            <v-icon>fas fa-plus</v-icon>
          </v-btn>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title>予定</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="showTaskResister()">
          <v-list-item-title>タスク</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="showMemoResister()">
          <v-list-item-title>メモ</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <!--<v-btn size="small" icon @click="drawer = false">-->
        <!--  <v-icon>fas fa-chevron-left</v-icon>-->
        <!--</v-btn>-->
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-icon>far fa-calendar-alt</v-icon>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-icon>far fa-check-square</v-icon>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="showMemoResister()">
          <v-list-item-title>
            <v-icon>far fa-edit</v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-card>
    <v-container fill-height justify="center" style="width: 500px;" class="ma-auto" v-if="memoResister">
      <v-card class="py-12 px-5" >
        <v-card-title>メモ登録</v-card-title>
        <v-form>
          <v-col cols="12">
            <v-text-field
              label="タイトル"
              name="title"
              type="text"
              v-model="memoTitle"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="テキスト"
              name="text"
              type="text"
              v-model="memoText"
            />
          </v-col>
        </v-form>
        <v-row justify="center">
          <v-btn @click="closeMemoResister()" color="#B0BEC5" class="mx-2">キャンセル</v-btn>
          <v-btn @click="createNewMemo()" color="#66BB6A" class="mx-2">登録</v-btn>
        </v-row>
      </v-card>
    </v-container>
    <!--<Task />-->
  </v-app>
</template>
<script>
import Task from "../components/Task.vue";
export default {
   components: { 
　　    Task
  　},
    data:function(){
      return{
        drawer: true,
        memoResister: false,
        memos: {},
        memoTitle: "",
        memoText: ""
      }
    },
    methods: {
      createNewMemo:function(){
        //axios.post(URL, data jsの構造体)
        axios.post('/api/memo', {title:this.memoTitle, text:this.memoText})
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      showMemoResister:function(){
        this.memoResister = true;
        console.log(this.memoResister);
      },
      closeMemoResister:function(){
        this.memoResister = false;
      }
    },
    mounted: function() {
      // カテゴリデータを取得表示
      let self = this;
      axios
      .get('/ajax/memo')
      .then(function(response){
          self.memos = response.data;
      });
    }
}
</script>