<template>
  <div class="room p-p-2">
    <aside class="p-mr-4 p-d-none p-d-md-block">
      <RoomRankList class="p-pr-2" :ranks="ranks" />
      <BaseButton class="exit-room-button p-mt-4">離開房間</BaseButton>
    </aside>
    <main>
      <canvas />

      <div class="p-grid p-d-none p-d-md-flex">
        <div class="p-col">
          <ChatMessages
            :messages="chatMessages"
            @submitMessage="onSubmitChatMessage"
          />
        </div>
        <div class="p-col">
          <AnswerMessages
            :messages="answerMessages"
            :isAnswerCorrect="isAnswerCorrect"
            @submitMessage="onSubmitAnswerMessage"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

import RoomRankList from './components/RoomRankList.vue';
import BaseButton from '@/components/BaseButton.vue';
import ChatMessages from './components/ChatMessages.vue';
import AnswerMessages from './components/AnswerMessages.vue';

export default {
  name: 'Room',
  components: {
    RoomRankList,
    BaseButton,
    ChatMessages,
    AnswerMessages
  },
  setup() {
    const state = reactive({
      ranks: [
        {
          rank: 1,
          score: 300,
          user_name: 'Titan',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 1,
          user_id: 1
        },
        {
          rank: 2,
          score: 250,
          user_name: 'Yachen',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 2
        },
        {
          rank: 3,
          score: 200,
          user_name: 'Jinwen',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 3
        },
        {
          rank: 4,
          score: 150,
          user_name: 'Lester',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 4
        },
        {
          rank: 5,
          score: 100,
          user_name: 'Titan',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 5
        },
        {
          rank: 6,
          score: 80,
          user_name: 'Yachen',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 6
        },
        {
          rank: 7,
          score: 60,
          user_name: 'Jinwen',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 7
        },
        {
          rank: 8,
          score: 50,
          user_name: 'Lester',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 8
        },
        {
          rank: 9,
          score: 40,
          user_name: 'Titan',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 9
        },
        {
          rank: 10,
          score: 30,
          user_name: 'Yachen',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 10
        },
        {
          rank: 11,
          score: 20,
          user_name: 'Jinwen',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 11
        },
        {
          rank: 12,
          score: 10,
          user_name: 'Lester',
          avatar_url: 'https://picsum.photos/150/150',
          avatar_index: 12
        }
      ],
      chatMessages: Array(16)
        .fill([
          {
            type: 1,
            user_id: 1,
            user_name: 'Titan',
            message: '嗨！'
          },
          {
            type: 1,
            user_id: 2,
            user_name: 'Lester',
            message: 'Hello there!'
          }
        ])
        .flat(),
      answerMessages: Array(16)
        .fill([
          {
            type: 2,
            user_id: 1,
            user_name: 'Titan',
            message: '蘋果',
            correct: false
          },
          {
            type: 2,
            user_id: 2,
            user_name: 'Lester',
            message: '蘋果',
            correct: false
          }
        ])
        .flat()
    });

    function onSubmitChatMessage(message) {
      state.chatMessages.push({
        type: 1,
        user_id: 1,
        user_name: 'Titan',
        message
      });
    }

    function onSubmitAnswerMessage(message) {
      state.answerMessages.push({
        type: 2,
        user_id: 1,
        user_name: 'Titan',
        message,
        correct: true
      });
    }

    const isAnswerCorrect = computed(() => {
      // TODO 取得當前使用者 id
      const userId = 1;
      return state.answerMessages.some(
        message => message.user_id === userId && message.correct
      );
    });

    return {
      ranks: state.ranks,

      chatMessages: state.chatMessages,
      onSubmitChatMessage,

      answerMessages: state.answerMessages,
      onSubmitAnswerMessage,
      isAnswerCorrect
    };
  }
};
</script>

<style lang="scss" scoped>
.room {
  display: flex;
}
::v-deep {
  .message-history {
    max-height: 400px;
    overflow: auto;
  }
}
</style>
