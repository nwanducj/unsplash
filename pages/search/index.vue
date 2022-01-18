<template>
  <div>
    <banner :query="query" :loading="loading" />
    <photo-list
      :photos="photos"
      @prepareAndShowModal="prepareAndShowModal"
      :loading="loading"
    />
    <black-overlay v-if="showModal" @close="showModal = false">
      <big-photo :photo="photo" />
    </black-overlay>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import { PhotoController } from "@/modules/Photo";
export default {
  components: { Banner },
  name: "index",
  data() {
    return {
      photos: [],
      showModal: false,
      photo: null,
      query: null,
      loading: true,
    };
  },
  methods: {
    prepareAndShowModal(photo) {
      this.photo = photo;
      this.showModal = true;
    },
  },
  mounted() {
    this.query = this.$route.query.name;
    if (this.query && this.query !== "") {
      PhotoController.searchPhotos({ query: this.query })
        .then((photo) => {
          console.log(photo);
          this.photos = photo;
        })
        .catch((err) => console.error(err))
        .finally(() => (this.loading = false));
    }
  },
};
</script>
