<template>
  <!-- 暫時的按鈕 -->
  <Button :label="buttonLabel" @click="openModal" />
  <Dialog
    v-model:visible="displayModal"
    :modal="true"
    :showHeader="false"
    :dismissableMask="true"
  >
    <slot></slot>
  </Dialog>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BaseModal',
  // 之後拿掉 buttonLabel
  props: {
    buttonLabel: {
      type: String,
      require: true
    }
  },
  setup() {
    const displayModal = ref(false);

    const openModal = () => {
      displayModal.value = true;
    };
    const closeModal = () => {
      displayModal.value = false;
    };

    return { displayModal, openModal, closeModal };
  }
};
</script>

<style lang="scss">
div.p-dialog {
  border-radius: 8px;
  overflow: hidden;
  width: 90vw;

  @media screen and (min-width: 567px){
    width: 70vw;
  }

  @media screen and (min-width: 768px){
    width: 50vw;
  }
}

div.p-dialog .p-dialog-content {
  padding: 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 70px 10px;
    text-align: center;
  }

  img {
    width: 20%;
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    letter-spacing: 1px;
  }

  p.answer {
    font-size: 30px;
    font-weight: 600;
  }
}
</style>
