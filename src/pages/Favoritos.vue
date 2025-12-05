<script setup>
</script>

<template>
  <section class="favorites">
    <h1>MEUS FAVORITOS</h1>

    <div class="empty-box">
      <p>Você ainda não tem nenhum favorito</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.favorites {
  padding: 40px 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
}

.empty-box {
  border: 2px dashed #ccc;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}
</style>
