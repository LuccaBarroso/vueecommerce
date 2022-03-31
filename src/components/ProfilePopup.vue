<template>
  <div class="popParent" @click.stop>
    <span class="close" @click="close">&times;</span>
    <button
      @click="isData = true"
      :class="['topBtns', isData ? 'selected' : '']"
    >
      Update Data
    </button>
    <button
      @click="isData = false"
      :class="['topBtns', !isData ? 'selected' : '']"
    >
      Change Password
    </button>
    <form @submit.prevent="doAction">
      <div v-if="isData" :class="[getlogInRes == 'loading' ? 'hide' : '']">
        <label for="Name"><p>Name</p></label>
        <input type="text" v-model="name" id="name" name="name" />
      </div>
      <div v-if="isData" :class="[getlogInRes == 'loading' ? 'hide' : '']">
        <label for="Email"><p>Email</p></label>
        <input type="text" v-model="email" id="email" name="email" />
      </div>
      <div
        v-if="!isData"
        :class="['changePass', getlogInRes == 'loading' ? 'hide' : '']"
      >
        <label for="curPass"><p>Current Password</p></label>
        <input type="password" v-model="curPass" id="curPass" name="curPass" />
      </div>
      <div
        v-if="!isData"
        :class="['changePass', getlogInRes == 'loading' ? 'hide' : '']"
      >
        <label for="newPass"><p>New Password</p></label>
        <input type="password" v-model="newPass" id="newPass" name="newPass" />
      </div>
      <div
        v-if="!isData"
        :class="['changePass', getlogInRes == 'loading' ? 'hide' : '']"
      >
        <label for="confirmNewPass"><p>Confirm New Password</p></label>
        <input
          type="password"
          v-model="confirmNewPass"
          id="confirmNewPass"
          name="confirmNewPass"
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
        Update
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
      isData: true,
      name: "",
      email: "",
      curPass: "",
      newPass: "",
      confirmNewPass: ""
    };
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(["updateMe", "updatePass"]),
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
      if (this.isData) {
        console.log(this.name);
        const data = {
          name: this.name,
          email: this.email
        };
        this.updateMe(data);
      } else {
        const data = {
          passwordCurrent: this.curPass,
          password: this.newPass,
          passwordConfirm: this.confirmNewPass
        };
        this.updatePass(data);
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
    ...mapGetters(["getlogInRes", "getUser"])
  },
  created() {
    let user = this.getUser;
    this.name = user.name;
    this.email = user.email;
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
    padding: 10px 30px;
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
    div.changePass input {
      width: 50%;
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
