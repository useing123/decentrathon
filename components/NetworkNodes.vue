<template>
    <div>
      <Navbar class="mb-4" />
  
      <h2 class="text-2xl font-bold mb-4">Network Nodes</h2>
      <div v-if="networkNodes.length > 0">
        <ul>
          <li v-for="node in networkNodes" :key="node.id">{{ node.name }} - {{ node.status }}</li>
        </ul>
      </div>
      <p v-else>
        Нет доступных данных о сетевых узлах.
      </p>
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
        networkNodes: [],
      };
    },
    methods: {
      async fetchNetworkNodes() {
        try {
          const response = await api.get('/network/nodes', {
            params: {
              module: 'stats',
              action: 'getNodes',
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
  