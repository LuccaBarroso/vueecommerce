<template>
  <div class="popParent" @click.stop>
    <span class="close" @click="close">&times;</span>
    <button
      @click="isRegister = false"
      :class="['topBtns', !isRegister ? 'selected' : '']"
    >
      Log In
    </button>
    <button
      @click="isRegister = true"
      :class="['topBtns', isRegister ? 'selected' : '']"
    >
      Sign In
    </button>
    <form @submit.prevent="doAction">
      <div class="form">
        <div v-if="isRegister">
          <label for="Name"><p>Name</p></label>
          <input type="text" v-model="name" id="name" name="name" />
        </div>
        <div>
          <label for="Email"><p>Email</p></label>
          <input type="text" v-model="email" id="email" name="email" />
        </div>
        <div>
          <label for="pass"><p>Password</p></label>
          <input type="password" v-model="password" id="pass" name="pass" />
        </div>
        <div v-if="isRegister">
          <label for="passConfirm"><p>Confirm Password</p></label>
          <input
            type="password"
            v-model="passwordConfirm"
            id="passConfirm"
            name="passConfirm"
          />
        </div>
        <div v-if="getlogInRes != ''">
          <p>{{ getlogInRes }}</p>
          <span class="close" @click="hideWarning">&times;</span>
        </div>
      </div>

      <button class="bottomBtns" type="submit" @click="doAction">
        {{ isRegister ? "Sign In" : "Log In" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isRegister: false,
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["setPopup"]),
    close: function() {
      this.setPopup("");
    },
    hideWarning: function() {
      this.message = "";
    },
    doAction: function() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      };
      if (!this.isRegister) {
        delete data.name;
        delete data.passwordConfirm;
      }
      this.login(data);
    }
  },
  computed: {
    ...mapGetters(["getlogInRes"])
  }
};
</script>

<style scoped lang="scss">
.popParent {
  background-color: #27272b;
  margin: 25vh auto;
  padding: 20px;
  width: 80%;
  z-index: 2;
  max-width: 550px;
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .topBtns {
    background-color: #1b1b1e;
    padding: 10px 40px;
    position: relative;
    top: -40px;
    color: #fff;
  }
  .bottomBtns {
    background-color: #96031a;
    padding: 10px 40px;
    position: relative;
    top: 40px;
    color: #fff;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: right;
    }
    label,
    p {
      color: white;
      padding-right: 5px;
    }
    input {
      width: 60%;
      background: #c4c4c4;
      padding: 2px;
      margin-right: 10%;
    }
    span {
      font-size: 14px;
    }
  }
  .selected {
    background-color: #27272b;
  }
}
</style>
