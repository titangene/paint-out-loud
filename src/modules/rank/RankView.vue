<template>
  <div class="rank">
    <div class="container">
      <h1 class="rank-title">排行榜</h1>
      <div class="rank-status">
        <span>目前排行：5</span>
        <span>分數：80</span>
      </div>

      <div class="rank-list-wrap">
        <div class="rank-list">
          <div class="rank-item" v-for="item in ranks" :key="item">
            <div class="ranking-number">
              <div v-if="isTopThree(item.rank)" class="ranking-number-image">
                <img
                  :src="require(`@/assets/images/ranked-${item.rank}.png`)"
                  :alt="`ranked ${item.rank}`"
                />
              </div>
              <span v-else class="ranking-number-content">
                {{ item.rank }}
              </span>
            </div>
            <div class="user">
              <div class="user-avatar">
                <img :src="item.avatar_url" alt="avatar" />
              </div>
              <span class="user-name">{{ item.user_name }}</span>
            </div>
            <div class="score">分數：{{ item.score }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Rank',
  setup() {
    const state = reactive({
      ranks: [
        {
          rank: 1,
          score: 80,
          user_name: 'Titan',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 2,
          score: 70,
          user_name: 'Jinwen',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 3,
          score: 66,
          user_name: 'Yachen',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 4,
          score: 60,
          user_name: 'Lester',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 5,
          score: 80,
          user_name: 'Titan',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 6,
          score: 70,
          user_name: 'Jinwen',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 7,
          score: 66,
          user_name: 'Yachen',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 8,
          score: 60,
          user_name: 'Lester',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 9,
          score: 80,
          user_name: 'Titan',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 10,
          score: 70,
          user_name: 'Jinwen',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 11,
          score: 66,
          user_name: 'Yachen',
          avatar_url: 'https://picsum.photos/150/150'
        },
        {
          rank: 12,
          score: 60,
          user_name: 'Lester',
          avatar_url: 'https://picsum.photos/150/150'
        }
      ]
    });

    const isTopThree = computed(() => {
      return rank => rank <= 3;
    });

    return {
      ranks: state.ranks,
      isTopThree
    };
  }
};
</script>

<style lang="scss" scoped>
.rank {
  padding: 40px 0;

  background-color: #a2ddcb;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.rank-title {
  max-width: 400px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;

  background-color: #e6b566;
  border-radius: 20px;

  font-size: 40px;
  text-align: center;
}

.rank-status {
  max-width: 500px;
  height: 60px;
  margin: 20px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #7aa297;
  color: #fff;
  border-radius: 20px;

  font-size: 24px;

  span + span {
    margin-left: 20px;
  }
}

.rank-list-wrap {
  height: calc(100vh - 240px);

  overflow: auto;
}

.rank-list {
  background-color: #fff;
}

.rank-item {
  padding: 6px 10px;
  display: flex;
  align-items: center;

  border: 1px solid;

  @include media(md) {
    padding: 12px 20px;
  }

  .ranking-number {
    flex: 0 0 60px;

    font-size: 0;
    text-align: right;

    &-image {
      width: 60px;

      img {
        max-width: 100%;
      }
    }

    &-content {
      padding-right: 10px;

      font-size: 30px;
      font-weight: 600;
    }
  }

  .user {
    padding-left: 20px;
    flex: 1 0 0;

    &-avatar {
      display: inline-block;
      width: 60px;
      margin-right: 10px;

      font-size: 0;
      vertical-align: middle;

      img {
        max-width: 100%;

        border-radius: 100%;
      }
    }

    &-name {
      width: calc(100% - 70px);
      display: inline-block;

      font-size: 24px;
      vertical-align: middle;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @include media(md) {
        font-size: 30px;
      }
    }
  }

  .score {
    flex: 0 0 110px;

    font-size: 20px;
    text-align: right;

    @include media(md) {
      flex: 0 0 140px;

      font-size: 24px;
    }
  }
}
</style>
