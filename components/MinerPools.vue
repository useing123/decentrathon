<template>
    <div>
      <h2>Miner Pools</h2>
      <!-- Здесь будет отображаться информация о размере пулов майнеров -->
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        minerPools: [],
      };
    },
    methods: {
      async fetchMinerPools() {
        try {
          const response = await api.get('/miner-pools');
          this.minerPools = response.data.minerPools;
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      this.fetchMinerPools();
    },
  };
  </script>
  