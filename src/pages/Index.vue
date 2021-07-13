<template>
<div class= "container mt-5">
    <div class= "row">
        <div class="col-md-12">
            <div class= "card border-0 rounded shadow">
                <div class="card-body">
                    <h4 class="fw-bold text-center">DATA POST</h4>
                    <hr>
                    <router-link :to="{name: 'post.create'}" class="btn btn-md btn-success">
                        TAMBAH POST</router-link>
                        <table class="table table-striped table-bordered mt-4">
                            <thead class="table-dark">
                                <tr>
                                <th class="text-center" scoppe="col">TITLE</th>
                                <th class="text-center" scoppe="col">CONTENT</th>
                                <th class="text-center" scoppe="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(post, index) in posts" :key="index">
                                    <td>{{post.title}}</td>
                                    <td>{{post.content}}</td>
                                    <td class="text-center">
                                        <router-link :to="{name : 'post.edit', params:{id: post.id}}"
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button 
                                        @click.prevent="postDelete(post.id)" 
                                        class="btn btn-sm btn-danger mr-1">HAPUS
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'
export default {
   setup(){
       let posts = ref([])
       onMounted(() => {
                axios
                .get('http://novaagustina.online/backendapi/public/api/post')
                .then((response) => {
                    const res = response.data;
                    const tmp = {};
                    if (res.success == true) {
                        const data = res.data;
                        data.forEach((item) => 
                            tmp[item.id] = item,
                        );
                    }
                    console.log(tmp)
                    posts.value = tmp;

                })
                .catch(error =>{
                    console.log(error.response.data)
                });
       });

       function postDelete(id){
           //delete data post by ID
           axios
            .delete(`http://novaagustina.online/backendapi/public/api/post/${id}`)
            .then((response) => {
                alert(id);
                if (response.data.success == true) {
                    delete posts.value[id];

                }
            })
            .catch((error) => {
                console.log(error.response.data);

            });
       }    
        return {
           posts,
           postDelete,
       };
}
}
</script>

<style>
body{
    background: rgb(19, 80, 6);
}
</style>