<template>
  <div
    class="preview app-width app-container"
    id="signature">
    <meta
      http-equiv="Content-Type"
      content="text/html charset=UTF-8" />
    <table
      v-if="person.name"
      border="0"
      cellpadding="0"
      style="table-layout:auto;margin-top:40px;">
      <tbody>
        <tr>
          <td
            v-if="person.image"
            style="width:75px;">
            <img
              :src="logoUrl"
              width="75"
              height="166"
              alt="Planta Paisajistas Logo"
              title="Planta Paisajistas">
          </td>
          <td
            v-if="person.image"
            style="width:25px;" />
          <td style="vertical-align:bottom;">
            <p style="text-transform:capitalize;-webkit-margin-before:0;-webkit-margin-after:0;font-family:Helvetica, Arial, sans-serif;font-size:14px;color:#716258;letter-spacing:1;margin: 12px 0 8px 0;">
              <strong>{{ person.name }}</strong></p>
            <a
              :href="mailLink"
              style="text-decoration:none;word-break:keep-all;">
              <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Helvetica, Arial, sans-serif;font-size:12px;color:#716258;letter-spacing:1;margin:0 0 2px 0;word-break:keep-all;white-space:nowrap;">
                {{ person.email }}
              </p>
            </a>
            <a
              :href="webLink"
              style="text-decoration:none;">
              <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Helvetica, Arial, sans-serif;font-size:12px;color:#716258;letter-spacing:1;margin:0 0 2px 0;">
                {{ person.web }}
              </p>
            </a>
            <a
              :href="phoneLink"
              style="text-decoration:none;word-break:keep-all;margin-bottom:3px;display:inline-block;">
              <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Helvetica, Arial, sans-serif;font-size:12px;color:#716258;letter-spacing:1;margin:0;word-break:keep-all;white-space:nowrap;">
                {{ person.phone }}
              </p>
            </a>
            <a
              v-if="person.useInstagram"
              :href="person.instagram"
              style="text-decoration:none;word-break:keep-all;margin-bottom:0;display:block;margin-top:8px;">
              <img
                src="https://plantapaisajistas.com/firma/img/instagram-logo.jpg"
                alt="Instagram Planta Paisajistas"
                style="width:26px;">
            </a>
          </td>
        </tr>
        <tr>
          <td style="height:25px;" colspan="3"></td>
        </tr>
        <tr>
          <td style="vertical-align:top;" colspan="3" width="275">
            <p style="text-align:justify;-webkit-margin-before:0;-webkit-margin-after:0;font-size:5px;font-family:Helvetica, Arial, sans-serif;font-weight:normal;margin:0;color:#716258">
              Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener
              información confidencial sometida a secreto profesional. No está permitida su comunicación, reproducción o
              distribución sin la autorización expresa de Planta Paisajistas, S.L.. Si usted no es el destinatario
              final, por favor elimínelo e infórmenos por esta vía. De conformidad con lo dispuesto en el Reglamento
              (UE) 2016/679 de 27 de abril de 2016 (GDPR), le informamos que los datos personales y dirección de correo
              electrónico, recabados del propio interesado o de fuentes públicas, serán tratados bajo la responsabilidad
              de Planta Paisajistas, S.L. para el envío de comunicaciones ordinarias y se conservarán mientras exista un
              interés mutuo para ello. Los datos no serán cedidos a terceros, salvo por imperativo legal y, en su caso,
              a otras empresas del grupo. Le informamos que puede ejercer los derechos de acceso, rectificación,
              portabilidad y supresión de sus datos y los de limitación y oposición a su tratamiento dirigiéndose a Av.
              Europa, 30, P5 Ei BB - 28023 Madrid. Email: <a style="color:#716258;text-decoration:none;" href="mailto:info@plantapaisajistas.com">info@plantapaisajistas.com</a>. Si
              considera que el tratamiento no se ajusta a la normativa vigente, podrá presentar una reclamación ante la
              autoridad de control en <a style="color:#716258;text-decoration:none;" href="https://www.agpd.es">www.agpd.es</a>.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="no-signature" v-else>
      <h4>Completa los campos obligatorios</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignaturePrerender',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    mailLink () {
      return `mailto:${this.person.mail}`
    },
    phoneLink () {
      return `tel:${this.person.phone}`
    },
    webLink () {
      return `https://${this.person.web}`
    },
    logoUrl () {
      return process.env.VUE_APP_LOGO_URL
    }
  }
}
</script>

<style lang="scss" scoped>
  .preview {
    min-height: 430px;
    padding: 24px 0 48px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  .no-signature {
    font-family: $--font-serif;
    font-style: italic;
    align-self: center;

    h4 {
      font-weight: 100;
      font-size: 14px;
      letter-spacing: .5px;
      color: $--color-grey-dark;
    }
  }

</style>
