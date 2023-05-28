<template>
  <div>
    <Navbar class="mb-4" />

    <h2 class="text-2xl font-bold mb-4">Transaction List</h2>
    <div v-if="transactions.length > 0">
      <ul>
        <li v-for="tx in transactions" :key="tx.hash">
          <p>Hash: {{ tx.hash }}</p>
          <p>From: {{ tx.from }}</p>
          <p>To: {{ tx.to }}</p>
          <p>Value: {{ tx.value }}</p>
        </li>
      </ul>
    </div>
    <p v-else>
      No transactions found.
    </p>
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
      transactions: [],
    };
  },
  methods: {
    async fetchTransactions() {
      try {
        const response = await axios.get('https://api.bscscan.com/api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
            startblock: 0,
            endblock: 99999999,
            page: 1,
            offset: 10,
            sort: 'asc',
            apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
          },
        });
        this.transactions = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchTransactions();
  },
};
</script>

<style>
.text-2xl {
  font-size: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}
</style>
