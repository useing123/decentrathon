<template>
  <div>
    <Navbar class="mb-4" />
    <h2 class="text-2xl font-bold mb-4">Network Nodes</h2>
    <div v-if="networkNodes.length > 0">
      <ul>
        <li v-for="node in networkNodes" :key="node.blockNumber">
          {{ node.blockNumber }} - {{ node.timeStamp }} - {{ node.hash }} - {{ node.nonce }} - {{ node.blockHash }} - {{ node.transactionIndex }} - {{ node.from }} - {{ node.to }} - {{ node.value }} - {{ node.gas }} - {{ node.gasPrice }} - {{ node.isError }} - {{ node.txreceipt_status }} - {{ node.input }} - {{ node.contractAddress }} - {{ node.cumulativeGasUsed }} - {{ node.gasUsed }} - {{ node.confirmations }} - {{ node.methodId }} - {{ node.functionName }}
        </li>
      </ul>
    </div>
    <p v-else>
      No data available for network nodes.
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
      networkNodes: [],
    };
  },
  methods: {
    async fetchNetworkNodes() {
      try {
        const response = await axios.get('https://api.bscscan.com/api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae', // Replace with the desired address
            startblock: 0,
            endblock: 99999999,
            page: 1,
            offset: 10,
            sort: 'asc',
            apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
          },
        });
        this.networkNodes = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchNetworkNodes();
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
