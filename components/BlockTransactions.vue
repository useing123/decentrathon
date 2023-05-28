<template>
    <div>
      <h2>Block Transactions</h2>
      <!-- Здесь будет отображаться информация о блоках и транзакциях -->
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        blocks: [],
        transactions: [],
      };
    },
    methods: {
      async fetchBlockTransactions() {
        try {
          const response = await api.get('/block-transactions');
          this.blocks = response.data.blocks;
          this.transactions = response.data.transactions;
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      this.fetchBlockTransactions();
    },
  };
  </script>
  