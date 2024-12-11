<template>

    <div style="width: 80%;" class="mx-auto">
        <v-card>
            <v-card-title>
                <h1>List Of Order</h1>
            </v-card-title>
            <v-card-body>

                <v-data-table
                  :custom-filter="filterOnlyCapsText"
                  :headers="headers"
                  :items="list"
                  :search="search"
                >
                  <template v-slot:top>
                    <v-text-field
                      v-model="search"
                      class="pa-2"
                      label="Search (UPPER CASE ONLY)"
                    ></v-text-field>
                  </template>
                </v-data-table>
            </v-card-body>
        </v-card>
    </div>
  </template>

<script setup>
import CustomStripe from '@/router/stripe';
import { onMounted,ref } from 'vue';

const list = ref([]);
const headers = ref([]);
const data = async() => {
    try {
        headers.value = [
           { 
                title: 'Order ID',
                key: 'id'
            },
            { 
                title: 'Amount',
                key: 'amount'
            }
            ,
            { 
                title: 'Currency',
                key: 'currency'
            }
        ];
        const response = await CustomStripe.get('/charges');
        const data = response.data.data;
        list.value = data;

        console.log(list);

    }catch(error) {    
        console.log(error);
    }
};




onMounted(async() => {
    await data();
});


</script>

<style lang="scss" scoped>

</style>