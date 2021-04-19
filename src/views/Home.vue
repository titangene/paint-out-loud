<template>
  <!-- Modals 大集合 -->
  <div class="home">
    <BaseModal buttonLabel="遊戲即將開始">
      <div class="modal-about-to-start">
        <img src="../assets/images/hourglass.gif" alt="hourglass" />
        <p>遊戲即將開始...</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="答對了">
      <div class="modal-bingo">
        <img src="../assets/images/check.svg" alt="hourglass" />
        <p>答對了</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="遊戲開始">
      <div class="modal-start">
        <img src="../assets/images/hourglass.gif" alt="hourglass" />
        <p>準備好開始享受 <span>一起話畫</span> 了嗎?</p>
        <!-- 根據房間人入是否大於 1 來切換 button -->
        <Button label="遊戲開始" />
        <!-- <Button label="等待其他玩家加入中" /> -->
      </div>
    </BaseModal>

    <BaseModal buttonLabel="錯過這回合了">
      <div>
        <img src="../assets/images/sad.gif" alt="hourglass" />
        <p>錯過這回合了...</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="本回合答案">
      <div>
        <p>本回合答案為:</p>
        <p class="answer">水煎包</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="無人答對">
      <div>
        <p>本回合答案為:</p>
        <p class="answer">水煎包</p>
        <img src="../assets/images/thumbs_down.svg" alt="thumbs down" />
        <p>無人答對...</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="全部答對">
      <div>
        <p>本回合答案為:</p>
        <p class="answer">水煎包</p>
        <img src="../assets/images/thumbs_up.svg" alt="thumbs up" />
        <p>全部答對!!</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="這回合輪到 xxx 畫畫">
      <div>
        <!-- 某人的大頭貼 -->
        <img src="../assets/images/user.png" alt="hourglass" />
        <p>這回合輪到 xxx 畫畫</p>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="請選擇題目">
      <div class="modal-questions">
        <p>請選擇題目:</p>
        <div class="questions">
          <div class="item">
            <p class="answer">長毛象</p>
            <Button>選擇</Button>
          </div>
          <div class="item">或</div>
          <div class="item">
            <p class="answer">水煎包</p>
            <Button>選擇</Button>
          </div>
        </div>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="頒獎">
      <div>沒圖QQ</div>
    </BaseModal>

    <BaseModal buttonLabel="分享房間連結">
      <div class="modal-share-url">
        <p>分享房間遊戲連結，與好友同樂!</p>
        <span class="room-url">https://xxxx.xxxx.xx</span>
        <Button>複製連結</Button>
        <Button>進入房間</Button>
      </div>
    </BaseModal>

    <BaseModal buttonLabel="確定要離開房間嗎？">
      <div class="modal-exit-confirm">
        <img src="../assets/images/exit.svg" alt="" />
        <p>確定要離開房間嗎？</p>
        <div class="buttons">
          <Button>取消</Button>
          <Button>確認</Button>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue';

export default {
  name: 'Home',
  components: {
    BaseModal
  }
};
</script>


<style lang="scss">
/* 暫時將所有彈跳視窗的樣式寫在這，之後看哪個頁面需要再拆過去 */
.modal-start {
  p > span {
    color: $pink;
  }
}

.modal-questions {
  .questions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item + .item {
    margin-left: 50px;
  }
}

.modal-share-url {
  background-color: $butter;

  .room-url {
    padding: 5px 20px;
    background-color: #fff;
    border-radius: 5px;
  }

  button {
    margin-top: 20px;
  }
}

.modal-exit-confirm {
  background-color: $butter;

  button + button {
    margin-left: 30px;
  }
}
</style>
