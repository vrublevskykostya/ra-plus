<template>
  <div>
    <p>{{ placesWithOrders }}</p>
    <v-col>
      <v-tabs centered color="red white">
        <v-tab>
          Печатки
        </v-tab>
        <v-tab>
          Зовнішня реклама
        </v-tab>
        <v-tab>
          Реклама в ліфтах
        </v-tab>
        <v-tab>
          Список клієнтів
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                1Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam
                feugiat lorem non metus. Sed a libero.
              </p>

              <p>
                1Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus
                metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam
                lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
              </p>

              <p class="mb-0">
                1Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero
                tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut
                odio.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="placesWithOrders"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Перелік рекламних конструкцій:</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="600px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="red"
                          dark
                          class="mb-2"
                          v-bind="attrs"
                          v-on="on"
                          @click="showAddDialog"
                        >
                          Додати
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.code" label="Код"> </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.type" label="Тип конструкції">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.address" label="Адреса">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.st" label="Ст."> </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.x" label="Координати (X)">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.y" label="Координати (Y)">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.reserve" label="Бронювання">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.size" label="Розмір">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.backlight" label="Підсвітка">
                                </v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">
                            Відміна
                          </v-btn>
                          <div v-if="editedIndex == -1">
                            <v-btn color="blue darken-1" text @click="addToPlaces">
                              Зберегти
                            </v-btn>
                          </div>
                          <div v-else>
                            <v-btn color="blue darken-1" text @click="showEditItem(selectedItem)">
                              Зберегти
                            </v-btn>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                      <v-card>
                        <v-card-title class="text-h5">
                          Видалити об'єкт?
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialogDel">Відміна</v-btn>
                          <v-btn color="blue darken-1" text @click="dialogOk(selectedItem)"
                            >Так
                          </v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:item.number="{ item }">
                  <span>
                    {{ places.indexOf(item) + 1 }}
                  </span>
                </template>
                <template v-slot:item.orders="{ item }">
                  <v-card min-width="400">
                    <v-btn max-width="40" width="40" height="25" small>2021</v-btn>
                    <v-btn
                      v-for="i in readyItemMonth"
                      :key="i"
                      :class="item.orders[i] ? item.orders[i].status : ''"
                      min-width="20"
                      width="20"
                      height="25"
                      small
                      @click="item.orders[i] ? log(item.orders[i].client) : createOrder(i, item)"
                    >
                      {{ i }}
                    </v-btn>
                    <v-btn max-width="40" width="40" height="25" small>
                      2022
                    </v-btn>
                  </v-card>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon
                    v-model="dialog"
                    max-width="600px"
                    small
                    class="mr-2"
                    @click="editItem(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="getSelectedItem(item.id)">
                    mdi-delete
                  </v-icon>
                </template>
<!--                <template v-slot:no-data>-->
<!--                  <v-btn color="primary" @click="initialize">-->
<!--                    Reset-->
<!--                  </v-btn>-->
<!--                </template>-->
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                3Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui.
                Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a
                accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor
                auctor, justo.
              </p>

              <p class="mb-0">
                3Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien
                ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <Clients/>
        </v-tab-item>
      </v-tabs>
    </v-col>

    <div class="app-page mt-10">
      <router-view />
    </div>
  </div>
</template>

<script>
import lodash from 'lodash';
import { db } from '@/utills/db';
import Clients from './Clients';

export default {
  name: 'Services',
  data: () => ({
    places: [],
    orders: [],
    clients: [],
    tabs: [
      {
        title: 'Печатки',
        route: '/boardsMap',
      },
      {
        title: 'Зовнішня реклама',
        route: '/boardsMap',
      },
      {
        title: 'Реклама в ліфтах',
        route: '/boardsMap',
      },
    ],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dialog: false,
    dialogDelete: null,
    selectedItem: {},
    headers: [
      { text: '#', align: 'start', value: 'number' },
      { text: 'Код', value: 'code' },
      { text: 'Тип конструкції', value: 'type' },
      { text: 'Адреса', value: 'address' },
      { text: 'Ст.', value: 'st' },
      { text: '"X"', value: 'x' },
      { text: '"Y"', value: 'y' },
      { text: 'Бронювання', value: 'orders' },
      { text: 'Розмір', value: 'size' },
      { text: 'Підсвітка', value: 'backlight' },
      { text: 'Дії', value: 'actions', sortable: false },
    ],
    tableItems: [],
    editedIndex: -1,
    editedItem: {
      code: '',
      type: '',
      address: '',
      st: '',
      x: '',
      y: '',
      reserve: '',
      size: '',
      backlight: '',
    },
    defaultItem: {
      code: '',
      type: '',
      address: '',
      st: '',
      x: '',
      y: '',
      reserve: '',
      size: '',
      backlight: '',
    },
  }),
  components: {
    Clients,
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Додати новий запис' : 'Редагувати';
    },
    readyItemMonth() {
      const date = new Date();
      const currentMonth = date.getMonth();
      const newArr = this.months;
      const temp = newArr.splice(currentMonth);
      return ([...temp, ...newArr]);
    },
    placesWithOrders() {
      return this.places.map((p) => {
        p.orders = this.getMonthsByPlace(p.id);
        return p;
      });
    },
  },

  methods: {
    showAddDialog() {
      this.editedIndex = -1;
    },
    close() {
      this.dialog = false;
    },
    editItem(item) {
      this.editedIndex = 1;
      this.selectedItem = item;
      this.editedItem = item;
      this.dialog = true;
      console.log(item);
    },
    showEditItem(item) {
      this.dialog = true;
      this.editedItem = item;
      db.collection('places')
        .doc(item.id)
        .update({
          code: item.code,
          type: item.type,
          address: item.address,
          st: item.st,
          x: item.x,
          y: item.y,
          reserve: item.reserve,
          size: item.size,
          backlight: item.backlight,
        })
        .then(() => {
          console.log('user updated!');
          this.dialog = false;
          this.editedItem = {};
        });
    },
    dialogDel() {
      this.dialogDelete = false;
    },
    getSelectedItem(item) {
      this.dialogDelete = true;
      this.selectedItem = item;
    },
    addToPlaces() {
      this.editedIndex = 0;
      db.collection('places').add({
        code: this.editedItem.code,
        type: this.editedItem.type,
        address: this.editedItem.address,
        st: this.editedItem.st,
        x: this.editedItem.x,
        y: this.editedItem.y,
        reserve: this.editedItem.reserve,
        size: this.editedItem.size,
        backlight: this.editedItem.backlight,
      });
      this.dialog = false;
    },
    log(client) {
      console.log(client);
    },
    createOrder(month, place) {
      console.log({ month, place: place.id });
      console.log(this.orders);
    },
    getMonthsByPlace(placeId) {
      const preparedOrders = {};
      lodash
        .filter(this.orders, (o) => o.place.id === placeId && o.year === new Date().getFullYear())
        .forEach((o) => {
          preparedOrders[o.month] = {
            client: o.client,
            status: o.status,
          };
        });
      return preparedOrders;
    },
    dialogOk(id) {
      db.collection('places')
        .doc(id)
        .delete();
      this.dialogDelete = null;
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
