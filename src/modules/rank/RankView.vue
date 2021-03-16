<template>
  <div class="rank">
    <div class="container">
      <h1 class="rank-title p-mx-auto p-my-0">排行榜</h1>
      <div class="rank-status p-mx-auto p-my-3">
        <span>目前排行：{{ current_rank.rank }}</span>
        <span class="p-ml-4">分數：{{ current_rank.score }}</span>
      </div>

      <DataTable
        :value="ranks"
        :rowClass="highlightCurrentUser"
        class="rank-table"
        responsiveLayout="scroll"
      >
        <Column
          field="rank"
          header="排行"
          class="p-text-center"
          headerClass="table-fixed-width"
          bodyClass="rank-table-number"
        >
          <template #body="{ data }">
            <img
              v-if="isTopThree(data.rank)"
              :src="`img/ranked-${data.rank}.png`"
              :alt="`ranked ${data.rank}`"
            />
            <span v-else>{{ data.rank }}</span>
          </template>
        </Column>
        <Column
          header="玩家"
          headerClass="p-text-center"
          bodyClass="rank-table-user"
        >
          <template #body="{ data }">
            <img :src="data.avatar_url" class="p-mr-2" alt="avatar" />
            <span class="p-text-truncate">{{ data.user_name }}</span>
          </template>
        </Column>
        <Column
          field="score"
          header="分數"
          class="p-text-center"
          headerClass="table-fixed-width"
          bodyClass="rank-table-score"
        />
      </DataTable>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Rank',
  setup() {
    const state = reactive({
      current_rank: {
        rank: 5,
        score: 80
      },
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

    function highlightCurrentUser({ rank }) {
      return rank === state.current_rank.rank ? 'current-user' : null;
    }

    return {
      ranks: state.ranks,
      current_rank: state.current_rank,
      isTopThree,
      highlightCurrentUser
    };
  }
};
</script>

<style lang="scss" scoped>
.rank {
  background-color: $robin;
}

.container {
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
}

.rank-title {
  max-width: 400px;
  width: 90%;
  height: 60px;
  padding: 0 10px;
  line-height: 60px;

  background-color: $peach;
  border-radius: 20px;

  font-size: 40px;
  text-align: center;
}

.rank-status {
  max-width: 500px;
  width: 90%;
  height: 60px;
  padding: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba($dark, 0.3);
  color: #fff;
  border-radius: 20px;

  font-size: 20px;

  @include media(md) {
    font-size: 24px;
  }
}

::v-deep .rank-table {
  font-size: 20px;

  @include media(md) {
    font-size: 24px;
  }

  .current-user {
    background-color: $butter;
  }

  &-number {
    img {
      width: 50px;

      @include media(md) {
        width: 60px;
      }
    }

    span {
      font-size: 24px;

      @include media(md) {
        font-size: 28px;
      }
    }
  }

  &-user {
    img {
      width: 50px;

      border-radius: 100%;

      @include media(md) {
        width: 60px;
      }
    }

    span {
      width: calc(100% - 70px);
      display: inline-block;

      vertical-align: middle;
    }
  }
}

::v-deep .table-fixed-width {
  width: 80px;
}

::v-deep .p-datatable {
  .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    padding: 6px;
  }
}
</style>
