<template>
  <div class="banner">
    <search v-if="query === '' || query == null" />
    <div class="search" v-else>
      <h2 v-if="loading">
        Searching for <span>"{{ query }}"</span>
      </h2>
      <h2 v-else>
        Search Results for <span>"{{ query }}"</span>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    query: {
      required: false,
    },
    loading: {
      default: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.banner {
  height: 150px;
  display: flex;
  align-items: center;
  background-color: #dde2e9;
  @media screen and (min-width: 748px) {
    height: 250px;
  }
}

.search {
  color: #253858;
  font-size: 2rem;
  h2 {
    font-size: 1.5rem;
    @media screen and (min-width: 748px) {
      font-size: 3rem;
    }
  }
  span {
    font-size: 1.5rem;
    color: #6d7b91;
    @media screen and (min-width: 748px) {
      font-size: 3rem;
    }
  }
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 748px) {
    width: 90%;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
  }
}
</style>