<template>
  <div class="form__container">
    <div class="form-item">
      <label for="name">
        Nombre
      </label>
      <input type="text" id="name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignatureGenerator'
}
</script>

<style lang="scss" scoped>
  .form {
    &__container {
      padding: 40px;
    }
  }
</style>
