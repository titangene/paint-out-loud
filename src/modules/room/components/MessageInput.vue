<template>
  <form class="message-form p-d-flex" @submit.prevent="submitMessage">
    <span class="message-input-wrap p-input-icon-right">
      <i
        v-if="inputText"
        class="pi pi-times message-clear"
        @click="inputText = ''"
      />
      <InputText type="text" v-model="inputText" />
    </span>
    <Button
      class="message-send p-button-text"
      icon="pi pi-send"
      :disabled="inputText.length === 0"
      @click="submitMessage"
    />
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MessageInput',
  emits: {
    change: null
  },
  setup(props, { emit }) {
    const inputText = ref('');

    function submitMessage() {
      emit('submitMessage', inputText.value);
      inputText.value = '';
    }

    return {
      inputText,
      submitMessage
    };
  }
};
</script>

<style lang="scss" scoped>
.message {
  &-input-wrap {
    flex: 1 0 0;

    input {
      width: 100%;
    }
  }
  &-clear {
    cursor: pointer;
  }
}
</style>
