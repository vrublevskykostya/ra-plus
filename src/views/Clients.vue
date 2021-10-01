<template>
  <div>
    <v-col
    >
        <v-row
          justify="center"
          class="mb-10"
        >
          <h3>Clients</h3>
        </v-row>

      <v-data-table
        :headers="headers"
        :items="clients"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Список клієнтів:</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
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
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Назва клієнта"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.person"
                          label="Контактна особа"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.address"
                          label="Адреса"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.phone"
                          label="Телефон"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                        >
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
                    <v-btn color="blue darken-1" text @click="addToClients">
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
                <v-card-title
                  class="text-h5"
                >
                  Бажаєте видалити?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialogDel">Відміна</v-btn>
                  <v-btn color="blue darken-1" text @click="dialogOk(selectedItem)">Так</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template
          v-slot:item.number="{ item }">
                <span
                >
                  {{ clients.indexOf(item) + 1 }}
                </span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="getSelectedItem(item.id)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>

    </v-col>

    <div class="app-page mt-10">
      <router-view />
    </div>
  </div>

</template>

<script>
import { db } from '@/utills/db';

export default {
  name: 'Services',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    clients: [],
    headers: [
      { text: '#', align: 'start', value: 'number' },
      { text: 'ID', value: 'id' },
      { text: 'Назва клієнта', value: 'name' },
      { text: 'Контактна особа', value: 'person' },
      { text: 'Адреса', value: 'address' },
      { text: 'Телефон', value: 'phone' },
      { text: 'Email', value: 'email' },
      { text: 'Дії', value: 'actions', sortable: false },
    ],
    tableItems: [],
    editedIndex: -1,
    selectedItem: {},
    editedItem: {
      number: '',
      id: '',
      name: '',
      person: '',
      address: '',
      phone: '',
      email: '',
    },
    // defaultItem: {
    //   number: '',
    //   id: '',
    //   name: '',
    //   person: '',
    //   address: '',
    //   phone: '',
    //   email: '',
    // },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Додати новий запис' : 'Редагувати';
    },
  },

  methods: {
    close() {
      this.dialog = false;
    },
    dialogDel() {
      this.dialogDelete = false;
    },
    getSelectedItem(item) {
      this.dialogDelete = true;
      this.selectedItem = item;
    },
    dialogOk(id) {
      db.collection('clients')
        .doc(id)
        .delete();
      this.dialogDelete = null;
    },
    showAddDialog() {
      this.dialog = true;
    },
    addToClients() {
      this.editedIndex = -1;
      db.collection('clients').add({
        number: this.editedItem.number,
        id: this.editedItem.id,
        name: this.editedItem.name,
        person: this.editedItem.person,
        address: this.editedItem.address,
        phone: this.editedItem.phone,
        email: this.editedItem.email,
      });
      this.dialog = false;
    },
    showEditItem(item) {
      this.editedIndex = 0;
      this.dialog = true;
      this.editedItem = item;
      db.collection('clients')
        .doc(item.id)
        .update({
          number: this.editedItem.number,
          id: this.editedItem.id,
          name: this.editedItem.name,
          person: this.editedItem.person,
          address: this.editedItem.address,
          phone: this.editedItem.phone,
          email: this.editedItem.email,
        })
        .then(() => {
          console.log('client updated!');
          this.dialog = false;
          this.editedItem = {};
        });
    },
    editItem(item) {
      this.editedIndex = 1;
      this.selectedItem = item;
      this.editedItem = item;
      this.dialog = true;
      console.log(item);
    },
  },
  firestore: {
    clients: db.collection('clients'),
    places: db.collection('places'),
    orders: db.collection('orders'),
  },
};
</script>

<style scoped>

</style>
