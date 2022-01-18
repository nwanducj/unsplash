<template>
  <div>
    <div class="photos" v-if="!loading">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        @click="prepareAndShowModal(photo)"
      >
        <photo-card :photo="photo" />
      </div>
    </div>
    <div class="photos" v-else>
      <div v-for="i in 6" :key="i">
        <placeholder />
      </div>
    </div>
  </div>
</template>
<script>
import PhotoCard from "./PhotoCard.vue";
import PhotoModal from "./BigPhoto.vue";
import Placeholder from "./Placeholder.vue";
export default {
  components: { PhotoCard, PhotoModal, Placeholder },
  name: "PhotoList",
  props: {
    photos: {
      required: true,
    },
    loading: {
      required: true,
      default: false,
    },
  },
  data() {
    return {
      photo: null,
    };
  },
  methods: {
    prepareAndShowModal(photo) {
      this.$emit("prepareAndShowModal", photo);
    },
  },
};
</script>
<style lang="scss" scoped>
.photos {
  width: 90%;
  margin: -20px auto 30px auto;
  column-count: 2;
  column-gap: 20px;
  break-inside: avoid;
  display: block;

  @media screen and (min-width: 660px) {
    margin: -30px auto 30px auto;
    width: 90%;
    column-count: 2;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
    column-count: 3;
  }
}
</style>