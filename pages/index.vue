<template>
  <div>
    <Navbar /> <!-- Add the Navbar component here -->
    <h1 class="text-3xl font-bold text-center my-8">Добро пожаловать в мониторинг BNB Greenfield Storage Providers!</h1>
    <p class="text-lg text-center mb-4">Выберите одну из следующих опций:</p>
    <div class="flex flex-wrap justify-center">
      <div v-for="link in links" :key="link.to" class="m-4">
        <nuxt-link :to="link.to" class="text-blue-500 hover:underline">{{ link.text }}</nuxt-link>
      </div>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; // Import the Navbar component

export default {
  components: {
    Navbar, // Add the Navbar component to the component list
  },
  data() {
    return {
      links: [
        { to: '/block-transactions', text: 'Block Transactions' },
        { to: '/hashrate', text: 'Hashrate' },
        { to: '/miner-pools', text: 'Transaction List' },
        { to: '/confirmation-count', text: 'Confirmation Count' },
        { to: '/average-fees', text: 'Average Fees' },
        { to: '/addresses', text: 'Addresses' },
        { to: '/network-nodes', text: 'Network Nodes' },
      ],
    };
  },
};
</script>

<style>
/* Add any additional Tailwind CSS styles if required */
</style>
