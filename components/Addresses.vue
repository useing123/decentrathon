<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Addresses</h2>

        <div v-if="addresses && addresses.length > 0">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="py-2">Name</th>
                        <th class="py-2">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(address, index) in addresses" :key="index" class="border-b">
                        <td class="py-2">{{ address.name }}</td>
                        <td class="py-2">{{ address.balance }}</td>
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

export default {
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
    },
    created() {
        this.fetchAddresses();
    },
};
</script>
  
<style>
/* Добавьте здесь необходимые стили Tailwind CSS, если требуется */
</style>
  