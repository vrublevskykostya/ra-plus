<template>
  <v-dialog v-model="reserveDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Dun 03</span>
      </v-card-title>
      <v-card-title>
        <span class="text-subtitle-2"
          >м.Кам'янець-Подільський, перехрестя вулиць Гагаріна та Пушкінської</span
        >
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row> </v-row>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="10">
              <v-select @click="getClients" :items="items" label="Клієнт"> </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-radio-group v-model="red">
                <v-radio
                  v-for="i in statusChecked"
                  :key="i.id"
                  :label="i.label"
                  :color="i.color"
                  :value="i.value"
                >
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text>
          Відміна
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="closeDialog"
        >
          Зберегти
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { db } from '@/utills/db';

export default {
  name: 'ReserveDialog',
  data: () => ({
    reserveDialog: true,
    items: [],
    red: 'red',
    statusChecked: [
      {
        label: 'Зайнято',
        color: 'red',
        value: 'value1',
      },
      {
        label: 'Заброньовано',
        color: 'orange',
        value: 'value2',
      },
      {
        label: 'Вільно',
        color: 'success',
        value: 'value3',
      },
    ],
  }),
  methods: {
    getClients() {
      this.items = this.clients.map((clients) => clients.name);
      console.log(this.items);
    },
    closeDialog() {
      this.reserveDialog = false;
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
