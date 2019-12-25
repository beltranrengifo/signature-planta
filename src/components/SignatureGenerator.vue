<template>
  <div class="form__container">
    <div class="form__item required">
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
        for="phone">
        Teléfono
      </label>
      <input
        class="input"
        type="phone"
        id="phone"
        name="phone"
        v-model="signature.phone">
    </div>
    <div class="form__item">
      <label
        class="label"
        for="facebook">
        Web URL
      </label>
      <input
        class="input"
        type="url"
        id="web"
        name="web"
        v-model="signature.web">
    </div>
    <div class="form__item">
      <label
        class="label"
        for="instagram">
        Mostrar enlace a Instagram
      </label>
      <toggle-button
        :value="true"
        @change="signature.useInstagram = !signature.useInstagram"/>
    </div>
    <div class="form__item">
      <label
        class="label"
        for="image">
        Ocultar imagen
      </label>
      <toggle-button
        @change="signature.image = !signature.image"/>
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
        email: '',
        phone: '',
        web: process.env.VUE_APP_WEB_URL,
        instagram: process.env.VUE_APP_INSTAGRAM_URL,
        useInstagram: true,
        image: true
      }
    }
  },
  watch: {
    signature: {
      deep: true,
      immediate: true,
      handler (val) {
        this.$emit('signatureChange', val)
      }
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
      margin-bottom: 42px;
      padding: 0 8px;
      box-sizing: border-box;
      @include phone {
        width: 100%;
      }
      &:last-child {
        margin-bottom: 32px;
      }
    }
  }
</style>
