<template>
  <div class="photo">
    <div class="card is-loading">
      <div class="image"></div>
      <div class="content">
        <h2></h2>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Placeholder",
};
</script>
<style lang="scss" scoped>
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

.photo {
  /* width: 250px; */
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 15px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}
.card.is-loading {
  h2,
  p {
    background: #eee;
    background: linear-gradient(110deg, #e6e6e6 8%, #f5f5f5 18%, #e6e6e6 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .image {
    height: 200px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h2 {
    height: 15px;
    width: 70%;
    margin: 5px 20px;
  }

  p {
    height: 15px;
    margin: 0 20px;
    width: 30%;
  }
}
</style>