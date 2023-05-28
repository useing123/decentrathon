<template>
    <div>
      <Navbar class="mb-4" />
  
      <h2 class="text-2xl font-bold mb-4">Block Transactions</h2>
  
      <div v-if="blocks.length > 0">
        <h3 class="text-lg font-semibold mb-2">Latest Blocks</h3>
        <ul>
          <li v-for="block in blocks" :key="block.id">
            Block ID: {{ block.number }} | Timestamp: {{ block.timestamp }}
          </li>
        </ul>
      </div>
  
      <div v-if="transactions.length > 0">
        <h3 class="text-lg font-semibold mb-2">Latest Transactions</h3>
        <ul>
          <li v-for="transaction in transactions" :key="transaction.hash">
            Transaction ID: {{ transaction.hash }} | Amount: {{ transaction.value }}
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
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        blocks: [],
        transactions: [],
      };
    },
    methods: {
      async fetchBlockTransactions() {
        try {
          const response = await api.get('/block/latest', {
            params: {
              module: 'block',
              action: 'getblockcount',
            },
          });
          const latestBlockNumber = response.data.result;
          const startBlockNumber = latestBlockNumber - 10;
          const blockPromises = [];
          for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
            blockPromises.push(
              api.get('/block/details', {
                params: {
                  module: 'block',
                  action: 'getblock',
                  height: i,
                },
              })
            );
          }
          const blockResponses = await Promise.all(blockPromises);
          this.blocks = blockResponses.map((response) => response.data.result);
          const transactionPromises = [];
          for (const block of this.blocks) {
            for (const tx of block.tx) {
              transactionPromises.push(
                api.get('/transaction/details', {
                  params: {
                    module: 'transaction',
                    action: 'gettxinfo',
                    txhash: tx,
                  },
                })
              );
            }
          }
          const transactionResponses = await Promise.all(transactionPromises);
          this.transactions = transactionResponses.map(
            (response) => response.data.result
          );
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
  