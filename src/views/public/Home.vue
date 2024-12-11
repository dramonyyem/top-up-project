<template>
<Header></Header>
<div class="mx-auto my-4">
  <Search style="width: 40%;" class="mx-auto"></Search>
</div>
<div class="mx-auto" style="width: 90%;">
  <h3>
    Trending
  </h3>
    <v-row class="justify-content">
    <v-col cols="6" lg="2" sm="4" v-for="prod in paginatedData" :key="prod.id">
        <v-card
            class="mx-2 my-2"
            style="border-radius: 20px;"
            height="250"
            :subtitle="prod.id"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            :title="prod.name"
            @click="AlertID(prod.id)"
        >
        </v-card>
    
    <!-- <div class="text-center text-caption">Using Props Only</div> -->
    </v-col> 
    </v-row>
    <!-- <v-btn @click="currentPage--" :disabled="currentPage === 1" >Previous</v-btn> -->
     
    <!-- <div class="d-flex justify-center my-2">
        <v-btn @click="previousPage" class="mx-2">Previous</v-btn>
        <v-btn @click="nextPage" :disabled="totalPage === currentPage" class="mx-2">Next</v-btn>
    </div> -->
</div>
</template>
<script setup>
    import { createApp, ref, computed } from 'vue';
    import { useRouter } from 'vue-router'; // Import the useRouter hook
    import Search from '@/layouts/public/Search.vue';
    import Header from '@/layouts/public/Header.vue';
    let currentPage = ref(1);
    const itemsPerPage = 12;
    const router = useRouter();
    const products = [
        {id: 1, name: 'Mobile Legend'},
        {id: 2, name: 'League of legend'},
        {id: 3, name: 'product 3'},
        {id: 4, name: 'product 4'},
        {id: 5, name: 'product 5'},
        {id: 6, name: 'product 6'},
        {id: 7, name: 'product 7'},
        {id: 8, name: 'product 8'},
        {id: 9, name: 'product 9'},
        {id: 10, name: 'product 10'},
        {id: 11, name: 'product 11'},
        {id: 12, name: 'product 12'},
    ];
    const totalPages = computed(() => {
        return Math.ceil(products.length / itemsPerPage);
    });
    const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = currentPage.value * itemsPerPage;
        return products.slice(start,end);
    });
    const previousPage = () => {
        if(currentPage.value > 1){
            currentPage.value--;
        }
    };
    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };
    const AlertID = (item) => {
        router.push(`/p2paid/mlbb/${item}`);
    };
</script>