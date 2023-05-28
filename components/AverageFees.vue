<template>
    <div>
      <Navbar class="mb-4" />
  
      <h2 class="text-2xl font-bold mb-4">Average Fees</h2>
  
      <div v-if="averageFees.length > 0">
        <table class="w-full">
          <thead>
            <tr>
              <th class="py-2">Type</th>
              <th class="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fee, index) in averageFees" :key="index" class="border-b">
              <td class="py-2">{{ fee.fast }}</td>
              <td class="py-2">{{ formatAmount(fee.avg) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-else>
        <p>No average fees found.</p>
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
        averageFees: [],
      };
    },
    methods: {
      async fetchAverageFees() {
        try {
          const response = await api.get('/api', {
            params: {
              module: 'gastracker',
              action: 'gasoracle',
            },
          });
          this.averageFees = response.data.result;
        } catch (error) {
          console.error(error);
        }
      },
      formatAmount(amount) {
        if (typeof amount === 'string') {
          amount = parseInt(amount, 10);
        }
        if (typeof amount !== 'number' || isNaN(amount)) {
          return 'Invalid amount';
        }
        return (amount / 1e9).toFixed(2);
      },
    },
    created() {
      this.fetchAverageFees();
    },
  };
  </script>
  
  <style>
  /* Добавьте здесь необходимые стили Tailwind CSS, если требуется */
  </style>
  