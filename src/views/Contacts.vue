<template>
  <div>
   <v-row
     class="mb-10"
    align="center"
    justify="center"
  >
  <h3>Contacts</h3>
  </v-row>
  <GmapMap
    :center="{lat:48.673894716400376, lng:26.583240003674195}"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 600px"
  >
    <GmapMarker
      :position="{ lat:48.673894716400376, lng:26.583240003674195 }"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
  </div>

</template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  name: 'Contacts',
  computed: {
    google: gmapApi,
  },
};
</script>

<style scoped>

</style>
