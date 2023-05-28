<template>
    <div>
      <h2>Confirmation Count</h2>
      <!-- Здесь будет отображаться информация о количестве подтверждений -->
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        confirmationCount: 0,
      };
    },
    methods: {
      async fetchConfirmationCount() {
        try {
          const response = await api.get('/confirmation-count');
          this.confirmationCount = response.data.confirmationCount;
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      this.fetchConfirmationCount();
    },
  };
  </script>
  