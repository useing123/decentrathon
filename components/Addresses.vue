<template>
    <div>
      <Navbar class="mb-4" /> <!-- Добавьте компонент Navbar и установите класс mb-4 для отступа ниже -->
      <h2 class="text-2xl font-bold mb-4">Addresses</h2>
  
      <div v-if="addresses && addresses.length > 0">
        <table class="w-full border">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Name</th>
              <th class="py-2 px-4 border-b">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(address, index) in addresses" :key="index" class="border-b">
              <td class="py-2 px-4">{{ address.name }}</td>
              <td class="py-2 px-4">{{ formatBalance(address.balance) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-else>
        <p>No addresses found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/api';
  import Navbar from '@/components/Navbar.vue'; // Импортируйте компонент Navbar
  
  export default {
    components: {
      Navbar, // Добавьте компонент Navbar в список компонентов
    },
    data() {
      return {
        addresses: [],
      };
    },
    methods: {
      async fetchAddresses() {
        try {
          const response = await api.get('/account/list', {
            params: {
              module: 'account',
              action: 'list',
            },
          });
          this.addresses = response.data.result;
        } catch (error) {
          console.error(error);
        }
      },
      formatBalance(balance) {
        console.log('Balance:', balance); // Добавим отладочный вывод в консоль
        if (typeof balance !== 'number') {
          return 'Invalid balance'; // Обработка некорректных значений баланса
        }
        return (balance / 1e18).toFixed(2);
      },
    },
    created() {
      this.fetchAddresses();
    },
  };
  </script>
  
  <style>
  /* Добавьте здесь необходимые стили Tailwind CSS, если требуется */
  </style>
  