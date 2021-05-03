<template>
  <MessageWidget title="回答" :messages="messages">
    <template #default="{ messageItem }">
      <span v-if="messageItem.correct" class="answer correct p-text-bold">
        {{ messageItem.user_name }} 答對了
      </span>
      <span v-else class="answer">
        {{ messageItem.user_name }}: {{ messageItem.message }}
      </span>
    </template>
    <template #footer>
      <div v-if="isAnswerCorrect" class="message-hint p-text-center">
        你答對了
      </div>
      <MessageInput
        v-else
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
  name: 'AnswerMessages',
  components: {
    MessageWidget,
    MessageInput
  },
  props: {
    messages: {
      type: Array,
      required: true
    },
    isAnswerCorrect: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.answer.correct {
  color: $green;
}
.message-input {
  min-height: 42px;
}
.message-hint {
  line-height: 42px;

  background-color: #ddd;
  border-radius: 4px;
}
</style>
