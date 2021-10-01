<template>
  <v-col>

    <v-row
      justify="center"
      class="mb-10"
    >
      <h3>LOGIN:</h3>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-card
        elevation="2"
        class="pa-10"
        min-width="500"
      >
        <form class="m-10">
          <v-text-field
            v-model="form.login"
            label="Логін"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Пароль"
            type="password"
            required
          ></v-text-field>

          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn
            @click="clear">
            clear
          </v-btn>
        </form>
      </v-card>
    </v-row>
  </v-col>

</template>

<script>
import { auth, db } from '@/utills/db';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";

export default {
  name: 'Login',
  data: () => ({
    users: [],
    form: {
      name: '',
      login: '',
      password: '',
    },
  }),

  methods: {
    clear() {
      this.form.name = '';
      this.form.login = '';
      this.form.password = '';
    },
    submit() {
      auth.signInWithEmailAndPassword(this.form.login, this.form.password)
        .then((userCredential) => {
          // Signed inlog
          console.log(userCredential);
          const user = userCredential.user;
          this.$router.push('/services');
          this.form.login = '';
          this.form.password = '';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code);
          console.log(error.message)
        });

    },
  },
  firestore: {
    users: db.collection('places'),
  },
};
</script>

<style scoped>

</style>
