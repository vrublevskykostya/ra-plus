<template>
  <div>
    <v-btn @click="getMarkersPosition">
      pos
    </v-btn>
    <GmapMap
      :center="{ lat: 48.68583782012766, lng: 26.590928198088818 }"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 600px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="markerOptions"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';
import { db } from '@/utills/db';

const markerUrl = require('@/assets/iconboard.png');

export default {
  name: 'BoardsMap',
  places: null,
  data: () => ({
    pos: [],
    markerOptions: {
      url: markerUrl,
      size: {
        width: 80,
        height: 80,
        f: 'px',
        b: 'px',
      },
      scaledSize: {
        width: 80,
        height: 80,
        f: 'px',
        b: 'px',
      },
    },
    markers: [
      // {
      //   position: {
      //     lat: 48.68374788670835,
      //     lng: 26.580770056116368,
      //   },
      // },
      // {
      //   position: {
      //     lat: 48.67288790934487,
      //     lng: 26.585989521677728,
      //   },
      // },
      // {
      //   position: {
      //     lat: 48.68715547083254,
      //     lng: 26.598442585753535,
      //   },
      // },
    ],
  }),
  computed: {
    google: gmapApi,
  },
  methods: {
    getMarkersPosition() {
      const arr = this.places.map(({ x, y }) => ({ position: { lat: Number(x), lng: Number(y) } }));
      console.log(arr);
      this.markers = arr;
    },
    getPlaces() {
      this.pos = this.places;
      console.log(this.pos);
    },
  },
  firestore: {
    places: db.collection('places'),
    orders: db.collection('orders'),
    clients: db.collection('clients'),
  },
};
</script>

<style scoped></style>
