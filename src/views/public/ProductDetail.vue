<template>
<Header></Header>
<div class="mx-auto my-4" style="width: 90%;min-height: 520px;">
    <h2 class="my-4">
        Top Up
    </h2>
    <v-row class="justify-content">
        <v-col cols="6" lg="2" sm="4" v-for="prod in products" :key="prod.id">
            <v-card style="border-radius: 20px;" :class="{ 'activeColor': isActive[prod.id] }"
                height="200px"
                width=""
                :title="prod.name"
                @click="clickEnable(prod.id)"
             >
            </v-card>
        
        </v-col>
      
    </v-row>
    <h2 class="my-4">
        Account Information
    </h2>
    <v-row class="justify-content my-4">
        <v-col cols="12" lg="6" sm="12">
            <v-text-field
        v-model="userID"
        hint="Samadasple : 1231213213 (1234)"
        label="Enter ID (Server ID)"
        variant="outlined"
        persistent-hint
    ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" sm="12">
            <v-btn style="height: 50px;" @click="SubmitItem"> Submit</v-btn>
        </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        min-width="400"
        title="Confirmation"
      >
      <span class="mx-4">
         Item ID : {{ itemID }}
      </span>
      <span class="mx-4">
          Username : {{ userID }}
      </span>
      <span class="mx-4" :price="ItemPrice">
        Price : {{ ItemPrice }}
      </span>
        <template v-slot:actions>
          <v-btn
            variant="flat"
            color="red"
            text="Cancel"
            @click="dialog = false"
          ></v-btn>
          <v-btn
            color="#5865f2"

            variant="flat"
            text="Ok"
            @click="payMent"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</div>

<Footer></Footer>
</template>

<script setup>
    import Header from '@/layouts/public/Header.vue';
    import Footer from '@/layouts/public/Footer.vue';

    import { useRouter } from 'vue-router'; // Import the useRouter hook
 
    import { ref } from 'vue';

    const router = useRouter();
    const isActive = ref(false)
    let itemID = ref(0);
    var userID = ref(null);
    let userId = ref(null);
    var ItemPrice = ref(0); 

    const dialog = ref(false);

    const products = [
        { id: 1, name : '50 Diamond', price: 100 },
        { id: 2, name : '100 Diamond', price: 200 },
        { id: 3, name : '250 Diamond', price: 500 },
        { id: 4, name : '500 Diamond' , price: 1000},
        { id: 5, name : '1000 Diamond' , price: 2000},
        { id: 6, name : '3000 Diamond' , price: 6000},
    ];

    const clickEnable = (id) => {
        isActive.value = {};
        isActive.value[id] = true;
        itemID.value = id;
        ItemPrice.value = products[id].price;
        userId = itemID;
    };
    
    const SubmitItem = () => {
        if(itemID.value != 0 && userID.value != ""){
            dialog.value = true;
        }else{
            alert("please Enter ID game");
        }
    }
    const payMent = () => {
        router.push(`/payment?id=${itemID.value}&producId=${itemID.value}&productPrice=${ItemPrice.value}`);
        // router.push({ name: 'payment', query: { userId: userId }});
    };
</script>

<style lang="scss" scoped>
.activeColor {
    background-color: dodgerblue;
}
</style>