<template>
  <div>
    <div class="photo">
      <div class="img-gradient">
        <img :src="photo.urls.regular" :alt="photo.alt_description" />
      </div>
      <div class="name">
        <h3>{{ `${photo.user.first_name + " " + photo.user.last_name}` }}</h3>
        <p>{{ photo.user.location }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PhotoCard",
  data() {
    return {
      showModal: true,
    };
  },
  props: {
    photo: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  max-height: 300px;
  min-height: 150px;
  border-radius: 10px;
  width: 100%;
  @media screen and (min-width: 922px) {
    /* width: 250px; */
  }
}
.a {
  position: relative;
}
.photo {
  position: relative;
  margin-bottom: 20px;
}
.name {
  color: white;
  z-index: 3;
  position: absolute;
  bottom: 20px;
  padding: 0 10px;
  p {
    font-size: 0.8rem;
  }
}

.img-gradient:after {
  content: "";
  position: absolute;
  border-radius: 10px;
  left: 0;
  top: 0;
  max-height: 300px;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(
    to bottom,
    rgba(235, 167, 167, 30%) 70%,
    rgba(0, 0, 0, 90%) 130%
  );
}
</style>