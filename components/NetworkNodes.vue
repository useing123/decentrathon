<template>
    <div>
      <h2>Network Nodes</h2>
      <!-- Здесь будет отображаться информация о сетевых узлах -->
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        networkNodes: [],
      };
    },
    methods: {
      async fetchNetworkNodes() {
        try {
          const response = await api.get('/network-nodes');
          this.networkNodes = response.data.networkNodes;
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
  