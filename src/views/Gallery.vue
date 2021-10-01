<template>
  <v-row
    align="center"
    justify="center"
  >
<!--  <h3>Gallery</h3>-->
    <v-container
      class="fill-height"
      style="min-height: 434px"
    >
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col
            v-for="item in imgOpt"
            :key="item.src"
            cols="4">
            <v-card
              class="mt-5"
            >
              <v-img
                :src="item.src"
                height="200"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                {{ item.title }}
              </v-card-title>
            </v-card>
          </v-col>

        </v-row>
      </v-fade-transition>
    </v-container>

  </v-row>
</template>

<script>
export default {
  name: 'Gallery',
  data: () => ({
    imgOpt: [
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title',
      },
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title2',
      },
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title3',
      },
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title4',
      },
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title2',
      },
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title3',
      },
      {
        src: 'https://picsum.photos/350/165?random',
        title: 'Image title4',
      },
    ],
  }),
};
</script>

<style scoped>

</style>
