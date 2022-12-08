<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" @click="clicktest"></div>
    <transition name="opacity">
      <div class="model_box">
        <div class="tree_box" v-if="isenv == 'h5' && !showDraw">
          <img
            v-if="lang == 'vi'"
            class="tree"
            src="../../common/img/bg_yuandan_vn_pc@2x.png"
          />
          <img
            v-else-if="lang == 'EN'"
            class="tree"
            src="../../common/img/bg_yuandan_lg_h5@2x.png"
          />
          <img
            v-else
            class="tree"
            src="../../common/img/bg_yuandan_h5@2x.png"
          />

          <img
            @click="openDraw"
            class="gift1"
            src="../../common/img/img_egg@2x.png"
          />
          <img
            @click="openDraw"
            class="gift2"
            src="../../common/img/img_egg@2x.png"
          />
          <img
            @click="openDraw"
            class="gift3"
            src="../../common/img/img_egg@2x.png"
          />
          <img
            @click="openDraw"
            class="gift4"
            src="../../common/img/img_egg@2x.png"
          />
          <img class="btn" src="../../common/img/btn_yuandan_h5@2x.png" />
          <div class="residue vi" v-if="lang == 'vi'">
            {{ $t("opengold") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue vi" v-else-if="lang == 'EN'">
            {{ $t("opengold") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue" v-else>
            {{ $t("opengold") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="tips">
            {{ $t("singledep") }}{{ listdata.deposit_amount
            }}{{ $t("goldchance") }}<br />{{ $t("getaward") }}
          </div>
          <img
            @click="clicktest"
            class="close"
            src="../../common/img/icon_close@2x.png"
          />
        </div>
        <div class="congrats" v-if="isenv == 'h5' && showDraw">
          <img
            class="wins"
            v-if="lang == 'vi'"
            src="../../common/img/bg_yd_vn_pc@2x.png"
          />
          <img
            class="wins"
            v-else-if="lang == 'EN'"
            src="../../common/img/bg_yd_lg_h5@2x.png"
          />
          <img class="wins" v-else src="../../common/img/bg_yd_h5@2x.png" />
          <img class="giftbg" src="../../common/img/img_fangshe_pc@2x.png" />
          <div class="award" v-if="conlist.award_type == 3">
            {{ $t("incentive") }}：{{ conlist.award_amount }}{{ $t("handsel")
            }}<br />
            <div class="one">
              ({{ conlist.color_flow_multiple }}{{ $t("threeflow") }})
            </div>
          </div>
          <div class="award" v-if="conlist.award_type == 2">
            {{ $t("incentive") }}：{{ conlist.award_amount }}{{ $t("failgold")
            }}<br />
          </div>
          <img class="giftbox" src="../../common/img/img_liwu_yd_h5@2x.png" />
          <img
            v-if="lang == 'vi'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_yd_vn_pc@2x.png"
          />
          <img
            v-else-if="lang == 'EN'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_yd_vn_h5@2x.png"
          />
          <img
            v-else
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_yd_h5@2x.png"
          />
          <img
            @click="clicktest"
            class="close"
            src="../../common/img/icon_close@2x.png"
          />
        </div>

        <div class="pctree_box" v-if="isenv == 'pc' && !showDraw">
          <img
            v-if="lang == 'vi'"
            class="tree"
            src="../../common/img/bg_yuandan_vn_pc@2x.png"
          />
          <img
            v-else-if="lang == 'EN'"
            class="tree"
            src="../../common/img/bg_yuandan_lg_h5@2x.png"
          />
          <img
            v-else
            class="tree"
            src="../../common/img/bg_yuandan_h5@2x.png"
          />
          <img
            @click="openDraw"
            class="gift1"
            src="../../common/img/img_egg@2x.png"
          />
          <img
            @click="openDraw"
            class="gift2"
            src="../../common/img/img_egg@2x.png"
          />
          <img
            @click="openDraw"
            class="gift3"
            src="../../common/img/img_egg@2x.png"
          />
          <img
            @click="openDraw"
            class="gift4"
            src="../../common/img/img_egg@2x.png"
          />
          <img class="btn" src="../../common/img/btn_yuandan_h5@2x.png" />

          <div class="residue vi" v-if="lang == 'vi'">
            {{ $t("opengold") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue vi" v-else-if="lang == 'EN'">
            {{ $t("opengold") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue" v-else>
            {{ $t("opengold") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="tips">
            {{ $t("singledep") }}{{ listdata.deposit_amount
            }}{{ $t("goldchance") }}<br />{{ $t("getaward") }}
          </div>
          <img
            @click="clicktest"
            class="close"
            src="../../common/img/icon_close@2x.png"
          />
        </div>
        <div class="pccongrats" v-if="isenv == 'pc' && showDraw">
          <img
            class="wins"
            v-if="lang == 'vi'"
            src="../../common/img/bg_yd_vn_pc@2x.png"
          />
          <img
            class="wins"
            v-else-if="lang == 'EN'"
            src="../../common/img/bg_yd_lg_h5@2x.png"
          />

          <img class="wins" v-else src="../../common/img/bg_yd_h5@2x.png" />
          <img class="giftbg" src="../../common/img/img_fangshe_pc@2x.png" />
          <div class="award" v-if="conlist.award_type == 3">
            {{ $t("incentive") }}：{{ conlist.award_amount }}{{ $t("handsel")
            }}<br />
            <div class="one">
              ({{ conlist.color_flow_multiple }}{{ $t("threeflow") }})
            </div>
          </div>
          <div class="award" v-if="conlist.award_type == 2">
            {{ $t("incentive") }}：{{ conlist.award_amount }}{{ $t("failgold")
            }}<br />
          </div>
          <img class="giftbox" src="../../common/img/img_liwu_yd_h5@2x.png" />
          <img
            v-if="lang == 'vi'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_yd_vn_pc@2x.png"
          />
          <img
            v-else-if="lang == 'EN'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_yd_vn_h5@2x.png"
          />
          <img
            v-else
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_yd_h5@2x.png"
          />
          <img
            @click="clicktest"
            class="close"
            src="../../common/img/icon_close@2x.png"
          />
        </div>
      </div>
    </transition>
    <div class="model_box" v-show="overmodel">
      <div class="over">{{ $t("eggover") }}</div>
    </div>
  </div>
</template>

<script>
import { goldeggInfo, goldeggLottery } from "@/api";
export default {
  data() {
    return {
      isenv: "",
      isShow: true,
      showDraw: false,
      listdata: {},
      conlist: {},
      overmodel: false,
      uid: "",
      platform: "",
      lang: "",
    };
  },

  async mounted() {
    // 先判断是不是微信端打开的
    if (/(micromessenger)/i.test(navigator.userAgent)) {
      // alert("微信");
      this.isenv = "wechat";
    } else {
      // alert("普通浏览器");
      // 判断h5还是pc true就是h5
      let client = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (client) {
        this.isenv = "h5";
      } else {
        this.isenv = "pc";
      }
    }

    let url = location.href;
    if (url.length > 0) {
      //判断是否携带参数
      let params = {};
      if (url.indexOf("?") != -1) {
        let str = url.substr(url.indexOf("?") + 1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
          params[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
      }
      console.log("params", params);
      const { uid, platform, lang } = params;
      this.uid = uid;
      this.platform = platform;
      this.lang = lang;
      sessionStorage.setItem("lang", lang);
      sessionStorage.setItem("platform", platform);
      this.$i18n.locale = lang;

      await this.getinfo(uid);
    }
  },
  methods: {
    async getinfo(uid) {
      await goldeggInfo({
        user_id: uid,
      }).then((res) => {
        this.listdata = res.data;
        console.log("测试or正式", process.env, this.platform);
      });
    },
    // 关闭弹窗
    clicktest() {
      window.parent.postMessage({ show: 1 }, "*");
    },
    // 点击金蛋
    async openDraw() {
      // this.showDraw = true;
      if (this.listdata.can_lottery_times == 0) {
        if (this.isenv == "h5") {
          this.overmodel = true;
          setTimeout(() => {
            this.overmodel = false;
          }, 1000);
        } else {
          this.$message({ message: this.$t("eggover"), type: "warning" });
        }
        return;
      }
      await goldeggLottery({ user_id: this.uid }).then((res) => {
        // let params = {
        //   award_type: 3,
        //   award_amount: 5,
        //   color_flow_multiple: 6,
        //   award_amount: 7,
        // };
        // this.conlist = params;
        // this.showDraw = true;
        if (res.code == 200) {
          this.conlist = res.data;
          this.showDraw = true;
        }
      });
    },

    changeDrew() {
      window.parent.postMessage({ goDetail: true }, "*");
      // if (process.env.NODE_ENV === "production") {
      //   if (this.platform == "vn") {
      //     console.log(111);
      //     window.location.href = "https://m.mxvietnam.com/welfare";
      //   } else {
      //     console.log(222);
      //     window.location.href = "https://m.luckygaming8.com/welfare";
      //   }
      // } else {
      //   if (this.platform == "vn") {
      //     console.log(333);
      //     window.location.href = "https://m.bblyi.com/welfare";
      //   } else {
      //     console.log(444);
      //     window.location.href = "https://m-gold-ph.kgtindok.com/welfare";
      //   }
      // }
    },
  },
};
</script>

<style lang="stylus" scoped>
r(designpx )
  $rem = 37.5px;
  return (designpx / $rem )rem

r2(val){
  return (val/16)rem
}

 .dialog-cover {
  background #000
  opacity 0.7
  position fixed
  z-index 999
  top 0
  left 0
  bottom 0
  right 0
}
.over{
  font-size:r(14);
  color:rgba(255,255,255,0.9);
  padding:r(10) r(20);
  border-radius:r(10);
  background:rgba(0,0,0,0.7)
}

  .model_box{
    // font-size:50px;
    position: fixed;
    z-index: 9999;
    background:transparent;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:auto;
    display:flex;
    justify-content center
    align-items center

    .pctree_box{
      position:relative;
      width:r2(616);
      height:r2(814);
      display:flex;
      justify-content:center;
      margin:0 auto;
      margin-top:-2%;
      .tree{
        width:auto;
        height:100%;
      }
      .gift1,.gift2,.gift3,.gift4,.gift5{
        position:absolute;
        width:r2(170);
        height:r2(170);
      }
      .gift1{
        top:39.5%;
        left:23%;
      }
      .gift2{
        bottom:39.5%;
        right:22.2%;
      }
      .gift3{
        top:66%;
        left:23%
      }
      .gift4{
        top:66%;
        right:22.2%
      }
      .btn{
        width:r2(327);
        position:absolute;
        bottom:r2(-32);
      }
      .residue{
        font-size:r2(20);
        color: #681D1D;
        position:absolute;
        bottom:r2(12);
        width:r2(290);
        text-align:center;
      }
      .vi{
        bottom:r2(0)
      }
      .tips{
        font-size:r2(16);
        color:#fff;
        position:absolute;
        bottom:r2(-100);
        text-align:center;
        line-height:r2(22)
      }
      .close{
        width:r2(36);
        height:r2(36);
        position:absolute;
        top:0;
        right:0;
      }
    }
    .pccongrats{
      display:flex;
      align-items:center;
      justify-content:center;
      width:r2(500);
      height:r2(660);
      position:relative;
      .wins{
        width:100%;
        height:auto;
        position:absolute;
      }
      .giftbg{
        width:r2(340)
        height:auto
        position:absolute
        margin-top:r2(200)
      }
      .award{
        position:absolute;
        font-size:r2(28)
        color:#FFF4D7;
        top:r2(240);
        text-align:center;
        width:80%;
        .one{
          font-size:r2(13);
          margin-top: r2(6);
        }
      }
      .giftbox{
        position:absolute;
        width:r2(200);
        height:r2(200);
        left:r2(150);
        top: r2(310)
      }
      .give{
        position:absolute;
        width:r2(259)
        height:auto;
        bottom:r2(35)
      }
      .close{
        width:r2(36);
        height:r2(36);
        position:absolute;
        bottom:r2(-50)
      }
    }




    .tree_box{
      position:relative;
      width:r(337);
      height:r(447);
      display:flex;
      justify-content:center;
      align-items center;
      .tree{
        width:100%;
        height:auto;
        margin-top:-25%;
      }
      .gift1,.gift2,.gift3,.gift4,.gift5{
        position:absolute;
        width:r(95);
        height:r(95);
      }
      .gift1{
        top:r(135);
        left:r(75)
      }
      .gift2{
        top:r(135);
        right:r(75);
      }
      .gift3{
        top:r(250);
        left:r(75)
      }
      .gift4{
        top:r(250);
        right:r(75)
      }
      .btn{
        width:r(182);
        position:absolute;
        bottom:r(28);
      }
      .residue{
        font-size:r(14);
        color: #681D1D;
        position:absolute;
        bottom:r(52);
        width:r(150);
        text-align:center;
      }
      .vi{
        bottom:r(45);
      }
      .tips{
        font-size:r(12);
        color:#fff;
        position:absolute;
        top:r(420);
        text-align:center;
        line-height:r(15)
      }
      .close{
        width:r(28);
        height:r(28);
        position:absolute;
        top:r(480);
      }
    }

    .congrats{
      display:flex;
      align-items:center;
      justify-content:center;
      width:r(300);
      height:r(460);
      position:relative;
      .wins{
        width:100%;
        height:auto;
        position:absolute;
      }
      .giftbg{
        width:r(200)
        height:auto
        position:absolute
        margin-top:r(120)
      }
      .award{
        position:absolute;
        font-size:r(18)
        color:#FFF4D7
        top:r(175)
        text-align:center;
        width:80%;
        .one{
          font-size:r(13);
          margin-top: r(6);
        }
      }
      .giftbox{
        position:absolute;
        width:r(110);
        height:r(110);
        left:r(95);
        top: r(230)
      }
      .give{
        position:absolute;
        width:r(155)
        height:auto;
        bottom:r(50)
      }
      .close{
        width:r(28);
        height:r(28);
        position:absolute;
        bottom:r(-10);
      }
    }
  }
</style>
