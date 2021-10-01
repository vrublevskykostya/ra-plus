<template>
  <div>
<!--  <v-row-->
<!--    align="center"-->
<!--    justify="center"-->
<!--  >-->
<!--  <h3>Home</h3>-->
<!--  </v-row>-->
  <ReserveDialog/>
</div>
</template>

<script>
import ReserveDialog from '../components/ReserveDialog';

export default {
  name: 'Home',
  components: { ReserveDialog },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: '#', align: 'start', value: 'number' },
      { text: 'Код', value: 'code' },
      { text: 'Тип конструкції', value: 'type' },
      { text: 'Адреса', value: 'address' },
      { text: 'Ст.', value: 'st' },
      { text: '"X"', value: 'x' },
      { text: '"Y"', value: 'y' },
      { text: 'Бронювання', value: 'reserve' },
      { text: 'Розмір', value: 'size' },
      { text: 'Підсвітка', value: 'backlight' },
      { text: 'Actions', value: 'actions', sortable: false },
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

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Додати новий запис' : 'Редагувати';
    },
  },

  watch: {
    dialog(val) {
      return val || this.close();
    },
    dialogDelete(val) {
      return val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.tableItems = [
        {
          number: '1',
          code: 'Chem 01',
          type: 'Білборд',
          address: 'вул. Центральна',
          st: 'B',
          x: '26.34092',
          y: '49.00956',
          reserve: 'reserve',
          size: '6x3',
          backlight: 'true',
        },
        {
          number: '2',
          code: 'Dun 01',
          type: 'Білборд',
          address: 'вул. Красінського, в районі арматурного заводу',
          st: 'A',
          x: '26.84703',
          y: '48.88677',
          reserve: 'no-reserve',
          size: '6x3',
          backlight: 'false',
        },
        {
          number: '3',
          code: 'Dun 02',
          type: 'Білборд',
          address: 'вул. Красінського, в районі арматурного заводу',
          st: 'B',
          x: '26.84703',
          y: '48.88677',
          reserve: 'no-reserve',
          size: '6x3',
          backlight: 'false',
        },
        {
          number: '4',
          code: 'Dun 03',
          type: 'Білборд',
          address: 'вул. Красінських на перехресті з вул.Шевченка',
          st: 'A',
          x: '26.8480774',
          y: '48.8865550',
          reserve: 'reserve',
          size: '6x3',
          backlight: 'false',
        },
        {
          number: '3',
          code: 'Dun 02',
          type: 'Білборд',
          address: 'вул. Красінського, в районі арматурного заводу',
          st: 'B',
          x: '26.84703',
          y: '48.88677',
          reserve: 'no-reserve',
          size: '6x3',
          backlight: 'false',
        },
        {
          number: '4',
          code: 'Dun 03',
          type: 'Білборд',
          address: 'вул. Красінських на перехресті з вул.Шевченка',
          st: 'A',
          x: '26.8480774',
          y: '48.8865550',
          reserve: 'reserve',
          size: '6x3',
          backlight: 'false',
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.tableItems.indexOf(item);
      this.editedItem = Object.assign({}, ...item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.tableItems.indexOf(item);
      this.editedItem = Object.assign({}, ...item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.tableItems.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, ...this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, ...this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableItems[this.editedIndex], this.editedItem);
      } else {
        this.tableItems.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
