<template>
  <div class="pc_container">
    <img class="banner" src="../../common/images/banner@2x.png" />

    <div class="bkg">
      <div class="receive">
        <div class="top_content">
          <div class="row_one">
            <div>【{{ $t("opennum") }}】</div>
            <p>20/01/2023-31/01/2023</p>
          </div>
          <div class="row_one">
            <div>【{{ $t("singledep") }}】</div>
            <p>{{ $t("getaward") }}</p>
          </div>
          <div class="row_one">
            <div>【{{ $t("gainchance") }}】</div>
            <p>{{ $t("platform") }}</p>
          </div>
        </div>

        <div class="per_box">
          <img class="perimg" src="../../common/images/3@2x.png" />
          <div class="rece_box">
            <div class="title">
              <img src="../../common/images/2-4@2x.png" />
              <div @click="getRecive">{{ $t("grandbet") }}</div>
            </div>
            <div class="row" v-for="item in cersivelist">
              <div class="left">
                <div class="plat">{{ item.label }}:</div>
                <div>
                  {{ $t("todaycomp") }}：{{ item.num }} {{ $t("degree") }}
                </div>
              </div>
              <div class="right">
                <Progress
                  :show-text="false"
                  :color="color"
                  :text-inside="true"
                  :stroke-width="10"
                  :percentage="
                    Number(item.percent / item.total) * 100 > 100
                      ? 100
                      : Number(item.percent / item.total) * 100
                  "
                ></Progress>
                <div class="perc">
                  {{
                    format_with_substring(parseFloat(item.percent).toFixed(3))
                  }}
                  VNDK
                </div>
                <div class="total">
                  {{ format_with_substring(item.total) }} VNDK
                </div>
              </div>
            </div>

            <div class="grand_box">
              <div class="grand">
                <div class="all">
                  {{ $t("force") }}:<span class="price">{{
                    format_with_substring(
                      parseFloat(activityContent.total_number).toFixed(3)
                    )
                  }}</span>
                  VNDK
                </div>
                <div class="envep_box">
                  <div class="reun">
                    <div>
                      {{ $t("reunion") }} <span>34</span> {{ $t("desk") }}
                    </div>
                    <div>
                      {{ $t("invitefriend") }} <span>12</span>
                      {{ $t("person") }}
                    </div>
                  </div>
                  <div class="btn" @click="getcollet(1)">
                    <img src="../../common/images/btn.png" />
                    <div>{{ $t("trigger") }}</div>
                  </div>
                </div>
                <div class="newyearenv new">
                  <div class="accum">
                    {{ $t("envelope") }}:<span>333,456</span>VNDK
                  </div>
                  <div class="getd">{{ $t("clickdraw") }}</div>
                </div>

                <div class="leov">
                  {{ $t("accfriend") }} <span>34</span> {{ $t("person") }}
                </div>
                <div class="newyearenv">
                  <div class="accum">
                    {{ $t("addit") }}:<span>333,456</span>VNDK
                  </div>
                  <div class="getd">{{ $t("clickdraw") }}</div>
                </div>
              </div>
            </div>
            <div class="fenge"></div>
          </div>
        </div>
      </div>

      <div class="activity_content">
        <div class="all_box">
          <div class="title">
            <img src="../../common/images/invalid-name@2x.png" />
          </div>
          <div class="box_table">
            <div class="til">{{ $t("themaone") }}</div>
            <div class="table">
              <div class="header">
                <div>{{ $t("game") }}</div>
                <div>{{ $t("task") }}</div>
                <div>{{ $t("claims") }}</div>
                <div>{{ $t("newred") }}</div>
                <div>{{ $t("tasklimit") }}</div>
              </div>
              <div class="body" v-for="(item, i) in table1">
                <div :class="`exceed ex${i}`">{{ item.label }}</div>
                <div class="exceed">{{ $t("valid") }} {{ item.task }} VNDK</div>
                <div>{{ item.man }}</div>
                <div>{{ item.handsel }} VNDK</div>
                <div>{{ item.limit }}</div>
              </div>
            </div>
            <div class="til2">
              {{ $t("tips1") }}
            </div>
          </div>

          <div class="box_table">
            <div class="til">{{ $t("extra") }}</div>
            <div class="table">
              <div class="header headertwo">
                <div>{{ $t("invite") }}</div>
                <div>{{ $t("extrared") }}</div>
              </div>
              <div class="body bodytwo" v-for="item in table2">
                <div>{{ item.people }} {{ $t("place") }}</div>
                <div>{{ item.handsel }} VNDK</div>
              </div>
            </div>
          </div>

          <div class="desc">
            <div class="state">【{{ $t("event") }}】</div>
            {{ $t("actinfo1") }}<br />
            {{ $t("actinfo2") }}<br />
            {{ $t("actinfo3") }}<br />
            {{ $t("actinfo4") }}<br />
            {{ $t("actinfo5") }}<br />
          </div>
        </div>
      </div>

      <div class="topbox">
        <div class="gotop" @click="backTop">{{ $t("gotop") }}</div>
      </div>
    </div>

    <div v-show="dialogVisible" class="model-box">
      <div class="modelveng" @click="dialogVisible = false"></div>
      <div class="modeltable">
        <div class="chief">{{ $t("grandbet") }}</div>
        <div class="table">
          <div class="header three">
            <div>{{ $t("index") }}</div>
            <div>{{ $t("order") }}</div>
            <div>{{ $t("color") }}</div>
            <div class="time">{{ $t("gettime") }}</div>
          </div>
          <div class="body three" v-for="(item, i) in listdata">
            <div>{{ i + 1 }}</div>
            <div>{{ item.order_no }}</div>
            <div>{{ parseFloat(item.lottery_amount).toFixed(3) }}</div>
            <div class="time">{{ item.created_at }}</div>
          </div>
        </div>
        <img
          class="dele"
          @click="dialogVisible = false"
          src="../../common/images/del.png"
        />
      </div>
    </div>

    <div v-show="darwdialog" class="model-box">
      <div class="modelveng" @click="darwdialog = false"></div>
      <div class="back_box">
        <div class="post">
          <img class="back" src="../../common/images/tips2.png" />
          <div class="num">{{ parseFloat(money).toFixed(3) }} VNDK</div>
          <div class="cons">{{ $t("congra") }}</div>
          <div class="dele">
            <img
              @click="darwdialog = false"
              src="../../common/images/del.png"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-show="showlogin" class="model-box">
      <div class="modelveng" @click="showlogin = false"></div>
      <div class="login_box">
        <div class="post">
          <img class="back" src="../../common/images/tipbkg.png" />
          <div class="num">{{ $t("respect") }}</div>
          <div class="cons">{{ $t("login") }}</div>
          <div class="dele">
            <img @click="showlogin = false" src="../../common/images/del.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Progress, Dialog, Table, Loading } from "element-ui";
Vue.use(Progress)
  .use(Dialog)
  .use(Table)
  .use(Loading);
import { _debounce } from "@/utils";

import { getReceiveList, cumulativeTheme, getMoneyAdd, getunlock } from "@/api";
export default {
  components: {
    Progress: Progress,
  },
  data() {
    return {
      dialogVisible: false,
      darwdialog: false,
      showlogin: false,
      money: "",
      isenv: "",
      color: "#eda567",
      listdata: [],
      cersivelist: [
        {
          label: this.$t("granddep"),
          num: 0,
          percent: 0,
          total: 2023,
        },
        {
          label: this.$t("getmeet"),
          num: 0,
          percent: 0,
          total: 3023,
        },
        {
          label: this.$t("opendrew"),
          num: 0,
          percent: 0,
          total: 3823,
        },
      ],
      table1: [
        {
          label: this.$t("granddep"),
          task: "2,023",
          man: 1,
          handsel: 18,
          limit: 15,
        },
        {
          label: this.$t("getmeet"),
          task: "3,023",
          man: 1,
          handsel: 30,
          limit: 20,
        },
        {
          label: this.$t("opendrew"),
          task: "3,823",
          man: 1,
          handsel: 35,
          limit: 25,
        },
      ],
      table2: [
        { people: 30, handsel: 38 },
        { people: 80, handsel: 88 },
        { people: 180, handsel: 158 },
      ],

      uid: "",
      platform: "",
      lang: "vi",

      imglist: [
        { img: require("../../common/imgs/1@2x.png"), type: 3 },
        { img: require("../../common/imgs/2@2x.png"), type: 3 },
        { img: require("../../common/imgs/3@2x.png"), type: 3 },
        { img: require("../../common/imgs/4@2x.png"), type: 3 },
        { img: require("../../common/imgs/5@2x.png"), type: 3 },
        { img: require("../../common/imgs/6@2x.png"), type: 3 },
        { img: require("../../common/imgs/7@2x.png"), type: 3 },
        { img: require("../../common/imgs/8@2x.png"), type: 3 },
      ],
      activityContent: {
        total_number: 0,
        lottery_money: 0,
        amount_total: 0,
        plus_lottery_money: 0,
      },
      user_id: 100336,

      loading: "",
    };
  },

  async mounted() {
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

      let { uid, lang } = params;
      uid = Number(uid) ? uid : "";

      const isbro = this.judgeBrowser();
      console.log(isbro);
      if (isbro == "h5") {
        this.$router.replace(`/newyear_h5?uid=${uid}`);
      }
      this.user_id = uid;

      // if (lang) {
      //   this.lang = lang;
      //   this.$i18n.locale = lang;
      // }

      // 加载时显示loading
      // this.loading = this.$loading({
      //   lock: true,
      //   text: "Loading",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)",
      // });

      this.getheme(uid);
      // this.getinfo(uid);
      setTimeout(() => {
        this.getheme(uid);
      }, 1000);
    }
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    // 解锁
    async deblock() {
      if (!this.user_id) {
        this.showlogin = true;
        return;
      }
      await getunlock({ user_id: this.user_id }).then((res) => {
        if (res.code == 200) {
          this.getheme(this.user_id);
          this.$message({ type: "success", message: this.$t("unlocks") });
        } else {
          this.$message({ type: "warning", message: res.msg });
        }
      });
    },
    // 领取彩金
    getcollet: _debounce(function(type) {
      this.checkcollet(type);
    }, 500),

    async checkcollet(type) {
      if (!this.user_id) {
        this.showlogin = true;
        return;
      }
      let {
        lottery_money,
        total_number,
        plus_lottery_money,
      } = this.activityContent;
      let money = type == 1 ? lottery_money : plus_lottery_money;
      if (!Number(money)) {
        this.$message({ type: "warning", message: this.$t("noerr") });
        return;
      }
      let params = {
        user_id: this.user_id,
        lottery_amount: type == 1 ? lottery_money : plus_lottery_money,
        lottery_type: type == 1 ? "theme_one" : "theme_two",
        finish_count: total_number,
      };
      await getMoneyAdd(params).then((res) => {
        if (res.code == 200) {
          this.darwdialog = true;
          this.money = money;
          this.getheme(this.user_id);
        } else {
          this.$message({ type: "warning", message: res.msg });
        }
      });
    },
    // 关闭弹窗
    cancelmodel() {
      this.dialogVisible = false;
    },

    // 打开领奖记录
    getRecive() {
      // if (!this.user_id) {
      //   this.showlogin = true;
      //   return;
      // }
      this.getinfo(this.user_id);
    },
    // 领取记录
    async getinfo(uid) {
      await getReceiveList({
        user_id: uid,
        page_size: 9999,
      }).then((res) => {
        this.listdata = res.data.list;
        this.dialogVisible = true;
      });
    },

    // 主题
    async getheme(user_id) {
      let list = [
        { img: require("../../common/imgs/1@2x.png") },
        { img: require("../../common/imgs/2@2x.png") },
        { img: require("../../common/imgs/3@2x.png") },
        { img: require("../../common/imgs/4@2x.png") },
        { img: require("../../common/imgs/5@2x.png") },
        { img: require("../../common/imgs/6@2x.png") },
        { img: require("../../common/imgs/7@2x.png") },
        { img: require("../../common/imgs/8@2x.png") },
      ];
      await cumulativeTheme({ user_id: user_id, platform_id: 10002 }).then(
        (res) => {
          if (res.code == 200) {
            // this.loading.close();
            let data = res.data;
            this.activityContent = data;
            let reslist = [
              {
                label: this.$t("granddep"),
                num: data.jl_today_number,
                percent: data.wire_valid_bet_amount,
                // percent: 2987.0,
                total: 2023,
              },
              {
                label: this.$t("getmeet"),
                num: data.ai_today_number,
                percent: data.sport_valid_bet_amount,
                // percent: 2345.1,
                total: 3023,
              },
              {
                label: this.$t("opendrew"),
                num: data.ae_today_number,
                percent: data.really_valid_bet_amount,
                // percent: 2864.98,
                total: 3823,
              },
            ];
            this.cersivelist = reslist;
            this.$set(this.cersivelist, 0, reslist[0]);
            this.$set(this.cersivelist, 1, reslist[1]);
            this.$set(this.cersivelist, 2, reslist[2]);

            let delock_count = data.delock_count; //已解锁
            let unlock_count = data.unlock_count; //可解锁
            let notlock_count = data.notlock_count; //未解锁
            // let delock_count = 1; //已解锁
            // let unlock_count = 4; //可解锁
            // let notlock_count = 3; //未解锁

            list.forEach((item, i) => {
              let idx = i + 1;
              item.type = 3;
              if (idx <= delock_count) {
                item.type = 1;
              }
              if (idx > delock_count && idx <= unlock_count + delock_count) {
                item.type = 2;
              }
            });
            this.imglist = list;
            this.$set(this.imglist, 0, list[0]);
          } else {
            // this.loading.close();
          }
        }
      );
    },

    judgeBrowser() {
      let isenv = "";
      // 先判断是不是微信端打开的
      if (/(micromessenger)/i.test(navigator.userAgent)) {
        // alert("微信");
        isenv = "wechat";
      } else {
        // alert("普通浏览器");
        // 判断h5还是pc true就是h5
        let client = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
        if (client) {
          isenv = "h5";
        } else {
          isenv = "pc";
        }
      }
      return isenv;
    },

    format_with_substring(number) {
      // 数字转为字符串，并按照 .分割
      let arr = (number + "").split(".");
      let int = arr[0] + "";
      let fraction = arr[1] || "";
      // 多余的位数
      let f = int.length % 3;
      // 获取多余的位数，f可能是0， 即r可能是空字符串
      let r = int.substring(0, f);
      // 每三位添加','金额对应的字符
      for (let i = 0; i < Math.floor(int.length / 3); i++) {
        r += "," + int.substring(f + i * 3, f + (i + 1) * 3);
      }
      // 多余的位数，上面
      if (f === 0) {
        r = r.substring(1);
      }
      // 调整部分和小数部分拼接
      return r + (!!fraction ? "." + fraction : "");
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

.pc_container{
  width:100vw;
  font-family:Arial
  .banner{
    width:100%;
    height:auto;
    display:flex;
  }
  .bkg{
    background:#fff6df;
    width:100vw;
    height:r2(3230);
    background-image:url('../../common/images/bkg.jpg');
    background-repeat:no-repeat;
    background-size:cover;
    // display:flex;
  }
  .activity_content{
    width:r2(1260);
    height:r2(1476);
    background:rgba(92,0,0,0.3);
    margin:0 auto
    margin-top:r2(40)
    position:relative;

    .all_box{
      width:r2(1200);
      margin:0 auto;
    }
    .title{
      display:flex;
      justify-content:center;
      padding-top:r2(10)
      img{
        width:r2(702);
        height:r2(205);
      }
    }

    .box_table{
      margin-top:r2(30);
      margin-bottom:r2(70);
      .til{
        font-size: r2(20);
        color: #ffeba1;
        line-height:r2(30)
      }
      .table{
        margin:r2(15) 0;
        .header{
          display:flex;
          justify-content space-between
          height:r2(80);
          line-height:r2(80);
          background:#f98b82
          color:#8b1128
          border-top-right-radius:r2(12)
          border-top-left-radius:r2(12)
          div{
            width:20%;
            text-align:center;
            font-size:r2(24);
            border-right:r2(1) solid #eaa35e;
          }
          div:last-child{
            border-right:0
          }
        }

        .body{
          display:flex;
          justify-content space-between
          height:r2(80);
          // padding:r2(10) 0
          line-height:r2(80);
          border-top:r2(1) solid #eaa35e;
          background:#fff0cb;
          div{
            width:25%;
            text-align:center;
            color:#b11e14;
            font-size:r2(18);
            border-right:r2(1) solid #eaa35e;
            // padding:r2(10) 0
          }
          div:last-child{
            border-right:0
          }
          .exceed{
            // height:r2(66);
            line-height: r2(30);
            padding-top:r2(10)
          }
          .ex0{
            line-height:r2(80);
            padding-top:0
          }
          .ex2{
            line-height:r2(80);
            padding-top:0
          }
        }
        .body:nth-child(4){
          border-bottom-right-radius:r2(12)
          border-bottom-left-radius:r2(12)
        }
        .headertwo{
          div{
            width:50%
          }
        }
        .bodytwo{
          div{
            width:50%
          }
        }
      }
      .til2{
        color: #fff;
        font-size:r2(20)
        // background:#fff;
        // padding:r2(10) r2(5);
        // margin-top:r2(-15)
      }
    }
    .desc{
      // margin-top:r2(60)
      color: #ebcd78;
      font-size:r2(20);
      line-height:r2(40)
    }
  }

  .topbox{
    width:100vw;
    display:flex;
    justify-content:center;
    margin-top:r2(40)
    .gotop{
      margin: auto;
      bottom:r2(230)
      width: r2(280);
      height: r2(66);
      line-height: r2(66);
      text-align:center;
      color:#af1c12;
      font-size:r2(24)
      border-radius: r2(8);
      background-image: linear-gradient(to bottom, #ff8839, #ffd359), linear-gradient(to bottom, #d8d8d8, #d8d8d8);
    }
  }

  .receive{
    width:100vw;
    // height:r2(1004);
    // background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;
    margin-top:r2(-30)
    .top_content{
      width:r2(1200);
      height:r2(165);
      margin:0 auto;
      background-image:url('../../common/images/4@2x.png');
      background-repeat:no-repeat;
      background-size:cover;
      display:flex;
      justify-content:space-between;
      .row_one{
        // display:flex;
        text-align:center;
        color: #8b1128;
        width:33.3%
        margin-top:r2(45)
        div{
          font-size:r2(30)
          margin-bottom:r2(20)
          font-weight:550;
        }
        p{
          font-size:r2(20)
          font-weight:400;
          // width:r(245)
        }
      }
  }

  .per_box{
    background:rgba(92,0,0,0.3);
    width:r2(1260);
    height:r2(1261);
    margin: 0 auto;
    margin-top:r2(80)
    .perimg{
      width:r2(1172);
      height:r2(149);
      margin-left:r2(44)
    }
    .rece_box{
      width:r2(1200);
      height:r2(1111)
      margin:0 auto;
      background-image:url('../../common/images/center_bkg.png');
      background-repeat:no-repeat;
      background-size:cover;
      // display:flex;
      // align-self:center;
      // vertical-align:middle
      margin-top:r2(-55)
      .title{
        padding-top:r2(50);
        position:relative;
        width:r2(340);
        margin:0 auto;
        margin-bottom:r2(35);
        img{
          width:100%;
          height:auto;
        }
        div{
          width:100%;
          height:r2(80);
          text-align:center;
          line-height:r2(85);
          font-size:r2(30);
          color:#f6e8c2;
          position:absolute;
          left:0;
          top:r2(50)
        }
      }
      .row{
        width:100%;
        height:r2(93)
        background:#ffe4a2;
        color:#902828;
        font-size:r2(22);
        display:flex;
        justify-content:space-between;
        padding: r2(10) r2(15);
        margin-bottom:r2(25);
        .left{
          width:r2(400)
          .plat{
            margin-top:r2(5)
            margin-bottom:r2(20);
          }
        }
        .right{
          width:r2(640);
          position:relative;
          margin-right:r2(100);
          margin-left:r2(40)
          .el-progress{
            margin-top:r2(55);
          }
          .perc{
            width: r2(190);
            height: r2(44);
            line-height: r2(44);
            background-color: #c53a3a;
            color: #ffea81;
            text-align center;
            position:absolute;
            left: r2(0);
            font-size:r2(18);
            top:r2(-2);
            &:after{
              position:absolute;
              content:'';
              border-top:r2(10) solid #c53a3a;
              border-left:r2(11) solid transparent;
              border-right:r2(11) solid transparent;
              left:r2(75);
              bottom: r2(-10);
            }
          }
          .total{
            width:r2(188);
            height:r2(44);
            line-height:r2(44);
            text-align:center;
            border:r2(1) solid #c53a3a;
            color:#c53a3a;
            background: #fcdec2;
            font-size:r2(20);
            position:absolute;
            right:r2(-90);
            top:r2(-2);

            &:before{
              position:absolute;
              content:'';
              border-top:r2(10) solid #c53a3a;
              border-left:r2(11) solid transparent;
              border-right:r2(11) solid transparent;
              left:r2(80);
              bottom: r2(-10);
            }
            &:after{
              position:absolute;
              content:'';
              border-top:r2(8) solid #fcdec2;
              border-left:r2(8) solid transparent;
              border-right:r2(8) solid transparent;
              left:r2(83);
              bottom: r2(-8);
            }
          }
          /deep/ .el-progress-bar__outer{
            position:relative;
            // overflow:none !important;
            background:#fbedc9 !important;
            border:r2(1) solid #f89797;
          }
          /deep/ .el-progress-bar__innerText{
            margin-top:r2(-65);
            width: r2(160);
            height: r2(44);
            line-height: r2(44);
            background-color: #c53a3a;
            color: #ffea81;
            text-align center;
            position:absolute;
            margin-left: r2(-80);
            font-size:r2(18);
            &:after{
              position:absolute;
              content:'';
              border-top:r2(10) solid #c53a3a;
              border-left:r2(11) solid transparent;
              border-right:r2(11) solid transparent;
              left:r2(75);
              bottom: r2(-10);
            }
          }
        }
      }
      .grand_box{
        width:100%
        display:flex;
        justify-content:flex-end;
        .grand{
          width:r2(640);
          margin-top:r2(42);
          .all{
            font-size:r2(36);
            color: #875d5d;
            margin-bottom:r2(60)
            .price{
              font-size:r2(50);
              color:#dc2210;
              font-weight:600
              margin:0 r2(10)
            }
          }
          .envep_box{
            display:flex;
            justify-content:space-between;
            margin-right:r2(50)
            .reun{
              font-size:r2(20);
              color:#875d5d;
              line-height:r2(38)
              span{
                color:#ff2323;
              }
            }
            .btn{
              position:relative;
              width:r2(228);
              height:r2(66);
              img{
                width:r2(228);
                height:auto;
              }
              div{
                position:absolute;
                top:0;
                left:0;
                font-size:r2(30);
                color: #f6e8c2;
                width:r2(228);
                height:r2(66);
                line-height:r2(68);
                text-align:center;
              }
            }
          }
          .leov{
            font-size:r2(20);
            color:#875d5d;
            line-height:r2(38)
            margin-left:r2(20)
            margin-top:r2(55)
            span{
              color:#ff2323;
            }
          }
          .new{
            margin-top:r2(55)
          }
          .newyearenv{
            height:r2(55)
            line-height:r2(55)
            padding:0 r2(30)
            margin-right:r2(30)
            display:flex;
            justify-content:space-between;
            border-radius: r2(6);
            border: solid r2(1) #e2ca8d;
            color:#fff;
            background-image: linear-gradient(to top, #ff8839, #ff6859 95%);
            .accum{
              font-size:r2(18);
              // margin-top:r2(-3)
              vertical-align: middle;
              span{
                font-size:r2(35)
                font-weight:bold;
                margin:0 r2(8)
                vertical-align: middle;
              }
            }
            .getd{
              font-size:r2(20)
              text-decoration:underline;
            }
          }
        }
      }
      .fenge{
        width:100%;
        height:r2(50)
      }
      }
    }
  }

}

.model-box{
  width:100vw;
  height:100vh;
  position:fixed;
  z-index:20;
  top:0;
  left:0
  .modelveng{
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0
    background:rgba(0,0,0,0.5)
  }
  .modeltable{
  position:absolute;
  width:60%;
  // background:#fff;
  z-index:22;
  left:20%
  top:20%;
  .chief{
    width:100%;
    height:r2(60);
    line-height:r2(60)
    color:#fff;
    background:#cb2221;
    font-size:r2(15)
    text-align:center;
  }
  .table{
    width:100%;
    height:r2(600);
    background:#fff;
    overflow:auto
    // margin:r(5) 0;
    .header{
      display:flex;
      justify-content space-between
      height:r2(60);
      line-height:r2(60);
      div{
        width:25%;
        text-align:center;
        color:#000;
        font-size:r2(11);
      }
    }

    .body{
      display:flex;
      justify-content space-between
      height:r2(60);
      line-height:r2(60);
      border-top:r(1) solid #ddd;
      div{
        width:25%;
        text-align:center;
        color:#000;
        font-size:r2(11);
      }
    }

  }
  .dele{
    position:absolute;
    bottom:r(-150)
    width:r2(60);
    height:auto;
    left:50%;
    margin-left:r2(-30)
  }
}
}


.back_box{
  position:absolute;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:22;
  .post{
    width:r2(500);
    height:auto
    position:relative;
    .back{
      width:100%;
      height:auto;
    }
    .num{
      font-size:r2(16);
      color:rgb(250, 74, 5);
      position:absolute;
      width:100%;
      text-align:center;
      top:r2(85)
    }
    .cons{
      font-size:r2(16);
      color:#fff;
      position:absolute;
      margin:0 auto
      width:80%;
      left:10%;
      text-align:center;
      top:r2(295)
    }
    .dele{
      width:100%;
      text-align:center
      img{
        width:r2(74);
        height:auto;
      }
    }
  }

}

.login_box{
  position:absolute;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:22;
  .post{
    width:r2(500);
    height:auto
    position:relative;
    .back{
      width:100%;
      height:auto;
    }
    .num{
      font-size:r2(20);
      color:rgb(255 236 187);
      position:absolute;
      width:100%;
      text-align:center;
      top:r2(30)
    }
    .cons{
      font-size:r2(16);
      color:rgb(169 33 2);
      position:absolute;
      width:80%;
      text-align:center;
      left:10%
      top:r2(120)
      line-height:r2(30)
    }

    .dele{
      width:100%;
      text-align:center
      img{
        width:r2(54);
        height:auto;
      }
    }
  }
}

/deep/ .el-progress-bar__outer{
  overflow:inherit !important;
}
</style>
