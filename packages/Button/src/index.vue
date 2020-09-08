<template>
  <div class="gwi-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'gwi-button',
  props: {
    type: String
  }
}
</script>

<style scoped>
  .gwi-button {
    display: inline-block;
    padding: 3px 6px;
    background: #000;
    color: #fff;
  }
</style>