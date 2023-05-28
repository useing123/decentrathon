<template>
  <div>
    <Navbar class="mb-4" />

    <h2 class="text-2xl font-bold mb-4">Block Transactions</h2>

    <div v-if="blocks.length > 0">
      <h3 class="text-lg font-semibold mb-2">Latest Blocks</h3>
      <ul>
        <li v-for="block in blocks" :key="block.number">
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
import axios from 'axios';
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
        const response = await axios.get('https://api.bscscan.com/api', {
          params: {
            module: 'block',
            action: 'getblockcount',
            apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
          },
        });
        const latestBlockNumber = response.data.result;
        const startBlockNumber = latestBlockNumber - 10;
        const blockPromises = [];
        for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
          blockPromises.push(
            axios.get('https://api.bscscan.com/api', {
              params: {
                module: 'block',
                action: 'getblock',
                height: i,
                apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
              },
            })
          );
        }
        const blockResponses = await Promise.all(blockPromises);
        this.blocks = blockResponses.map((response) => response.data.result);
        const transactionPromises = [];
        for (const block of this.blocks) {
          for (const tx of block.transactions) { // Updated 'tx' to 'block.transactions'
            transactionPromises.push(
              axios.get('https://api.bscscan.com/api', {
                params: {
                  module: 'transaction',
                  action: 'gettxinfo',
                  txhash: tx,
                  apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
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
/* Add any necessary Tailwind CSS styles here */
</style>
