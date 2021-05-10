<template>
  <div class="room-list">
    <header>
      <router-link to="/" class="back"
        ><img src="./images/back.png" alt="back"
      /></router-link>
      <h1 class="page-title">選擇房間</h1>
      <div class="user"></div>
    </header>
    <main>
      <section  class="p-grid rooms">
        <div v-for="item in 9" :key="item.id" class="p-col-12 p-sm-6 p-md-4 p-lg-3">
          <div class="room-card">
            <h1 class="room-name">YTLJ ROOM</h1>
            <div class="infos">
              <div class="item">
                <img src="./images/user-group.svg" alt="players" />
                <h2>5 / 10</h2>
              </div>
              <div class="item">
                <img src="./images/trophy.svg" alt="trophy" />
                <h2>54 / 150</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="buttons">
        <BaseButton class="button new-room-button">建立新房間</BaseButton>
        <BaseButton class="button start-button">開始遊戲</BaseButton>
      </div>
    </main>
</div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'RoomList',
  components: {
    BaseButton
  },
  props: {}
};
</script>

<style lang="scss" scoped>
.room-list {
  min-height: 100vh; // 之後拿掉
  padding: 20px 40px;
  background-color: #e8eba2;
}

.page-title {
  width: 30%;
  padding: 12px 0;
  margin: 0 auto;
  font-size: 24px;
  text-align: center;
  border-radius: 5px;
  background-color: #e6b566;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.back {
	width: 50px;

	img {
		width: 100%;
		vertical-align: middle;
	}
}

.rooms {
  padding: 20px;
  margin-top: 30px;
  background-color: #e5707e;
  overflow: scroll;
  border-radius: 25px;
}

.room-card {
	padding: 20px 30px 15px;
	border-radius: 10px;
	background-color: #f8f8f8;
	box-shadow: 1px 1px 4px rgb(116, 116, 116);
	cursor: pointer;

	&:hover {
		box-shadow: 0 2px 8px rgb(88, 88, 88);
	}

  h2 {
    font-size: 18px;
    margin: 5px 0 0 0;
  }

  .room-name {
    padding: 5px;
    margin-bottom: 25px;
    font-size: 22px;
    text-align: center;
    letter-spacing: 1px;
    background-color: $peach;
    border-radius: 5px;
  }

  .infos {
    display: flex;
    justify-content: space-around;

    .item {
      text-align: center;
    }

    img {
      width: 50px;
    }
  }
}

// 之後要拆成 component
.buttons {
  margin-top: 30px;
  text-align: center;
}

.button {
  padding: 13px;
}

.new-room-button {
  background-color: $peach;
}

.button + .button{
  margin-left: 30px;
}
</style>
