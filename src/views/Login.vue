<template>
  <v-container>
    <v-form class="login">
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

      <div class="mb-5">
        <router-link :to="{name: 'registration'}">Registration</router-link>
      </div>

      <v-btn color="success" class="mr-4" @click="login">
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      showPass: false,
      passRules: [value => !!value || 'Required'],
      emailRules: [
        value => !!value || 'E-mail is required',
        value => /.+@.+/.test(value) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    login() {}
  }
}
</script>

<style lang="scss" scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
}
</style>
