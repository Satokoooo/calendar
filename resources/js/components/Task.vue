<template>
    <v-app>
        <v-container>
            <v-row justify="space-around">
                <!--<v-col v-for="task in tasks" :key="task.title" cols="12" md="4">-->
                <!--    <v-sheet class="pa-12" color="grey-lighten-3">-->
                <!--      <v-sheet class="mx-auto" height="100" width="100"></v-sheet>-->
                <!--    </v-sheet>-->
                <!--</v-col>-->
                <!--<v-card　cols="12"　title="This is a title" subtitle="This is a subtitle" text="This is content"></v-card>-->
                
                <v-card class="mb-5">
                    <v-card-item>
                      <div>
                        <div class="text-overline mb-1">
                          カテゴリ
                        </div>
                        <div class="text-h6 mb-1">
                          タイトル
                        </div>
                        <div class="text-caption">テキストテキストテキストテキストテキスト</div>
                      </div>
                    </v-card-item>
                    <v-card-actions>
                      <v-btn variant="outlined">
                        編集
                      </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mb-5">
                    <v-card-item>
                      <div>
                        <div class="text-overline mb-1">
                          カテゴリ
                        </div>
                        <div class="text-h6 mb-1">
                          タイトル
                        </div>
                        <div class="text-caption">テキストテキストテキストテキストテキスト</div>
                      </div>
                    </v-card-item>
                    <v-card-actions>
                      <v-btn variant="outlined">
                        編集
                      </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mb-5">
                    <v-card-item>
                      <div>
                        <div class="text-overline mb-1">
                          カテゴリ
                        </div>
                        <div class="text-h6 mb-1">
                          タイトル
                        </div>
                        <div class="text-caption">テキストテキストテキストテキストテキスト</div>
                      </div>
                    </v-card-item>
                    <v-card-actions>
                      <v-btn variant="outlined">
                        編集
                      </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mb-5">
                    <v-card-item>
                      <div>
                        <div class="text-overline mb-1">
                          カテゴリ
                        </div>
                        <div class="text-h6 mb-1">
                          タイトル
                        </div>
                        <div class="text-caption">テキストテキストテキストテキストテキスト</div>
                      </div>
                    </v-card-item>
                    <v-card-actions>
                      <v-btn variant="outlined">
                        編集
                      </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
        <v-container fill-height justify="center" style="width: 500px;" class="ma-auto" v-if="taskResister">
          <v-card class="py-12 px-5" >
                <v-card-title>タスク登録</v-card-title>
                    <v-form>
                      <v-col cols="12">
                        <v-text-field
                          label="タイトル"
                          name="title"
                          type="text"
                          v-model="taskTitle"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          label="テキスト"
                          name="text"
                          type="text"
                          v-model="taskText"
                        />
                      </v-col>
                    </v-form>
                <v-row justify="center">
                  <v-btn @click="closeTaskResister()" color="#B0BEC5" class="mx-2">キャンセル</v-btn>
                  <v-btn @click="createNewTask()" color="#66BB6A" class="mx-2">登録</v-btn>
                </v-row>
          </v-card>
        </v-container>
        <v-card>
            <v-list>
                <!--<v-list-itemv-for="task in tasks">-->
                <!--    <v-text>{{ task.name }}</v-text>-->
                <!--    <v-text>{{ task.category }}</v-text>-->
                <!--    <v-text>{{ task.text }}</v-text>-->
                <!--</v-list-item>-->
            </v-list>
        </v-card>
    </v-app>
    
</template>
<script>
    export default {
        data: function() {
            return{
                taskResister: false,
                tasks: {}
            };
        },
        methods: {
            showTaskResister: function(){
                this.taskResister = true;
            },
            closeTaskResister: function(){
                this.taskResister = false;
            },
            createNewMemo:function(){
                axios.post('api/task')
                .then((response) => {
                  console.log(response);
                  title = this.taskTitle;
                  text = this.taskText;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        mounted: function() {
            // taskデータを取得表示
            // let self = this;
            // axios
            // .get('/ajax/task')
            // .then(function(response){
            //     self.tasks = response.data;
            // });
        }
    }
</script>