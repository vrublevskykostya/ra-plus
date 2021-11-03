<template>
  <div>
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
        <v-tab>
          Карта
        </v-tab>
        <v-tab>
          Список конструкцій
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
                                <v-autocomplete
                                  v-model="editedItem.type"
                                  :items="constructions"
                                  label="Тип конструкції"
                                  item-text="name"
                                  item-value="name"
                                >
                                </v-autocomplete>
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
                                <v-text-field v-model="editedItem.size" label="Розмір">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.backlight" label="Підсвітка">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.price" label="Вартість">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-file-input v-if="!editedItem.image" v-model="editedItem.image" label="Фото">
                                </v-file-input>
                                <v-img
                                  max-width="100"
                                  v-else
                                  class="rounded pa-0"
                                  :src="editedItem.image"
                                >
                                  <v-btn
                                    absolute
                                    right
                                    max-width="20"
                                    max-height="20"
                                    class="mt-2 mr-0 close-btn"
                                    fab
                                    color="white"
                                    x-small
                                    @click="deleteImage(editedItem)"
                                  >
                                    <v-icon dark>
                                      mdi-close
                                    </v-icon>
                                  </v-btn>
                                </v-img>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">
                            Закрити
                          </v-btn>
                          <div v-if="editedIndex == -1">
                            <v-btn color="blue darken-1" text @click="addToPlaces(selectedItem)">
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
                        <v-card-text class="text-h6">{{ selectedItem.code }}</v-card-text>
                        <v-card-text>{{ selectedItem.type }}</v-card-text>
                        <v-card-text>Адреса: {{ selectedItem.address }}</v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialogDel">Закрити</v-btn>
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
                    <v-btn
                      max-width="40"
                      width="40"
                      height="25"
                      small
                      disabled
                      text
                    >
                      {{ arr[0].year }}
                    </v-btn>
                    <template v-for="yearObj in arr">
                      <v-btn
                        v-for="month in yearObj.months"
                        :key="month"
                        :class="
                          item.orders[`y_${yearObj.year}`] &&
                          item.orders[`y_${yearObj.year}`][`m_${month}`]
                            ? item.orders[`y_${yearObj.year}`][`m_${month}`].status
                            : ''
                        "
                        min-width="20"
                        width="20"
                        height="25"
                        small
                        @click="
                          item.orders[`y_${yearObj.year}`] &&
                          item.orders[`y_${yearObj.year}`][`m_${month}`]
                            ? log(
                                item.orders[`y_${yearObj.year}`] &&
                                  item.orders[`y_${yearObj.year}`][`m_${month}`]
                              )
                            : createOrder(month, yearObj.year, item)
                        "
                      >
                        {{ month }}
                      </v-btn>
                    </template>

                    <v-btn max-width="40" width="40" height="25" small disabled text>
                      {{ arr[1].year }}
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
                  <v-icon small @click="getSelectedItem(item)">
                    mdi-delete
                  </v-icon>
                </template>
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
          <Clients />
        </v-tab-item>
        <v-tab-item>
          <BoardsMap />
        </v-tab-item>
        <v-tab-item>
          <Construction />
        </v-tab-item>
      </v-tabs>
    </v-col>

    <div class="app-page mt-10">
      <router-view />
    </div>
    <v-dialog v-if="reserveDialog" v-model="reserveDialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ orderForCreate.place.code }}</span>
        </v-card-title>
        <v-card-title>
          <span class="text-subtitle-2">{{ orderForCreate.place.address }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="10">
                <v-autocomplete
                  v-model="orderForCreate.client"
                  :items="clients"
                  label="Клієнт"
                  item-text="name"
                  item-value="id"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-radio-group v-model="orderForCreate.status">
                  <v-radio
                    v-for="i in statusChecked"
                    :key="i.id"
                    :label="i.label"
                    :color="i.color"
                    :value="i.value"
                    :checked="i.checked"
                  >
                  </v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeReserveDialog">
            Закрити
          </v-btn>
          <v-btn color="blue darken-1" text @click="addOrderItem">
            Зберегти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteOrder" max-width="600px">
      <v-card>
        <v-card-title class="status-message">Назва клієнта: "{{ delClient.client.name }}"</v-card-title>
        <v-spacer></v-spacer>
        <v-card-text>Контактна особа: <span class="text-order-dialog">{{ delClient.client.person }}</span></v-card-text>
        <v-card-text>Номер телефону: <a class="text-order-dialog" :href="`tel:${delClient.client.phone}`"><span class="text-order-dialog">{{ delClient.client.phone }}</span></a></v-card-text>
        <v-card-text>Email: <span ><a class="text-order-dialog-email" :href="`mailto:${delClient.client.email}`">{{ delClient.client.email }}</a></span></v-card-text>
        <v-row class="ma-0">
          <v-col class="ml-2">
            <v-radio-group v-model="orderForCreate.status">
              <template v-slot:label>
                <div class="status-message">Змінити статус замовлення:</div>
              </template>
              <v-radio
                v-for="i in statusChecked"
                :key="i.id"
                :default="i.status"
                :label="i.label"
                :color="i.color"
                :value="i.value"
              >
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <template>
        <v-card-actions>
          <v-btn
            color="blue darken-1" text @click="editOrderItem(delClient)">
            Зберегти
          </v-btn>
          <v-btn
            color="blue darken-1" text @click="delOrderItem(delClient.orderId)">
            Видалити
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1" text @click="closeOrderItem()">
            Закрити
          </v-btn>
        </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import lodash from 'lodash';
import { db } from '@/utills/db';
import Clients from './Clients';
import BoardsMap from './BoardsMap';
import Construction from './Construction'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Services',
  data: () => ({
    arr: [
      {
        year: new Date().getFullYear(),
        months: [],
      },
      {
        year: new Date().getFullYear() + 1,
        months: [],
      },
    ],
    reserveDialog: false,
    deleteOrder: false,
    places: [],
    orders: [],
    constructions: [],
    delClient: {
      client: {},
    },
    orderDialog: {
      code: '',
      address: '',
      client: '',
      status: '',
      year: '',
    },
    clients: [],
    items: [],
    red: 'red',
    statusChecked: [
      {
        label: 'Зайнято',
        color: 'red',
        value: 'error',
        checked: true,
      },
      {
        label: 'Заброньовано',
        color: 'yellow',
        value: 'yellow',
        checked: null,
      }
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
      { text: 'Вартість', value: 'price' },
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
      size: '',
      backlight: '',
      price: '',
      image: '',
    },
    defaultItem: {
      code: '',
      type: '',
      address: '',
      st: '',
      x: '',
      y: '',
      size: '',
      backlight: '',
      price: '',
      image: '',
    },
    orderForCreate: {
      place: null,
      month: null,
      year: null,
      status: null,
      client: null,
    },
  }),
  created() {
    const currentMonth = new Date().getMonth() + 1;
    for (let i = 1; i < 13; i += 1) {
      if (i < currentMonth) {
        this.arr[1].months.push(i);
      } else {
        this.arr[0].months.push(i);
      }
    }
  },
  components: {
    BoardsMap,
    Clients,
    Construction,
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Додати новий запис' : 'Редагувати';
    },
    // readyItemMonth() {
    //   const date = new Date();
    //   const currentMonth = date.getMonth();
    //   const newArr = this.months;
    //   const temp = newArr.splice(currentMonth);
    //   return ([...temp, ...newArr]);
    // },
    placesWithOrders() {
      return this.places.map((p) => {
        p.orders = this.getMonthsByPlace(p.id);
        return p;
      });
    },
  },

  methods: {
    closeReserveDialog() {
      this.reserveDialog = false;
    },
    showAddDialog() {
      this.editedIndex = -1;
    },
    close() {
      this.dialog = false;

      this.editedItem = {};
    },
    editItem(item) {
      this.editedIndex = 1;
      this.selectedItem = item;
      this.editedItem = item;
      this.dialog = true;
      console.log(item);
    },
    async showEditItem(item) {
      const imageId = uuidv4();
      let url = null;
      if(item.image) {
        const storage = getStorage();
        const storageRef = ref(storage, imageId);
        await uploadBytes(storageRef, item.image)
        url = await getDownloadURL(ref(storage, imageId))
      }
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
          size: item.size,
          backlight: item.backlight,
          price: item.price,
          image: url || null,
        })
        .then(() => {
          console.log('user updated!');
          this.dialog = false;
          this.editedItem = {};
        });
    },
    closeOrderItem() {
      this.deleteOrder = false;
    } ,
    editOrderItem(item) {
      console.log(item)
      db.collection('orders')
        .doc(item.orderId)
        .update({
          status: this.orderForCreate.status,
        })
        .then(() => {
          console.log('order updated!');
          this.deleteOrder = false;
        });
    },
    delOrderItem(id) {
      console.log(id)
        db.collection('orders')
          .doc(id)
          .delete();
        this.deleteOrder = false;
    },
    dialogDel() {
      this.dialogDelete = false;
      this.selectedItem = {};
      this.editedItem = {};
    },
    getSelectedItem(item) {
      this.dialogDelete = true;
      this.editedItem = item;
      this.selectedItem = item;
    },
    async addToPlaces(item) {
      const imageId = uuidv4();
      let url = null;
        const storage = getStorage();
        const storageRef = ref(storage, imageId);
        await uploadBytes(storageRef, item.image)
        url = await getDownloadURL(ref(storage, imageId))
      this.editedIndex = 0;
      db.collection('places').add({
        code: this.editedItem.code,
        type: this.editedItem.type,
        address: this.editedItem.address,
        st: this.editedItem.st,
        x: this.editedItem.x,
        y: this.editedItem.y,
        size: this.editedItem.size,
        backlight: this.editedItem.backlight,
        price: this.editedItem.price,
        image: url || null,
      });
      this.dialog = false;
    },
    deleteImage(item) {
      const storage = getStorage();
      const desertRef = ref(storage, item.image);
      deleteObject(desertRef).then(() => {
        item.image = null;
      }).catch((error) => {
        console.log('not delete')
      });
    },
    log(order) {
      this.delClient = order;
      this.deleteOrder = true;
      console.log(order);
    },
    addOrderItem() {
      db.collection('orders').add({
        status: this.orderForCreate.status,
        year: this.orderForCreate.year,
        month: this.orderForCreate.month,
        client: db.doc(`clients/${this.orderForCreate.client}`),
        place: db.doc(`places/${this.orderForCreate.placeId}`),
      });
      this.reserveDialog = false;
      console.log(this.orderForCreate.place.orders);
    },
    createOrder(month, year, place) {
      this.orderForCreate.place = lodash.clone(place);
      this.orderForCreate.month = month;
      this.orderForCreate.year = year;
      this.orderForCreate.placeId = place.id;
      this.reserveDialog = true;
      console.log({ month, place: place.id });
      console.log(this.orders);
    },
    getMonthsByPlace(placeId) {
      const preparedOrders = {};
      lodash
        .filter(
          this.orders,
          (o) => o.place.id === placeId
            && (o.year === new Date().getFullYear()
              || o.year === new Date().getFullYear() + 1),
        )
        .forEach((o) => {
          if (!preparedOrders[`y_${o.year}`]) preparedOrders[`y_${o.year}`] = {};
          // preparedOrders.2021.6
          preparedOrders[`y_${o.year}`][`m_${o.month}`] = {
            client: o.client,
            status: o.status,
            orderId: o.id,
          };
          // console.log(preparedOrders);
        });
      return preparedOrders;
    },
    dialogOk(item) {
      db.collection('places')
        .doc(item.id)
        .delete();
      this.dialogDelete = null;
    },
    getClients() {
      this.items = this.clients.map((clients) => ({ name: clients.name, id: clients.id }));
      console.log(this.items);
    },
    closeDialog() {
      console.log(this.orderForCreate);
      this.reserveDialog = false;
    },
    showReserveDialog(item) {
      this.selectedItem = item;
      this.reserveDialog = true;
    },
  },
  firestore: {
    places: db.collection('places'),
    orders: db.collection('orders'),
    clients: db.collection('clients'),
    constructions: db.collection('constructions'),
  },
};
</script>

<style scoped>
.status-message {
  color: red;
  font-weight: 500;
  font-size: 1rem;
}
.text-order-dialog {
  text-decoration: none;
  text-transform: uppercase;
  color: #272727;
  font-weight: 600;
  font-size: 1.1rem;
}
.text-order-dialog-email {
  text-decoration: none;
  color: #272727;
  font-weight: 600;
  font-style: italic;
  font-size: 1.1rem;
}
.close-btn {
  color: red;

}
</style>
