<template>
    <div>
      <Navbar class="mb-4" />
      <h2 class="text-2xl font-bold mb-4">Addresses</h2>
      <div v-if="addresses && addresses.length > 0">
        <table class="w-full border">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Address</th>
              <th class="py-2 px-4 border-b">Balance (BNB)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(address, index) in addresses" :key="index" class="border-b">
              <td class="py-2 px-4"><a :href="getAddressUrl(address)">{{ address.to }}</a></td>
              <td class="py-2 px-4">{{ formatBalance(address.value) }}</td>
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
  import axios from 'axios';
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        addresses: [],
      };
    },
    methods: {
      async fetchAddresses() {
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
          this.addresses = response.data.result;
        } catch (error) {
          console.error(error);
        }
      },
      getAddressUrl(address) {
        return `https://bscscan.com/address/${address.to}`;
      },
      formatBalance(balance) {
        return (balance / 1e18).toFixed(4);
      },
    },
    created() {
      this.fetchAddresses();
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  