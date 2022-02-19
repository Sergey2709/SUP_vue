<template lang="">
  <GmapMap
    :center="mapConfig.center"
    :zoom="mapConfig.zoom"
    :class="classForMap"
  >
    <GmapMarker
      :position="marker.position"
      :clickable="true"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      mapConfig: {
        center: { lat: 34.10124852259447, lng: -118.34587228529938 },
        zoom: 17,
      },

      marker: {
        position: { lat: 34.10124852259447, lng: -118.34587228529938 },
      },

      classForMap: "map",
    };
  },

  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 450px;
  @media (max-width: 500px) {
    height: 300px;
  }
}
</style>
