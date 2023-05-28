<template>
  <div>
    <Navbar class="mb-4" />

    <h2 class="text-2xl font-bold mb-4">Confirmation Count</h2>
    <p v-if="confirmationCount > 0" class="text-lg">
      Confirmation Count: {{ confirmationCount }}
    </p>
    <p v-else class="text-lg">
      No confirmation count data available.
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
      confirmationCount: 0,
      address: '0x530e02c56f4e0967335c1530fb806c3b94c65cac',
      apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
    };
  },
  methods: {
    async fetchConfirmationCount() {
      try {
        const response = await axios.get('https://api.bscscan.com/api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: this.address,
            sort: 'desc',
            apikey: this.apikey,
          },
        });
        this.confirmationCount = response.data.result.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchConfirmationCount();
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
</style>
