<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Addresses</h2>
      
      <div v-if="addresses.length > 0">
        <ul>
          <li v-for="(address, index) in addresses" :key="index" class="mb-4">
            <h3 class="text-lg font-bold">{{ address.name }}</h3>
            <p class="text-gray-500">{{ address.balance }}</p>
          </li>
        </ul>
      </div>
  
      <div v-else>
        <p>No addresses found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/api';
  
  export default {
    data() {
      return {
        addresses: [],
      };
    },
    methods: {
      async fetchAddresses() {
        try {
          const response = await api.get('/addresses');
          this.addresses = response.data.addresses;
        } catch (error) {
          console.error(error);
        }
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
  