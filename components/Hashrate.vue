<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Hashrate</h2>
        <p v-if="hashrate > 0">
            Хешрейт: {{ hashrate }}
        </p>
        <p v-else>
            Нет доступных данных о хешрейте.
        </p>
    </div>
</template>
<script>
import api from '@/api';

export default {
    data() {
        return {
            hashrate: 0,
        };
    },
    methods: {
        async fetchHashrate() {
            try {
                const response = await api.get('/hashrate');
                this.hashrate = response.data.hashrate;
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
  