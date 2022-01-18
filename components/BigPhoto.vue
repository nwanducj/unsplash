<template>
  <div class="photo">
    <img :src="photo.urls.regular" />
    <div class="name">
      <h2>{{ photo.user.first_name }} {{ photo.user.last_name }}</h2>
      <p>{{ photo.user.location }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PhotoModal",
  props: {
    photo: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.name {
  background-color: white;
  border-radius: 0 0 15px 15px;
  height: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
  h2 {
    font-size: 18px;
    color: #253858;
  }
  p {
    font-size: 0.8rem;
    color: #253858;
  }
}
.photo {
  max-width: 80%;
  background-color: white;
  border-radius: 15px;
  @media screen and (min-width: 660px) {
    max-width: 700px;
  }
  img {
    width: 100%;
    max-height: 500px;
    border-radius: 15px 15px 0 0;
    object-fit: contain;
  }
}
</style>