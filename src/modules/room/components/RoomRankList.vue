<template>
  <div class="room-rank-list">
    <div
      class="room-rank-item p-p-2"
      :class="{ active: rank.user_id === 1 }"
      v-for="rank in ranks"
      :key="rank.rank"
    >
      <div class="room-rank-item-avatar">
        <img :src="rank.avatar_url" :alt="rank.user_name" />
      </div>
      <div class="room-rank-item-body p-ml-3">
        <h2 class="user p-mb-1">{{ rank.user_name }}</h2>
        <p class="score p-m-0">{{ rank.score }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomRankList',
  props: {
    ranks: {
      type: Array,
      required: true
    }
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
.room-rank-item {
  display: flex;
  align-items: center;

  font-size: 0;

  background-color: $butter;
  border-radius: 6px;

  & + & {
    margin-top: 10px;
  }

  &.active {
    border: 4px solid $pink;
  }

  &-avatar {
    flex: 0 0 60px;

    img {
      width: 100%;

      border-radius: 50%;
    }
  }

  &-body {
    flex: 1 0 0;

    .user {
      font-size: 20px;
    }

    .score {
      font-size: 16px;
    }
  }
}
</style>
