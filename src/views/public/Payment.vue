<template>
<v-sheet
    class="pa-4 text-center mx-auto mt-4"
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">Your Payment Completed Paid</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      To see a report on this reconciliation, click <a class="text-decoration-none text-info" href="/payment/list">Pauchase Other </a>

      <br>
    </p>

      Otherwise, you're done!

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        variant="flat"
        width="90"
        rounded
      >
        Done
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
// import Stripe from 'stripe';
import CustomStripe from '@/router/stripe';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


const router = useRoute();

var charge = {
  amount: router.query.productPrice,
  currency: 'usd',
  source: 'tok_visa',
};


const getItem  = async() => {
    try {
          const response = await CustomStripe.post('/charges', charge); // Replace with your API endpoint
          console.log(response);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(async () => {
    await getItem();  // This will automatically call getItem when the component is mounted
});
// const stripe = Stripe('sk_test_51QTyonBIvPUd6gMdvLnqiO0fhd9PqSofmoBI2eKx34hPwHGb2WF5u170BAbw7mYrRx1nE0W5Sjem49oDw5YB9atT00tnms1Uzt');
// var charge = await stripe.charges.create({
//   amount: 1099,
//   currency: 'usd',
//   source: 'tok_visa',
// });
</script>

<style lang="scss" scoped>
/* Add your scoped styles here */
</style>
  