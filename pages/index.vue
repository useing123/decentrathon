<template>
  <div>
    <nuxt-link to="/block-transactions">Block Transactions</nuxt-link>
    <nuxt-link to="/hashrate">Hashrate</nuxt-link>
    <nuxt-link to="/miner-pools">Miner Pools</nuxt-link>
    <nuxt-link to="/confirmation-count">Confirmation Count</nuxt-link>
    <nuxt-link to="/average-fees">Average Fees</nuxt-link>
    <nuxt-link to="/addresses">Addresses</nuxt-link>
    <nuxt-link to="/network-nodes">Network Nodes</nuxt-link>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  // ...
}
</script>
