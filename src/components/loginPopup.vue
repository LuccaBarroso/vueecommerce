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
      <div v-if="isRegister" :class="[getlogInRes == 'loading' ? 'hide' : '']">
        <label for="Name"><p>Name</p></label>
        <input type="text" v-model="name" id="name" name="name" />
      </div>
      <div :class="[getlogInRes == 'loading' ? 'hide' : '']">
        <label for="Email"><p>Email</p></label>
        <input type="text" v-model="email" id="email" name="email" />
      </div>
      <div :class="[getlogInRes == 'loading' ? 'hide' : '']">
        <label for="pass"><p>Password</p></label>
        <input type="password" v-model="password" id="pass" name="pass" />
      </div>
      <div v-if="isRegister" :class="[getlogInRes == 'loading' ? 'hide' : '']">
        <label for="passConfirm"><p>Confirm Password</p></label>
        <input
          type="password"
          v-model="passwordConfirm"
          id="passConfirm"
          name="passConfirm"
        />
      </div>

      <div
        :class="['warning', getlogInRes == 'loading' ? 'hide' : '']"
        v-if="getlogInRes != ''"
      >
        <p>{{ getlogInRes }}</p>
        <span class="close" @click="hideWarning">&times;</span>
      </div>

      <loading v-if="getlogInRes == 'loading'" />

      <button class="bottomBtns" type="submit">
        {{ isRegister ? "Sign In" : "Log In" }}
      </button>
    </form>
  </div>
</template>

<script>
import loading from "./loading";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  components: {
    loading
  },
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
    ...mapActions(["login", "register"]),
    ...mapMutations(["setPopup", "setlogInRes"]),
    close: function() {
      this.setPopup("");
      this.hideWarning();
    },
    hideWarning: function() {
      this.setlogInRes("");
    },
    doAction: function() {
      this.changeLoading(true);
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      };
      if (!this.isRegister) {
        delete data.name;
        delete data.passwordConfirm;
        this.login(data);
      } else {
        this.register(data);
      }
    },
    changeLoading(bool) {
      if (bool) {
        this.setlogInRes("loading");
      } else if (this.getlogInRes == "loading") {
        this.setLogInRes("");
      }
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
    align-self: center;
    background-color: #96031a;
    padding: 10px;
    width: 50%;
    position: relative;
    top: 40px;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    .hide {
      display: none;
    }
    div {
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: right;
    }
    .warning {
      justify-content: center;
      align-items: center;
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
@media (max-width: 500px) {
  .popParent .topBtns {
    padding: 10px;
  }
}
@media (max-width: 400px) {
  .popParent .topBtns {
    font-size: 13px;
  }
}
</style>
