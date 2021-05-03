<template>
  <div class="message-widget">
    <header class="p-d-none p-d-md-block">
      <h3 class="p-text-center p-m-0">{{ title }}</h3>
    </header>
    <section class="message-history">
      <div
        class="message-item p-mb-1"
        v-for="(messageItem, index) in messages"
        :key="index"
      >
        <slot :messageItem="messageItem" />
      </div>
    </section>
    <footer class="p-mt-2">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MessageWidget',
  props: {
    title: {
      type: String,
      required: true
    },
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.message-item {
  font-size: 18px;
}
</style>
