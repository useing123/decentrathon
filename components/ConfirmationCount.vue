<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Confirmation Count</h2>
        <p v-if="confirmationCount > 0" class="text-lg">
            Количество подтверждений: {{ confirmationCount }}
        </p>
        <p v-else class="text-lg">
            Нет доступных данных о количестве подтверждений.
        </p>
    </div>
</template>
  
<script>
import api from '@/api';

export default {
    data() {
        return {
            confirmationCount: 0,
        };
    },
    methods: {
        async fetchConfirmationCount() {
            try {
                const response = await api.get('/transactions', {
                    params: {
                        module: 'account',
                        action: 'txlist',
                        confirmations: 10, // Пример: получение количества подтверждений для последних 10 транзакций
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
  