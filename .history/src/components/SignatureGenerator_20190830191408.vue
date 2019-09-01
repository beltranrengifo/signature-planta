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
        name="name"
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
        name="role"
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
        name="email"
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
        name="facebook"
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
        name="instagram"
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
        name="twitter"
        v-model="signature.twitter">
    </div>
    <div class="form__item is-select">
      <label
        class="label"
        for="company">
        Empresa del grupo
      </label>
      <select
        class="select"
        type="text"
        id="company"
        name="company"
        v-model="signature.company">
        <option
          v-for="option in companies"
          :key="option">{{ option }}</option>
      </select>
    </div>
    <div
      v-if="signature.company === 'Otra'"
      class="form__item">
      <label
        class="label"
        for="other">
        Empresa
      </label>
      <input
        class="input"
        type="text"
        id="other"
        name="other"
        v-model="signature.other">
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
        twitter: '',
        company: '',
        other: ''
      },
      companies: [
        'BERODE RESTAURACIÓN, S.L.',
        'BUENALSANTA, S.L.',
        'DESCATALOGADO, S.L.',
        'MUSA LATINA, S.L.',
        'MUSA MALASAÑA, S.L.',
        'PALEO ESPELTO, S.L.',
        'SPIEDO GRILL, S.L.',
        'Otra'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    &__container {
      padding: 32px 16px 0;
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-bottom: 64px;
      padding: 0 8px;
      box-sizing: border-box;
      label {
        font-family: $--font-sans;
      }
      @include phone {
        width: 100%;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
