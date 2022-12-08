<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" @click="clickhidden"></div>
    <transition name="opacity">
      <div class="model_box">
        <div class="tree_box" v-if="isenv == 'h5' && !showDraw">
          <img
            class="tree"
            v-if="lang == 'vi'"
            src="../../common/img/bg_shengdan_vn_h5@2x.png"
          />
          <img
            class="tree"
            v-else-if="lang == 'EN'"
            src="../../common/img/bg_shengdan_lg_h5@2x.png"
          />
          <img class="tree" v-else src="../../common/img/bg_shengdan.png" />
          <img
            @click="openDraw"
            class="gift1"
            src="../../common/img/gift_1_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift2"
            src="../../common/img/gift_2_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift3"
            src="../../common/img/gift_3_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift4"
            src="../../common/img/gift_4_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift5"
            src="../../common/img/gift_5_pc@2x.png"
          />
          <img class="btn" src="../../common/img/btn_shengdan_pc@2x.png" />
          <div class="residue vi" v-if="lang == 'vi'">
            {{ $t("opennum") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue vi" v-else-if="lang == 'EN'">
            {{ $t("opennum") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue" v-else>
            {{ $t("opennum") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="tips" v-if="listdata.cond_type == 1">
            {{ $t("singledep") }}{{ listdata.deposit_amount
            }}{{ $t("gainchance") }}<br />{{ $t("getaward") }}
          </div>
          <div class="tips" v-else>
            {{ $t("grandbet")
            }}<span>{{ listdata.expect_gear.bet_amount }}</span
            >/{{ listdata.expect_gear.expect_bet_amount }}<br />
            {{ $t("granddep")
            }}<span>{{ listdata.expect_gear.deposit_amount }}</span
            >/{{ listdata.expect_gear.expect_deposit_amount }}<br />
            {{ $t("getmeet") }}{{ listdata.expect_gear.reward_lottery_count
            }}{{ $t("opendrew") }}
          </div>
          <img
            @click="clickhidden"
            class="close"
            src="../../common/img/icon_close.png"
          />
        </div>
        <div class="congrats" v-if="isenv == 'h5' && showDraw">
          <img
            class="wins"
            v-if="lang == 'vi'"
            src="../../common/img/bg_sd_vn_h5@2x.png"
          />
          <img
            class="wins"
            v-else-if="lang == 'EN'"
            src="../../common/img/bg_sd_lg_h5@2x.png"
          />
          <img class="wins" v-else src="../../common/img/bg_sd_pc@2x.png" />
          <img class="giftbg" src="../../common/img/img_fangshe_pc@2x.png" />
          <div class="award">
            {{ $t("incentive") }}：{{ conlist.award_amount }}{{ $t("handsel") }}
          </div>
          <img class="giftbox" src="../../common/img/gift_yd_pc@2x.png" />
          <img
            v-if="lang == 'vi'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_sd_vn_h5@2x.png"
          />
          <img
            v-else-if="lang == 'EN'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_sd_lg_h5@2x.png"
          />
          <img
            v-else
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_sd_pc@2x.png"
          />
          <img
            @click="clickhidden"
            class="close"
            src="../../common/img/icon_close@2x.png"
          />
        </div>

        <div class="pctree_box" v-if="isenv == 'pc' && !showDraw">
          <img
            class="tree"
            v-if="lang == 'vi'"
            src="../../common/img/bg_shengdan_vn_h5@2x.png"
          />
          <img
            class="tree"
            v-else-if="lang == 'EN'"
            src="../../common/img/bg_shengdan_lg_h5@2x.png"
          />
          <img class="tree" v-else src="../../common/img/bg_shengdan.png" />
          <img
            @click="openDraw"
            class="gift1"
            src="../../common/img/gift_1_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift2"
            src="../../common/img/gift_2_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift3"
            src="../../common/img/gift_3_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift4"
            src="../../common/img/gift_4_pc@2x.png"
          />
          <img
            @click="openDraw"
            class="gift5"
            src="../../common/img/gift_5_pc@2x.png"
          />
          <img class="btn" src="../../common/img/btn_shengdan_pc@2x.png" />
          <div class="residue vi" v-if="lang == 'vi'">
            {{ $t("opennum") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue vi" v-else-if="lang == 'EN'">
            {{ $t("opennum") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="residue" v-else>
            {{ $t("opennum") }}：{{ listdata.can_lottery_times }}
          </div>
          <div class="tips" v-if="listdata.cond_type == 1">
            {{ $t("singledep") }}{{ listdata.deposit_amount
            }}{{ $t("gainchance") }}<br />{{ $t("getaward") }}
          </div>
          <div class="tips" v-else>
            {{ $t("grandbet")
            }}<span>{{ listdata.expect_gear.bet_amount }}</span
            >/{{ listdata.expect_gear.expect_bet_amount }}<br />
            {{ $t("granddep")
            }}<span>{{ listdata.expect_gear.deposit_amount }}</span
            >/{{ listdata.expect_gear.expect_deposit_amount }}<br />
            {{ $t("getmeet") }}{{ listdata.expect_gear.reward_lottery_count
            }}{{ $t("opendrew") }}
          </div>
          <img
            @click="clickhidden"
            class="close"
            src="../../common/img/icon_close.png"
          />
        </div>
        <div class="pccongrats" v-if="isenv == 'pc' && showDraw">
          <img
            class="wins"
            v-if="lang == 'vi'"
            src="../../common/img/bg_sd_vn_h5@2x.png"
          />
          <img
            class="wins"
            v-else-if="lang == 'EN'"
            src="../../common/img/bg_sd_lg_h5@2x.png"
          />
          <img class="wins" v-else src="../../common/img/bg_sd_pc@2x.png" />

          <img class="giftbg" src="../../common/img/img_fangshe_pc@2x.png" />
          <div class="award">
            {{ $t("incentive") }}：{{ conlist.award_amount }}{{ $t("handsel") }}
          </div>
          <img class="giftbox" src="../../common/img/gift_yd_pc@2x.png" />
          <img
            v-if="lang == 'vi'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_sd_vn_h5@2x.png"
          />
          <img
            v-else-if="lang == 'EN'"
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_sd_lg_h5@2x.png"
          />
          <img
            v-else
            @click="changeDrew"
            class="give"
            src="../../common/img/btn_get_sd_pc@2x.png"
          />
          <img
            @click="clickhidden"
            class="close"
            src="../../common/img/icon_close@2x.png"
          />
        </div>
      </div>
    </transition>
    <div class="model_box" v-show="overmodel">
      <div class="over">{{ $t("drewover") }}</div>
    </div>
  </div>
</template>

<script>
import { christmasInfo, christmasLottery } from "@/api";
export default {
  data() {
    return {
      isenv: "",
      isShow: true,
      showDraw: false,
      listdata: {},
      overmodel: false,
      uid: "",
      conlist: {},
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
      console.log(this.$i18n);
      this.$i18n.locale = lang;
      await this.getinfo(uid);
    }
  },
  methods: {
    async getinfo(uid) {
      await christmasInfo({
        user_id: uid,
      }).then((res) => {
        this.listdata = res.data;
        console.log("测试or正式", process.env, this.platform);
      });
    },
    // 关闭弹窗
    clickhidden() {
      window.parent.postMessage({ show: 1 }, "*");
    },

    // 开礼盒
    async openDraw() {
      // this.showDraw = true;
      if (this.listdata.can_lottery_times == 0) {
        if (this.isenv == "h5") {
          this.overmodel = true;
          setTimeout(() => {
            this.overmodel = false;
          }, 1000);
        } else {
          this.$message({ message: this.$t("drewover"), type: "warning" });
        }
        return;
      }
      await christmasLottery({ user_id: this.uid }).then((res) => {
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
      width:r2(750);
      height:r2(830);
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
        width:r2(90);
        height:r2(90);
      }
      .gift1{
        bottom:33%;
        left:29%;
      }
      .gift2{
        bottom:29%;
        right:30%;
      }
      .gift3{
        top:34%;
        left:36%
      }
      .gift4{
        top:25%;
        right:40%
      }
      .gift5{
        top:47%;
        right:32%
      }
      .btn{
        width:r2(290);
        position:absolute;
        bottom:r2(-32);
      }
      .residue{
        font-size:r2(20);
        color:#F3DAAF;
        position:absolute;
        bottom:r2(10);
        width:r2(250);
        text-align:center;
      }
      .vi{
        bottom:r2(1);
      }
      .tips{
        font-size:r2(16);
        color:#fff;
        position:absolute;
        top:104%;
        text-align:center;
        line-height:r2(22)
      }
      .close{
        width:r2(28);
        height:r2(28);
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
        width:r2(400)
        height:auto
        position:absolute
        margin-top:r2(140)
      }
      .award{
        position:absolute;
        font-size:r2(20)
        color:#FFF4D7;
        top:r2(220);
        width:80%;
        text-align:center;
      }
      .giftbox{
        position:absolute;
        width:r2(290);
        height:r2(290);
        left:r2(105);
        top: r2(256)
      }
      .give{
        position:absolute;
        width:r2(269)
        height:auto;
        bottom:r2(-13)
      }
      .close{
        width:r2(34);
        height:r2(34);
        position:absolute;
        bottom:r2(-60);
      }
    }




    .tree_box{
      position:relative;
      width:r(317px);
      height:r(517px);
      display:flex;
      justify-content:center;
      align-items center;
      margin-top:-22%;
      .tree{
        width:r(317px);
        height:r(517px);
      }
      .gift1,.gift2,.gift3,.gift4,.gift5{
        position:absolute;
        width:r(60);
        height:r(60);
      }
      .gift1{
        bottom:r(170);
        left:r(60)
      }
      .gift2{
        bottom:r(150);
        right:r(55);
      }
      .gift3{
        top:r(172);
        left:r(95)
      }
      .gift4{
        top:r(130);
        right:r(110)
      }
      .gift5{
        top:r(240);
        right:r(80)
      }
      .btn{
        width:r(182);
        position:absolute;
        top:r(480);
      }
      .residue{
        font-size:r(14);
        color:#F3DAAF;
        position:absolute;
        top:r(496);
        width:r(150);
        text-align:center;
      }
      .vi{
        top:r(489);
      }
      .tips{
        font-size:r(12);
        color:#fff;
        position:absolute;
        top:r(540);
        text-align:center;
        line-height:r(17);
        span{
          color:red;
        }
      }
      .close{
        width:r(28);
        height:r(28);
        position:absolute;
        right:0;
        top:0
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
        width:r(250)
        height:auto
        position:absolute
        margin-top:r(70)
      }
      .award{
        position:absolute;
        font-size:r(18)
        color:#FFF4D7
        top:r(160);
        width:80%;
        text-align:center;
      }
      .giftbox{
        position:absolute;
        width:r(165);
        height:r(165);
        left:r(67.5);
        top: r(180)
      }
      .give{
        position:absolute;
        width:r(175)
        height:auto;
        bottom:r(20)
      }
      .close{
        width:r(30);
        height:r(30);
        position:absolute;
        bottom:r(-15)
      }
    }
  }
</style>
