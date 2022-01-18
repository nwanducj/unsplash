<template>
  <div>
    <banner />
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
    PhotoController.getPhotos()
      .then((data) => {
        console.log(data);
        this.photos = data;
      })
      .catch((err) => console.error(err))
      .finally(() => (this.loading = false));
  },
  head() {
    return {
      title: "Chidike's CowryWise",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Chidike Cowrywise",
        },
      ],
    };
  },
};
</script>
