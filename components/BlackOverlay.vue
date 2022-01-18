<template>
  <div class="overlay">
    <slot></slot>
    <div class="close">
      <close @close="$emit('close')" />
    </div>
  </div>
</template>
<script>
import Close from "@/components/Icons/Close.vue";
export default {
  name: "PhotoModal",
  components: {
    Close,
  },
};
</script>
<style lang="scss" scoped>
.close {
  position: fixed;
  top: 2%;
  right: 2%;
}
.overlay {
  background: rgba(0, 0, 0, 0.9);
  min-height: 100%;
  z-index: 4;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>