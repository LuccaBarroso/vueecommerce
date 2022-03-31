<template>
  <div class="popParent" @click.stop>
    <span class="close" @click="close">&times;</span>
    <form @submit.prevent="doAction">
      <p>Are you sure you want to logOut?</p>
      <loading v-if="getUpdateRes == 'loading'" />
      <div class="btns">
        <button class="bottomBtns" @click="close">
          Not yet!
        </button>
        <button class="bottomBtns" type="submit">
          Yes, log me out!
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import loading from "./loading";

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
    ...mapActions(["logout"]),
    ...mapMutations(["setPopup", "setUpdateRes"]),
    close: function() {
      this.setPopup("");
      this.hideWarning();
    },
    hideWarning: function() {
      this.setUpdateRes("");
    },
    doAction: function() {
      this.changeLoading(true);
      this.logout();
    },
    changeLoading(bool) {
      if (bool) {
        this.setUpdateRes("loading");
      } else if (this.getUpdateRes == "loading") {
        this.setUpdateRes("");
      }
    }
  },
  computed: {
    ...mapGetters(["getUpdateRes", "getUser"])
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
  .btns {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .bottomBtns {
      align-self: center;
      background-color: #96031a;
      padding: 10px;
      width: 45%;
      position: relative;
      top: 40px;
      color: #fff;
    }
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
