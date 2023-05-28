<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Miner Pools</h2>
        <div v-if="minerPools.length > 0">
            <ul>
                <li v-for="pool in minerPools" :key="pool.id">{{ pool.name }} - {{ pool.size }}</li>
            </ul>
        </div>
        <p v-else>
            Нет доступных данных о размере пулов майнеров.
        </p>
    </div>
</template>
<script>
import api from '@/api';

export default {
    data() {
        return {
            minerPools: [],
        };
    },
    methods: {
        async fetchMinerPools() {
            try {
                const response = await api.get('/stats/pool', {
                    params: {
                        module: 'stats',
                        action: 'pool',
                    },
                });
                this.minerPools = response.data.result;
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.fetchMinerPools();
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