<template>
  <div>
    <v-spacer></v-spacer>
    <v-row justify="center">
    <v-col
      cols="6"
      class="mt-10"
    >
      <v-data-table
        :headers="headers"
        :items="constructions"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Список конструкцій:</v-toolbar-title>
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
                        sm="12"
                        md="12"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Назва конструкції"
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
                    <v-btn color="blue darken-1" text @click="addToConstructions">
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
                  {{ constructions.indexOf(item) + 1 }}
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
    </v-row>
    <div class="app-page mt-10">
      <router-view />
    </div>
  </div>
</template>

<script>
import { db } from '@/utills/db';

export default {
  name: 'Construction',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    constructions: [],
    headers: [
      { text: '#', align: 'start', value: 'number' },
      { text: 'Назва конструкції', value: 'name' },
      { text: 'ID', value: 'id' },
      { text: 'Дії', value: 'actions', sortable: false },
    ],
    tableItems: [],
    editedIndex: -1,
    selectedItem: {},
    editedItem: {
      number: '',
      id: '',
      name: '',
    },
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
      db.collection('constructions')
        .doc(id)
        .delete();
      this.dialogDelete = null;
    },
    showAddDialog() {
      this.dialog = true;
    },
    addToConstructions() {
      this.editedIndex = -1;
      db.collection('constructions').add({
        number: this.editedItem.number,
        id: this.editedItem.id,
        name: this.editedItem.name,
      });
      this.dialog = false;
    },
    showEditItem(item) {
      this.editedIndex = 0;
      this.dialog = true;
      this.editedItem = item;
      db.collection('constructions')
        .doc(item.id)
        .update({
          name: this.editedItem.name,
        })
        .then(() => {
          console.log('construction updated!');
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
    constructions: db.collection('constructions'),
  },
}
</script>

<style scoped>

</style>
