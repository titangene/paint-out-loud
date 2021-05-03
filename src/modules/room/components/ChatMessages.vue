<template>
  <MessageWidget title="聊天" :messages="messages">
    <template #default="{ messageItem }">
      <span class="p-text-bold">{{ `${messageItem.user_name}: ` }}</span>
      <span>{{ messageItem.message }}</span>
    </template>
    <template #footer>
      <MessageInput
        class="message-input"
        @submitMessage="$emit('submitMessage', $event)"
      />
    </template>
  </MessageWidget>
</template>

<script>
import MessageWidget from './MessageWidget.vue';
import MessageInput from './MessageInput.vue';

export default {
  name: 'ChatMessages',
  components: {
    MessageWidget,
    MessageInput
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.message-input {
  min-height: 42px;
}
</style>
