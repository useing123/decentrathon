<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Block Transactions</h2>
      
      <div v-if="blocks.length > 0">
        <h3 class="text-lg font-semibold mb-2">Latest Blocks</h3>
        <ul>
          <li v-for="block in blocks" :key="block.id">
            Block ID: {{ block.id }} | Timestamp: {{ block.timestamp }}
          </li>
        </ul>
      </div>
  
      <div v-if="transactions.length > 0">
        <h3 class="text-lg font-semibold mb-2">Latest Transactions</h3>
        <ul>
          <li v-for="transaction in transactions" :key="transaction.id">
            Transaction ID: {{ transaction.id }} | Amount: {{ transaction.amount }}
          </li>
        </ul>
      </div>
  
      <div v-if="blocks.length === 0 && transactions.length === 0">
        No blocks or transactions available.
      </div>
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
  
  <style>
  /* Добавьте здесь необходимые стили Tailwind CSS, если требуется */
  </style>
  