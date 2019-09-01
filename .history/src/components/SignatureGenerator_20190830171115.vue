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
    <div class="form__item">
      <label
        class="label"
        for="role">
        Rol
      </label>
      <input
        class="input"
        type="text"
        id="role"
        v-model="signature.role">
    </div>
    <div class="form__item">
      <label
        class="label"
        for="email">
        Email
      </label>
      <input
        class="input"
        type="email"
        id="email"
        v-model="signature.email">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignatureGenerator',
  data () {
    return {
      signature: {
        name: '',
        role: '',
        email: ''
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
      margin-bottom: 64px;
      label {
        font-family: $--font-sans;
      }
    }
  }
</style>
