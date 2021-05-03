<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 0.375rem 0.75rem;

  line-height: 1.5;
  text-align: center;
  vertical-align: middle;

  border: none;
  border-radius: 6px;
}
</style>
