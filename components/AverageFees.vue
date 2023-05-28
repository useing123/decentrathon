<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Average Fees</h2>

        <div v-if="averageFees.length > 0">
            <ul>
                <li v-for="(fee, index) in averageFees" :key="index" class="mb-4">
                    <h3 class="text-lg font-bold">{{ fee.type }}</h3>
                    <p class="text-gray-500">{{ fee.amount }}</p>
                </li>
            </ul>
        </div>

        <div v-else>
            <p>No average fees found.</p>
        </div>
    </div>
</template>
  
<script>
import api from '@/api';

export default {
    data() {
        return {
            averageFees: [],
        };
    },
    methods: {
        async fetchAverageFees() {
            try {
                const response = await api.get('/gastracker', {
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
    },
    created() {
        this.fetchAverageFees();
    },
};
</script>
  
<style>
/* Добавьте здесь необходимые стили Tailwind CSS, если требуется */
</style>
  