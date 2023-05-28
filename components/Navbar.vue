<template>
    <div>
      <nav class="bg-gray-200 p-4">
        <div class="flex justify-center">
          <div v-for="link in links" :key="link.to" class="m-4">
            <nuxt-link :to="link.to" class="text-blue-500 hover:underline">{{ link.text }}</nuxt-link>
          </div>
        </div>
      </nav>
  
      <nuxt-child />
    </div>
  </template>
  
  <script>
  export default {
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
  