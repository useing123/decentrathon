<template>
  <div>
    <Navbar class="mb-4" />

    <h2 class="text-2xl font-bold mb-4">Hashrate</h2>
    <p v-if="hashrate > 0">
      Hashrate: {{ hashrate }}
    </p>
    <p v-else>
      No hashrate data available.
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
      hashrate: 0,
    };
  },
  methods: {
    async fetchHashrate() {
      try {
        const response = await axios.get('https://api.bscscan.com/api', {
          params: {
            module: 'proxy',
            action: 'eth_hashrate',
            apikey: 'YWEB7YAKX428D558E1ZTAMMXR2QDS9GEEY',
          },
        });
        this.hashrate = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchHashrate();
  },
};
</script>

<style>
.text-2xl {
  font-size: 1.5rem;
}
</style>
