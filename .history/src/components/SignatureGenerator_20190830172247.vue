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
    <div class="form__item">
      <label
        class="label"
        for="facebook">
        Facebook
      </label>
      <input
        class="input"
        type="url"
        id="facebook"
        v-model="signature.facebook">
    </div>
    <div class="form__item">
      <label
        class="label"
        for="instagram">
        Instagram
      </label>
      <input
        class="input"
        type="url"
        id="instagram"
        v-model="signature.instagram">
    </div>
    <div class="form__item">
      <label
        class="label"
        for="twitter">
        Twitter
      </label>
      <input
        class="input"
        type="url"
        id="twitter"
        v-model="signature.twitter">
    </div>
    <div class="form__item">
      <label
        class="label"
        for="company">
        Empresa del grupo
      </label>
      <input
        class="input"
        type="text"
        id="company"
        v-model="signature.company">
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
        email: '',
        facebook: '',
        instagram: '',
        twitter: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    &__container {
      padding: 40px;
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;
      label {
        font-family: $--font-sans;
      }
      @include phone {
        width: 100%;
      }
    }
  }
</style>
