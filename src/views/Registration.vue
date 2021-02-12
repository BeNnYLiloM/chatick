<template>
  <v-container>
    <v-form class="registration">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
        :rules="passRules"
        :type="showPass ? 'text' : 'password'"
        label="Password"
        required
        @click:append="showPass = !showPass"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        :append-icon="showConfPass ? 'mdi-eye-off' : 'mdi-eye'"
        :rules="passConfirmRules"
        :type="showConfPass ? 'text' : 'password'"
        label="Confirm Password"
        required
        @click:append="showConfPass = !showConfPass"
      ></v-text-field>

      <div class="mb-5">
        <router-link :to="{name: 'login'}">Login</router-link>
      </div>

      <v-btn color="success" class="mr-4" @click="login">
        Registration
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      showPass: false,
      showConfPass: false,
      passRules: [value => !!value || 'Required'],
      passConfirmRules: [
        value => (value == this.password ? true : 'Passwords must be equal'),
        value => !!value || 'Required'
      ],
      emailRules: [
        value => !!value || 'E-mail is required',
        value => /.+@.+/.test(value) || 'E-mail must be valid'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  max-width: 400px;
  margin: 0 auto;
}
</style>
