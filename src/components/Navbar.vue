<template>
  <v-container>
  <v-row
    align="center"
    justify="space-between"
  >
    <v-btn
      @click="toLogIn"
      text
      color="white"
    >
      РА-Плюс
    </v-btn>
    <div>
    <v-btn
      v-for="item in routes"
      :key="item.title"
      text
      color="white"
      :to="item.route"
    >
      {{ item.title }}
    </v-btn>
    </div>

  </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      routes: [
        {
          title: 'Головна',
          route: '/',
        },
        {
          title: 'Наші послуги',
          route: '/services',
        },
        {
          title: 'Портфоліо',
          route: '/gallery',
        },
        {
          title: 'Партнери',
          route: '/partners',
        },
        {
          title: 'Контакти',
          route: '/contacts',
        },
      ],
    };
  },
  methods: {
    toLogIn() {
      this.$router.push('/login');
    },
    toHome() {
      this.$router.push('/');
    },
    toServices() {
      this.$router.push('/services');
    },
    toGallery() {
      this.$router.push('/gallery');
    },
    toPartners() {
      this.$router.push('/partners');
    },
    toContacts() {
      this.$router.push('/contacts');
    },
  },
};
</script>

<style scoped>

</style>
