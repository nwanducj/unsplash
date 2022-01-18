<template>
  <div class="search">
    <form @submit.prevent="makeSearch">
      <div class="search__icon">
        <search-icon />
      </div>
      <input v-model="search" type="text" placeholder="Search for photos" />
    </form>
  </div>
</template>
<script>
import SearchIcon from "@/components/Icons/SearchIcon";
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  components: {
    SearchIcon,
  },
  methods: {
    makeSearch() {
      if (this.search != "") {
        this.$router.push(`/search?name=${this.search}`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 80%;
  position: relative;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  &__icon {
    position: absolute;
    top: 20px;
    left: 20px;
  }
}
input {
  background-color: white;
  outline: none;
  height: 60px;
  color: #253858;
  width: 100%;
  padding-left: 50px;
  border-radius: 10px;
  border: none;
}
input::placeholder {
  color: #253858;
}
</style>