<template>
  <div>
    <Navbar /> <!-- Добавьте компонент Navbar здесь -->
    <div class="flex flex-wrap justify-center">
      <div v-for="link in links" :key="link.to" class="m-4">
        <nuxt-link :to="link.to" class="text-blue-500 hover:underline">{{ link.text }}</nuxt-link>
      </div>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'; // Импортируйте компонент Navbar

export default {
  components: {
    Navbar, // Добавьте компонент Navbar в список компонентов
  },
  data() {
    return {
      links: [
        { to: '/block-transactions', text: 'Block Transactions' },
        { to: '/hashrate', text: 'Hashrate' },
        { to: '/miner-pools', text: 'Miner Pools' },
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
/* Добавьте здесь необходимые стили Tailwind CSS, если требуется */
</style>
