(function(e){function t(t){for(var i,o,l=t[0],n=t[1],c=t[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,l=1;l<a.length;l++){var n=a[l];0!==s[n]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},s={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=n;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("755e"),r=a("0ff2"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",[a("v-app-bar",{attrs:{color:"red"}},[a("Navbar")],1)],1),a("div",{staticClass:"app-page mt-10"},[a("router-view")],1)])},l=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"space-between"}},[a("v-btn",{attrs:{text:"",color:"white"},on:{click:e.toLogIn}},[e._v(" РА-Плюс ")]),a("div",e._l(e.routes,(function(t){return a("v-btn",{key:t.title,attrs:{text:"",color:"white",to:t.route}},[e._v(" "+e._s(t.title)+" ")])})),1)],1)],1)},c=[],d={name:"Navbar",data:function(){return{routes:[{title:"Головна",route:"/"},{title:"Наші послуги",route:"/services"},{title:"Портфоліо",route:"/gallery"},{title:"Партнери",route:"/partners"},{title:"Контакти",route:"/contacts"}]}},methods:{toLogIn:function(){this.$router.push("/login")},toHome:function(){this.$router.push("/")},toServices:function(){this.$router.push("/services")},toGallery:function(){this.$router.push("/gallery")},toPartners:function(){this.$router.push("/partners")},toContacts:function(){this.$router.push("/contacts")}}},u=d,m=a("2877"),v=a("6544"),p=a.n(v),h=a("8336"),f=a("a523"),b=a("0fd9"),g=Object(m["a"])(u,n,c,!1,null,"2969caa0",null),x=g.exports;p()(g,{VBtn:h["a"],VContainer:f["a"],VRow:b["a"]});var I={name:"App",data:function(){return{}},components:{Navbar:x}},_=I,y=a("7496"),k=a("40dc"),C=Object(m["a"])(_,o,l,!1,null,null,null),w=C.exports;p()(C,{VApp:y["a"],VAppBar:k["a"]});var V=a("8c4f"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("h3",[e._v("Home")])])],1)},O=[],j=a("2909"),T=(a("99af"),a("a434"),{name:"Home",components:{},data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"#",align:"start",value:"number"},{text:"Код",value:"code"},{text:"Тип конструкції",value:"type"},{text:"Адреса",value:"address"},{text:"Ст.",value:"st"},{text:'"X"',value:"x"},{text:'"Y"',value:"y"},{text:"Бронювання",value:"reserve"},{text:"Розмір",value:"size"},{text:"Підсвітка",value:"backlight"},{text:"Actions",value:"actions",sortable:!1}],tableItems:[],editedIndex:-1,editedItem:{code:"",type:"",address:"",st:"",x:"",y:"",reserve:"",size:"",backlight:""},defaultItem:{code:"",type:"",address:"",st:"",x:"",y:"",reserve:"",size:"",backlight:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Додати новий запис":"Редагувати"}},watch:{dialog:function(e){return e||this.close()},dialogDelete:function(e){return e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.tableItems=[{number:"1",code:"Chem 01",type:"Білборд",address:"вул. Центральна",st:"B",x:"26.34092",y:"49.00956",reserve:"reserve",size:"6x3",backlight:"true"},{number:"2",code:"Dun 01",type:"Білборд",address:"вул. Красінського, в районі арматурного заводу",st:"A",x:"26.84703",y:"48.88677",reserve:"no-reserve",size:"6x3",backlight:"false"},{number:"3",code:"Dun 02",type:"Білборд",address:"вул. Красінського, в районі арматурного заводу",st:"B",x:"26.84703",y:"48.88677",reserve:"no-reserve",size:"6x3",backlight:"false"},{number:"4",code:"Dun 03",type:"Білборд",address:"вул. Красінських на перехресті з вул.Шевченка",st:"A",x:"26.8480774",y:"48.8865550",reserve:"reserve",size:"6x3",backlight:"false"},{number:"3",code:"Dun 02",type:"Білборд",address:"вул. Красінського, в районі арматурного заводу",st:"B",x:"26.84703",y:"48.88677",reserve:"no-reserve",size:"6x3",backlight:"false"},{number:"4",code:"Dun 03",type:"Білборд",address:"вул. Красінських на перехресті з вул.Шевченка",st:"A",x:"26.8480774",y:"48.8865550",reserve:"reserve",size:"6x3",backlight:"false"}]},editItem:function(e){this.editedIndex=this.tableItems.indexOf(e),this.editedItem=Object.assign.apply(Object,[{}].concat(Object(j["a"])(e))),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tableItems.indexOf(e),this.editedItem=Object.assign.apply(Object,[{}].concat(Object(j["a"])(e))),this.dialogDelete=!0},deleteItemConfirm:function(){this.tableItems.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign.apply(Object,[{}].concat(Object(j["a"])(e.defaultItem))),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign.apply(Object,[{}].concat(Object(j["a"])(e.defaultItem))),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.tableItems[this.editedIndex],this.editedItem):this.tableItems.push(this.editedItem),this.close()}}}),P=T,$=Object(m["a"])(P,D,O,!1,null,null,null),S=$.exports;p()($,{VRow:b["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-col",[a("v-tabs",{attrs:{centered:"",color:"red white"}},[a("v-tab",[e._v(" Печатки ")]),a("v-tab",[e._v(" Зовнішня реклама ")]),a("v-tab",[e._v(" Реклама в ліфтах ")]),a("v-tab",[e._v(" Список клієнтів ")]),a("v-tab",[e._v(" Карта ")]),a("v-tab",[e._v(" Список конструкцій ")]),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("p",[e._v(" 1Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ")]),a("p",[e._v(" 1Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum. ")]),a("p",{staticClass:"mb-0"},[e._v(" 1Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ")])])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.placesWithOrders,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Перелік рекламних конструкцій:")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"red",dark:""},on:{click:e.showAddDialog}},"v-btn",s,!1),i),[e._v(" Додати ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Код"},model:{value:e.editedItem.code,callback:function(t){e.$set(e.editedItem,"code",t)},expression:"editedItem.code"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-autocomplete",{attrs:{items:e.constructions,label:"Тип конструкції","item-text":"name","item-value":"name"},model:{value:e.editedItem.type,callback:function(t){e.$set(e.editedItem,"type",t)},expression:"editedItem.type"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Адреса"},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Ст."},model:{value:e.editedItem.st,callback:function(t){e.$set(e.editedItem,"st",t)},expression:"editedItem.st"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Координати (X)"},model:{value:e.editedItem.x,callback:function(t){e.$set(e.editedItem,"x",t)},expression:"editedItem.x"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Координати (Y)"},model:{value:e.editedItem.y,callback:function(t){e.$set(e.editedItem,"y",t)},expression:"editedItem.y"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Розмір"},model:{value:e.editedItem.size,callback:function(t){e.$set(e.editedItem,"size",t)},expression:"editedItem.size"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Підсвітка"},model:{value:e.editedItem.backlight,callback:function(t){e.$set(e.editedItem,"backlight",t)},expression:"editedItem.backlight"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Вартість"},model:{value:e.editedItem.price,callback:function(t){e.$set(e.editedItem,"price",t)},expression:"editedItem.price"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Закрити ")]),-1==e.editedIndex?a("div",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addToPlaces}},[e._v(" Зберегти ")])],1):a("div",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.showEditItem(e.selectedItem)}}},[e._v(" Зберегти ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v(" Видалити об'єкт? ")]),a("v-card-text",{staticClass:"text-h6"},[e._v(e._s(e.selectedItem.code))]),a("v-card-text",[e._v(e._s(e.selectedItem.type))]),a("v-card-text",[e._v("Адреса: "+e._s(e.selectedItem.address))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.dialogDel}},[e._v("Закрити")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.dialogOk(e.selectedItem)}}},[e._v("Так ")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.number",fn:function(t){var i=t.item;return[a("span",[e._v(" "+e._s(e.places.indexOf(i)+1)+" ")])]}},{key:"item.orders",fn:function(t){var i=t.item;return[a("v-card",{attrs:{"min-width":"400"}},[a("v-btn",{attrs:{"max-width":"40",width:"40",height:"25",small:"",disabled:"",text:""}},[e._v(" "+e._s(e.arr[0].year)+" ")]),e._l(e.arr,(function(t){return e._l(t.months,(function(s){return a("v-btn",{key:s,class:i.orders["y_"+t.year]&&i.orders["y_"+t.year]["m_"+s]?i.orders["y_"+t.year]["m_"+s].status:"",attrs:{"min-width":"20",width:"20",height:"25",small:""},on:{click:function(a){i.orders["y_"+t.year]&&i.orders["y_"+t.year]["m_"+s]?e.log(i.orders["y_"+t.year]&&i.orders["y_"+t.year]["m_"+s]):e.createOrder(s,t.year,i)}}},[e._v(" "+e._s(s)+" ")])}))})),a("v-btn",{attrs:{"max-width":"40",width:"40",height:"25",small:"",disabled:"",text:""}},[e._v(" "+e._s(e.arr[1].year)+" ")])],2)]}},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{"max-width":"600px",small:""},on:{click:function(t){return e.editItem(i)}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.getSelectedItem(i)}}},[e._v(" mdi-delete ")])]}}])})],1)],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("p",[e._v(" 3Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ")]),a("p",{staticClass:"mb-0"},[e._v(" 3Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ")])])],1)],1),a("v-tab-item",[a("Clients")],1),a("v-tab-item",[a("BoardsMap")],1),a("v-tab-item",[a("Construction")],1)],1)],1),a("div",{staticClass:"app-page mt-10"},[a("router-view")],1),e.reserveDialog?a("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.reserveDialog,callback:function(t){e.reserveDialog=t},expression:"reserveDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.orderForCreate.place.code))])]),a("v-card-title",[a("span",{staticClass:"text-subtitle-2"},[e._v(e._s(e.orderForCreate.place.address))])]),a("v-card-text",[a("v-container",[a("v-row"),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"10"}},[a("v-autocomplete",{attrs:{items:e.clients,label:"Клієнт","item-text":"name","item-value":"id"},model:{value:e.orderForCreate.client,callback:function(t){e.$set(e.orderForCreate,"client",t)},expression:"orderForCreate.client"}})],1)],1),a("v-row",[a("v-col",[a("v-radio-group",{model:{value:e.orderForCreate.status,callback:function(t){e.$set(e.orderForCreate,"status",t)},expression:"orderForCreate.status"}},e._l(e.statusChecked,(function(e){return a("v-radio",{key:e.id,attrs:{label:e.label,color:e.color,value:e.value}})})),1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeReserveDialog}},[e._v(" Закрити ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addOrderItem}},[e._v(" Зберегти ")])],1)],1)],1):e._e(),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.deleteOrder,callback:function(t){e.deleteOrder=t},expression:"deleteOrder"}},[a("v-card",[a("v-card-title",[e._v('Назва клієнта: "'+e._s(e.delClient.client.name)+'"')]),a("v-spacer"),a("v-card-text",[e._v('Контактна особа: "'+e._s(e.delClient.client.person)+'"')]),a("v-card-text",[e._v("Номер телефону: "),a("a",{attrs:{href:"tel:"+e.delClient.client.phone}},[e._v(e._s(e.delClient.client.phone))])]),a("v-card-text",[e._v("Email: "),a("a",{attrs:{href:"mailto:"+e.delClient.client.email}},[e._v(e._s(e.delClient.client.email))])]),[a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeOrderItem()}}},[e._v(" Закрити ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.delOrderItem(e.delClient.orderId)}}},[e._v(" Видалити ")])],1)]],2)],1)],1)},F=[],z=(a("d81d"),a("159b"),a("4de4"),a("b0c0"),a("2ef0")),E=a.n(z),M=a("4f60"),B=(a("1862"),a("256a"),M["a"].initializeApp({projectId:"ra-plus",apiKey:"AIzaSyAiCXlHdhrU8oZ3Vv-u9kQdhvBAhI8znPU"})),R=B.firestore(),q=B.auth(),G=M["a"].firestore,N=(G.Timestamp,G.GeoPoint,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-col",[a("v-row",{staticClass:"mb-10",attrs:{justify:"center"}},[a("h3",[e._v("Clients")])]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.clients,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Список клієнтів:")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"red",dark:""},on:{click:e.showAddDialog}},"v-btn",s,!1),i),[e._v(" Додати ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Назва клієнта"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Контактна особа"},model:{value:e.editedItem.person,callback:function(t){e.$set(e.editedItem,"person",t)},expression:"editedItem.person"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Адреса"},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Телефон"},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Відміна ")]),-1==e.editedIndex?a("div",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addToClients}},[e._v(" Зберегти ")])],1):a("div",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.showEditItem(e.selectedItem)}}},[e._v(" Зберегти ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v(" Бажаєте видалити? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.dialogDel}},[e._v("Відміна")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.dialogOk(e.selectedItem)}}},[e._v("Так")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.number",fn:function(t){var i=t.item;return[a("span",[e._v(" "+e._s(e.clients.indexOf(i)+1)+" ")])]}},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.getSelectedItem(i.id)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}])})],1),a("div",{staticClass:"app-page mt-10"},[a("router-view")],1)],1)}),Y=[],H={name:"Services",data:function(){return{dialog:!1,dialogDelete:!1,clients:[],headers:[{text:"#",align:"start",value:"number"},{text:"ID",value:"id"},{text:"Назва клієнта",value:"name"},{text:"Контактна особа",value:"person"},{text:"Адреса",value:"address"},{text:"Телефон",value:"phone"},{text:"Email",value:"email"},{text:"Дії",value:"actions",sortable:!1}],tableItems:[],editedIndex:-1,selectedItem:{},editedItem:{number:"",id:"",name:"",person:"",address:"",phone:"",email:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Додати новий запис":"Редагувати"}},methods:{close:function(){this.dialog=!1},dialogDel:function(){this.dialogDelete=!1},getSelectedItem:function(e){this.dialogDelete=!0,this.selectedItem=e},dialogOk:function(e){R.collection("clients").doc(e).delete(),this.dialogDelete=null},showAddDialog:function(){this.dialog=!0},addToClients:function(){this.editedIndex=-1,R.collection("clients").add({number:this.editedItem.number,id:this.editedItem.id,name:this.editedItem.name,person:this.editedItem.person,address:this.editedItem.address,phone:this.editedItem.phone,email:this.editedItem.email}),this.dialog=!1},showEditItem:function(e){var t=this;this.editedIndex=0,this.dialog=!0,this.editedItem=e,R.collection("clients").doc(e.id).update({number:this.editedItem.number,id:this.editedItem.id,name:this.editedItem.name,person:this.editedItem.person,address:this.editedItem.address,phone:this.editedItem.phone,email:this.editedItem.email}).then((function(){console.log("client updated!"),t.dialog=!1,t.editedItem={}}))},editItem:function(e){this.editedIndex=1,this.selectedItem=e,this.editedItem=e,this.dialog=!0,console.log(e)}},firestore:{clients:R.collection("clients"),places:R.collection("places"),orders:R.collection("orders")}},L=H,X=a("b0af"),W=a("99d9"),J=a("62ad"),Q=a("8fea"),U=a("169a"),Z=a("ce7e"),K=a("132d"),ee=a("2fa4"),te=a("8654"),ae=a("71d9"),ie=a("2a7f"),se=Object(m["a"])(L,N,Y,!1,null,"17f2285c",null),re=se.exports;p()(se,{VBtn:h["a"],VCard:X["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VCol:J["a"],VContainer:f["a"],VDataTable:Q["a"],VDialog:U["a"],VDivider:Z["a"],VIcon:K["a"],VRow:b["a"],VSpacer:ee["a"],VTextField:te["a"],VToolbar:ae["a"],VToolbarTitle:ie["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-card",{staticClass:"pt-2"},[a("v-card-text",[a("span",{staticClass:"text-h6"},[e._v(e._s(e.selectedPlace.address))])]),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"d-flex justify-start align-start"},[a("v-col",{attrs:{cols:"7"}},[a("v-img",{staticClass:"rounded pointer",attrs:{src:"https://picsum.photos/id/11/500/300"},on:{click:e.showImage}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-card-text",{staticClass:"pa-0 text-h6"},[e._v(" "+e._s(e.selectedPlace.type)+": "),a("span",{staticClass:"text-h6"},[e._v(" "+e._s(e.selectedPlace.code)+" ")])]),a("hr"),a("v-card-text",{staticClass:"pt-5"},[e._v(" Розмір: "+e._s(e.selectedPlace.size)+" ("+e._s(e.selectedPlace.st)+")")]),a("v-card-text",{staticClass:"pt-1"},[e._v(" Підсвітка: "+e._s(e.selectedPlace.reserve)+" ")]),a("v-card-text",{staticClass:"pt-1"},[e._v(" Вартість: "),a("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.selectedPlace.price)+" грн. ")])])],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row")],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Закрити ")])],1)],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}},[a("v-img",{staticClass:"rounded pointer",attrs:{src:"https://picsum.photos/id/11/500/300"},on:{click:e.closeImage}})],1)],1),a("GmapMap",{staticStyle:{width:"100%",height:"600px"},attrs:{center:e.center,zoom:15,"map-type-id":"terrain"}},e._l(e.markers,(function(t,i){return a("GmapMarker",{key:i,attrs:{position:t.positionGmap,clickable:!0,icon:t.markerOption},on:{click:function(a){return e.selectPlaceItem(t)}}})})),1)],1)},le=[],ne=(a("a9e3"),a("7db0"),{name:"BoardsMap",data:function(){return{center:{lat:48.68583782012766,lng:26.590928198088818},places:[],orders:[],tempPlaces:{"Сітілайт":{error:"citylight_red.png",yellow:"citylight_yellow.png",green:"citylight_green.png"},"Білборд":{error:"billboard_red.png",yellow:"billboard_yellow.png",green:"billboard_green.png"}},drawer:!1,image:!1,group:null,selectedPlace:{}}},computed:{google:s["gmapApi"],markers:function(){var e=this;return this.places.map((function(t){t.positionGmap={lat:Number(t.x),lng:Number(t.y)},t.markerOption={size:{width:50,height:50,f:"px",b:"px"},scaledSize:{width:50,height:50,f:"px",b:"px"}};var a=e.orders.find((function(e){return e.place.id===t.id}));return t.markerOption.url=e.tempPlaces[t.type][(null===a||void 0===a?void 0:a.status)||"green"],t}))}},methods:{selectPlaceItem:function(e){this.drawer=!this.drawer,this.selectedPlace=e,console.log(this.selectedPlace)},close:function(){this.drawer=!1},showImage:function(){this.image=!this.image},closeImage:function(){this.image=!1}},firestore:{places:R.collection("places"),orders:R.collection("orders"),clients:R.collection("clients")}}),ce=ne,de=(a("8881"),a("adda")),ue=Object(m["a"])(ce,oe,le,!1,null,"85dd8a1c",null),me=ue.exports;p()(ue,{VBtn:h["a"],VCard:X["a"],VCardActions:W["a"],VCardText:W["b"],VCol:J["a"],VContainer:f["a"],VDialog:U["a"],VImg:de["a"],VRow:b["a"],VSpacer:ee["a"]});var ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-spacer"),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-10",attrs:{cols:"6"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.constructions,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Список конструкцій:")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"red",dark:""},on:{click:e.showAddDialog}},"v-btn",s,!1),i),[e._v(" Додати ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Назва конструкції"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Відміна ")]),-1==e.editedIndex?a("div",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.addToConstructions}},[e._v(" Зберегти ")])],1):a("div",[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.showEditItem(e.selectedItem)}}},[e._v(" Зберегти ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v(" Бажаєте видалити? ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.dialogDel}},[e._v("Відміна")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.dialogOk(e.selectedItem)}}},[e._v("Так")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.number",fn:function(t){var i=t.item;return[a("span",[e._v(" "+e._s(e.constructions.indexOf(i)+1)+" ")])]}},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.getSelectedItem(i.id)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"}},[e._v(" Reset ")])]},proxy:!0}])})],1)],1),a("div",{staticClass:"app-page mt-10"},[a("router-view")],1)],1)},pe=[],he={name:"Construction",data:function(){return{dialog:!1,dialogDelete:!1,constructions:[],headers:[{text:"#",align:"start",value:"number"},{text:"Назва конструкції",value:"name"},{text:"ID",value:"id"},{text:"Дії",value:"actions",sortable:!1}],tableItems:[],editedIndex:-1,selectedItem:{},editedItem:{number:"",id:"",name:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Додати новий запис":"Редагувати"}},methods:{close:function(){this.dialog=!1},dialogDel:function(){this.dialogDelete=!1},getSelectedItem:function(e){this.dialogDelete=!0,this.selectedItem=e},dialogOk:function(e){R.collection("constructions").doc(e).delete(),this.dialogDelete=null},showAddDialog:function(){this.dialog=!0},addToConstructions:function(){this.editedIndex=-1,R.collection("constructions").add({number:this.editedItem.number,id:this.editedItem.id,name:this.editedItem.name}),this.dialog=!1},showEditItem:function(e){var t=this;this.editedIndex=0,this.dialog=!0,this.editedItem=e,R.collection("constructions").doc(e.id).update({name:this.editedItem.name}).then((function(){console.log("construction updated!"),t.dialog=!1,t.editedItem={}}))},editItem:function(e){this.editedIndex=1,this.selectedItem=e,this.editedItem=e,this.dialog=!0,console.log(e)}},firestore:{clients:R.collection("clients"),places:R.collection("places"),orders:R.collection("orders"),constructions:R.collection("constructions")}},fe=he,be=Object(m["a"])(fe,ve,pe,!1,null,"6a9e0f25",null),ge=be.exports;p()(be,{VBtn:h["a"],VCard:X["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VCol:J["a"],VContainer:f["a"],VDataTable:Q["a"],VDialog:U["a"],VDivider:Z["a"],VIcon:K["a"],VRow:b["a"],VSpacer:ee["a"],VTextField:te["a"],VToolbar:ae["a"],VToolbarTitle:ie["a"]});var xe={name:"Services",data:function(){return{arr:[{year:(new Date).getFullYear(),months:[]},{year:(new Date).getFullYear()+1,months:[]}],reserveDialog:!1,deleteOrder:!1,places:[],orders:[],constructions:[],delClient:{client:{}},orderDialog:{code:"",address:"",client:"",status:"",year:""},clients:[],items:[],red:"red",statusChecked:[{label:"Зайнято",color:"red",value:"error"},{label:"Заброньовано",color:"yellow",value:"yellow"}],tabs:[{title:"Печатки",route:"/boardsMap"},{title:"Зовнішня реклама",route:"/boardsMap"},{title:"Реклама в ліфтах",route:"/boardsMap"}],months:[1,2,3,4,5,6,7,8,9,10,11,12],dialog:!1,dialogDelete:null,selectedItem:{},headers:[{text:"#",align:"start",value:"number"},{text:"Код",value:"code"},{text:"Тип конструкції",value:"type"},{text:"Адреса",value:"address"},{text:"Ст.",value:"st"},{text:'"X"',value:"x"},{text:'"Y"',value:"y"},{text:"Бронювання",value:"orders"},{text:"Розмір",value:"size"},{text:"Підсвітка",value:"backlight"},{text:"Вартість",value:"price"},{text:"Дії",value:"actions",sortable:!1}],tableItems:[],editedIndex:-1,editedItem:{code:"",type:"",address:"",st:"",x:"",y:"",size:"",backlight:"",price:""},defaultItem:{code:"",type:"",address:"",st:"",x:"",y:"",size:"",backlight:"",price:""},orderForCreate:{place:null,month:null,year:null,status:null,client:null}}},created:function(){for(var e=(new Date).getMonth()+1,t=1;t<13;t+=1)t<e?this.arr[1].months.push(t):this.arr[0].months.push(t)},components:{BoardsMap:me,Clients:re,Construction:ge},computed:{formTitle:function(){return-1===this.editedIndex?"Додати новий запис":"Редагувати"},placesWithOrders:function(){var e=this;return this.places.map((function(t){return t.orders=e.getMonthsByPlace(t.id),t}))}},methods:{closeReserveDialog:function(){this.reserveDialog=!1},showAddDialog:function(){this.editedIndex=-1},close:function(){this.dialog=!1,this.editedItem={}},editItem:function(e){this.editedIndex=1,this.selectedItem=e,this.editedItem=e,this.dialog=!0,console.log(e)},showEditItem:function(e){var t=this;this.dialog=!0,this.editedItem=e,R.collection("places").doc(e.id).update({code:e.code,type:e.type,address:e.address,st:e.st,x:e.x,y:e.y,size:e.size,backlight:e.backlight,price:e.price}).then((function(){console.log("user updated!"),t.dialog=!1,t.editedItem={}}))},closeOrderItem:function(){this.deleteOrder=!1},delOrderItem:function(e){console.log(e),R.collection("orders").doc(e).delete(),this.deleteOrder=!1},dialogDel:function(){this.dialogDelete=!1,this.selectedItem={},this.editedItem={}},getSelectedItem:function(e){this.dialogDelete=!0,this.editedItem=e,this.selectedItem=e},addToPlaces:function(){this.editedIndex=0,R.collection("places").add({code:this.editedItem.code,type:this.editedItem.type,address:this.editedItem.address,st:this.editedItem.st,x:this.editedItem.x,y:this.editedItem.y,size:this.editedItem.size,backlight:this.editedItem.backlight,price:this.editedItem.price}),this.dialog=!1},log:function(e){this.delClient=e,this.deleteOrder=!0,console.log(e)},addOrderItem:function(){R.collection("orders").add({status:this.orderForCreate.status,year:this.orderForCreate.year,month:this.orderForCreate.month,client:R.doc("clients/".concat(this.orderForCreate.client)),place:R.doc("places/".concat(this.orderForCreate.placeId))}),this.reserveDialog=!1,console.log(this.orderForCreate.place.orders)},createOrder:function(e,t,a){this.orderForCreate.place=E.a.clone(a),this.orderForCreate.month=e,this.orderForCreate.year=t,this.orderForCreate.placeId=a.id,this.reserveDialog=!0,console.log({month:e,place:a.id}),console.log(this.orders)},getMonthsByPlace:function(e){var t={};return E.a.filter(this.orders,(function(t){return t.place.id===e&&(t.year===(new Date).getFullYear()||t.year===(new Date).getFullYear()+1)})).forEach((function(e){t["y_".concat(e.year)]||(t["y_".concat(e.year)]={}),t["y_".concat(e.year)]["m_".concat(e.month)]={client:e.client,status:e.status,orderId:e.id}})),t},dialogOk:function(e){R.collection("places").doc(e.id).delete(),this.dialogDelete=null},getClients:function(){this.items=this.clients.map((function(e){return{name:e.name,id:e.id}})),console.log(this.items)},closeDialog:function(){console.log(this.orderForCreate),this.reserveDialog=!1},showReserveDialog:function(e){this.selectedItem=e,this.reserveDialog=!0}},firestore:{places:R.collection("places"),orders:R.collection("orders"),clients:R.collection("clients"),constructions:R.collection("constructions")}},Ie=xe,_e=a("c6a6"),ye=a("67b6"),ke=a("43a6"),Ce=a("71a3"),we=a("c671"),Ve=a("fe57"),De=Object(m["a"])(Ie,A,F,!1,null,"28aebd76",null),Oe=De.exports;p()(De,{VAutocomplete:_e["a"],VBtn:h["a"],VCard:X["a"],VCardActions:W["a"],VCardText:W["b"],VCardTitle:W["c"],VCol:J["a"],VContainer:f["a"],VDataTable:Q["a"],VDialog:U["a"],VDivider:Z["a"],VIcon:K["a"],VRadio:ye["a"],VRadioGroup:ke["a"],VRow:b["a"],VSpacer:ee["a"],VTab:Ce["a"],VTabItem:we["a"],VTabs:Ve["a"],VTextField:te["a"],VToolbar:ae["a"],VToolbarTitle:ie["a"]});var je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-container",{staticClass:"fill-height",staticStyle:{"min-height":"434px"}},[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("v-row",e._l(e.imgOpt,(function(t){return a("v-col",{key:t.src,attrs:{cols:"4"}},[a("v-card",{staticClass:"mt-5"},[a("v-img",{staticClass:"grey darken-4",attrs:{src:t.src,height:"200",contain:""}}),a("v-card-title",{staticClass:"text-h6"},[e._v(" "+e._s(t.title)+" ")])],1)],1)})),1)],1)],1)],1)},Te=[],Pe={name:"Gallery",data:function(){return{imgOpt:[{src:"https://picsum.photos/350/165?random",title:"Image title"},{src:"https://picsum.photos/350/165?random",title:"Image title2"},{src:"https://picsum.photos/350/165?random",title:"Image title3"},{src:"https://picsum.photos/350/165?random",title:"Image title4"},{src:"https://picsum.photos/350/165?random",title:"Image title2"},{src:"https://picsum.photos/350/165?random",title:"Image title3"},{src:"https://picsum.photos/350/165?random",title:"Image title4"}]}}},$e=Pe,Se=a("0789"),Ae=Object(m["a"])($e,je,Te,!1,null,"22c3cede",null),Fe=Ae.exports;p()(Ae,{VCard:X["a"],VCardTitle:W["c"],VCol:J["a"],VContainer:f["a"],VFadeTransition:Se["c"],VImg:de["a"],VRow:b["a"]});var ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{align:"center",justify:"center"}},[a("h3",[e._v("Info about partners")])])},Ee=[],Me={name:"Partners"},Be=Me,Re=Object(m["a"])(Be,ze,Ee,!1,null,"60ed56e6",null),qe=Re.exports;p()(Re,{VRow:b["a"]});var Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{staticClass:"mb-10",attrs:{align:"center",justify:"center"}},[a("h3",[e._v("Contacts")])]),a("GmapMap",{staticStyle:{width:"100%",height:"600px"},attrs:{center:{lat:48.673894716400376,lng:26.583240003674195},zoom:15,"map-type-id":"terrain"}},[a("GmapMarker",{attrs:{position:{lat:48.673894716400376,lng:26.583240003674195},clickable:!0,draggable:!0},on:{click:function(t){e.center=e.m.position}}})],1)],1)},Ne=[],Ye={name:"Contacts",computed:{google:s["gmapApi"]}},He=Ye,Le=Object(m["a"])(He,Ge,Ne,!1,null,"5e4e2efd",null),Xe=Le.exports;p()(Le,{VRow:b["a"]});var We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",[a("v-row",{staticClass:"mb-10",attrs:{justify:"center"}},[a("h3",[e._v("LOGIN:")])]),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-card",{staticClass:"pa-10",attrs:{elevation:"2","min-width":"500"}},[a("form",{staticClass:"m-10"},[a("v-text-field",{attrs:{label:"Логін",required:""},model:{value:e.form.login,callback:function(t){e.$set(e.form,"login",t)},expression:"form.login"}}),a("v-text-field",{attrs:{label:"Пароль",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),a("v-btn",{staticClass:"mr-4",on:{click:e.submit}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)])],1)],1)},Je=[],Qe={name:"Login",data:function(){return{users:[],form:{name:"",login:"",password:""}}},methods:{clear:function(){this.form.name="",this.form.login="",this.form.password=""},submit:function(){var e=this;q.signInWithEmailAndPassword(this.form.login,this.form.password).then((function(t){console.log(t);t.user;e.$router.push("/services"),e.form.login="",e.form.password=""})).catch((function(e){e.code,e.message;console.log(e.code),console.log(e.message)}))}},firestore:{users:R.collection("places")}},Ue=Qe,Ze=Object(m["a"])(Ue,We,Je,!1,null,"52c65174",null),Ke=Ze.exports;p()(Ze,{VBtn:h["a"],VCard:X["a"],VCol:J["a"],VRow:b["a"],VTextField:te["a"]}),i["a"].use(V["a"]);var et=[{path:"/",name:"Home",component:S},{path:"/services",name:"Services",component:Oe},{path:"/gallery",name:"Gallery",component:Fe},{path:"/partners",name:"Partners",component:qe},{path:"/contacts",name:"Contacts",component:Xe},{path:"/login",name:"Login",component:Ke},{path:"/boardsmap",name:"BoardsMap",component:me},{path:"/clients",name:"Clients",component:re},{path:"/construction",name:"Construction",component:ge}],tt=new V["a"]({mode:"history",base:"/",routes:et}),at=tt,it=a("2f62");i["a"].use(it["a"]);var st=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),rt=a("f309");i["a"].use(rt["a"]);var ot=new rt["a"]({icons:{iconfont:"mdi"}});i["a"].use(r["a"]),i["a"].use(s,{load:{key:"AIzaSyA8uadaAdSPYEoA5vHMOCjPzGuGo2MZQ8k",libraries:"places"},installComponents:!0}),i["a"].config.productionTip=!1,new i["a"]({router:at,store:st,vuetify:ot,render:function(e){return e(w)}}).$mount("#app")},8881:function(e,t,a){"use strict";a("d440")},d440:function(e,t,a){}});
//# sourceMappingURL=app.17d78539.js.map