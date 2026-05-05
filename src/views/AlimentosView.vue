<script setup>
  import { ref } from 'vue'
  import { listaProdutos } from '@/data/produtos';
  const produtos = ref(listaProdutos)
  produtos.value = produtos.value.filter(p => p.categoria === 'Alimentos')
</script>

<template>

</template>

<style scoped>

</style>
