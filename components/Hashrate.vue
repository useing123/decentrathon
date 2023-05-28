<template>
    <div>
      <h2>Hashrate</h2>
      <!-- Здесь будет отображаться информация о хешрейте -->
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        hashrate: 0,
      };
    },
    methods: {
      async fetchHashrate() {
        try {
          const response = await api.get('/hashrate');
          this.hashrate = response.data.hashrate;
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
  