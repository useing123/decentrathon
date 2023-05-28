<template>
    <div>
      <Navbar class="mb-4" />
  
      <h2 class="text-2xl font-bold mb-4">Hashrate</h2>
      <p v-if="hashrate > 0">
        Хешрейт: {{ hashrate }}
      </p>
      <p v-else>
        Нет доступных данных о хешрейте.
      </p>
    </div>
  </template>
  
  <script>
  import api from '@/api';
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        hashrate: 0,
      };
    },
    methods: {
      async fetchHashrate() {
        try {
          const response = await api.get('/miner/miningStatistics', {
            params: {
              module: 'stats',
              action: 'getminingstatistics',
            },
          });
          this.hashrate = response.data.result[0].hashRate;
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      this.fetchHashrate();
    },
  };
  </script>
  
  <style>
  .text-2xl {
    font-size: 1.5rem;
  }
  </style>
  