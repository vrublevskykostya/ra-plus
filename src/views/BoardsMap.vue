<template>
  <v-card>
  <v-dialog v-model="drawer" max-width="600px">
    <v-card  class="pt-2">
      <v-card-text>
        <span class="text-h6">{{ selectedPlace.address }}</span>
      </v-card-text>
      <v-container
        fluid
      >
      <v-row class="d-flex justify-start align-start">
        <v-col cols="7">
          <v-img
            @click="showImage"
            class="rounded pointer"
            :src="selectedPlace.image"
          ></v-img>
        </v-col>
        <v-col cols="5">
          <v-card-text class="pa-0 text-h6">
            {{ selectedPlace.type }}:
            <span class="text-h6">
            {{ selectedPlace.code }}
            </span>
          </v-card-text>
          <hr>
          <v-card-text class="pt-5">
            Розмір: {{ selectedPlace.size }} ({{ selectedPlace.st }})
          </v-card-text>
          <v-card-text class="pt-1">
            Підсвітка: {{ selectedPlace.backlight }} </v-card-text>
          <v-card-text class="pt-1">
            Вартість:
            <span class="font-weight-bold">
              {{ selectedPlace.price }} грн.
            </span>
          </v-card-text>
        </v-col>

      </v-row>
      </v-container>
      <v-card-text>
        <v-container>
          <v-row>

          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          Закрити
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="image" max-width="800px">
    <v-img
      @click="closeImage"
      class="rounded pointer"
      :src="selectedPlace.image"
    >
    </v-img>
    </v-dialog>

    </v-dialog>

        <GmapMap
          :center="center"
          :zoom="15"
          map-type-id="terrain"
          style="width: 100%; height: 600px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.positionGmap"
            :clickable="true"
            @click="selectPlaceItem(m)"
            :icon="m.markerOption"
          />
        </GmapMap>
      </v-card>

</template>

<script>
import { gmapApi } from 'vue2-google-maps';
import { db } from '@/utills/db';

export default {
  name: 'BoardsMap',
  data: () => ({
    center: { lat: 48.68583782012766, lng: 26.590928198088818 },
    places: [],
    orders: [],
    tempPlaces: {
        error: "billboard_red.png",
        yellow: "billboard_yellow.png",
        green: "billboard_green.png"
    },
    drawer: false,
    image: false,
    group: null,
    selectedPlace: {},
  }),
  computed: {
    google: gmapApi,
    markers() {
      return this.places
        .map((place) => {
          place.positionGmap = { lat: Number(place?.position?.x), lng: Number(place?.position?.y) };
          place.markerOption = {
            size: {
              width: 50,
              height: 50,
              f: 'px',
              b: 'px',
            },
            scaledSize: {
              width: 50,
              height: 50,
              f: 'px',
              b: 'px',
            },
          };
          const order = this.orders.find((order) => {
            return order.place.id === place.id
          });
          place.markerOption.url = this.tempPlaces[order?.status || "green"];
          return place;
        });
    },
  },
  methods: {
    selectPlaceItem(m) {
      this.drawer = !this.drawer;
      this.selectedPlace = m;
      console.log(this.selectedPlace);
    },
    close() {
      this.drawer = false;
    },
    showImage() {
      this.image = !this.image;
    },
    closeImage() {
      this.image = false;
    }
  },
  firestore: {
    places: db.collection('places'),
    orders: db.collection('orders'),
    clients: db.collection('clients'),
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

</style>
