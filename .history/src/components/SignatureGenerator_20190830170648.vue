<template>
  <div class="form__container">
    <div class="form__item">
      <label
        class="label"
        for="name">
        Nombre
      </label>
      <input
        class="input"
        type="text"
        id="name"
        v-model="signature.name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignatureGenerator',
  data () {
    return {
      signature: {
        name: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    &__container {
      padding: 40px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      label {
        font-family: $--font-sans;
      }
    }
  }
</style>
