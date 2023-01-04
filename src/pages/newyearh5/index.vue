<template>
  <div class="h5_container">
    <img class="banner" src="../../common/images/banner2.png" />
    <div class="bkg">
      <div class="top_box">
        <div class="top_content">
          <div class="row_one time">
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
      </div>

      <div class="receive">
        <img class="perimg" src="../../common/images/3@2x.png" />
        <div class="rece_box">
          <div class="title">
            <img src="../../common/images/2-4@2x.png" />
            <div @click="getRecive">{{ $t("grandbet") }}</div>
          </div>
          <div class="row" v-for="item in cersivelist">
            <div class="left">
              <div>{{ item.label }}:</div>
              <div class="mar">
                {{ $t("todaycomp") }}：<span>{{ item.num }}</span>
                {{ $t("degree") }}
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
                {{ format_with_substring(parseFloat(item.percent).toFixed(3)) }}
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
                    parseFloat(activityContent.deposit).toFixed(3)
                  )
                }}</span>
                VNDK
              </div>
              <div class="envep_box">
                <div class="reun">
                  <div class="right_box">
                    <div>
                      {{ $t("reunion") }}
                      <span>{{ activityContent.feast_count }}</span>
                      {{ $t("desk") }}
                    </div>
                    <div>
                      {{ $t("invitefriend") }}
                      <span>{{ activityContent.user_count }}</span>
                      {{ $t("person") }}
                    </div>
                  </div>
                </div>
                <div class="btn" @click="getcollet(1)">
                  <img src="../../common/images/btn.png" />
                  <div>{{ $t("trigger") }}</div>
                </div>
              </div>
              <div class="newyearenv new">
                <div class="accum">
                  {{ $t("envelope") }}:
                  <div>
                    {{
                      format_with_substring(
                        parseFloat(activityContent.red_envelope).toFixed(3)
                      )
                    }}
                  </div>
                  VNDK
                </div>
                <div class="getd" @click="getnewred">{{ $t("clickdraw") }}</div>
              </div>

              <div class="leov">
                {{ $t("accfriend") }}
                <span>{{ activityContent.user_total }}</span> {{ $t("person") }}
              </div>
              <div class="newyearenv">
                <div class="accum">
                  {{ $t("addit") }}:
                  <div>
                    {{
                      format_with_substring(
                        parseFloat(activityContent.extra_red_envelope).toFixed(
                          3
                        )
                      )
                    }}
                  </div>
                  VNDK
                </div>
                <div class="getd">{{ $t("clickdraw") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="activity_content">
        <div class="all_box">
          <div class="title">
            <img src="../../common/images/invalid-name@2x.png" />
          </div>

          <div class="box_table">
            <div class="til">{{ $t("themaone") }}。</div>
            <div class="table">
              <div :class="lang == 'vi' ? 'header morehead' : 'header'">
                <div>{{ $t("game") }}</div>
                <div>{{ $t("task") }}</div>
                <div>{{ $t("claims") }}</div>
                <div>{{ $t("newred") }}</div>
                <div :class="lang == 'vi' ? 'more' : ''">
                  {{ $t("tasklimit") }}
                </div>
              </div>
              <div
                :class="lang == 'vi' ? 'body moretable' : 'body'"
                v-for="(item, i) in table1"
              >
                <div :class="lang == 'vi' ? `exceed ex${i}` : 'exceed'">
                  {{ item.label }}
                </div>
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

          <div class="box_table twobox">
            <div class="til">{{ $t("extra") }}</div>
            <div class="table">
              <div class="header three">
                <div>{{ $t("invite") }}</div>
                <div>{{ $t("extrared") }}</div>
              </div>
              <div class="body three" v-for="item in table2">
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
            <div :class="lang == 'vi' ? 'time' : ''">{{ $t("index") }}</div>
            <div>{{ $t("order") }}</div>
            <div>{{ $t("color") }}</div>
            <div>{{ $t("gettime") }}</div>
          </div>
          <div class="body three" v-for="(item, i) in listdata">
            <div>{{ i + 1 }}</div>
            <div>{{ item.order_no }}</div>
            <div>{{ parseFloat(item.lottery_amount).toFixed(3) }}</div>
            <div>{{ item.created_at }}</div>
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
          <div class="num">{{ parseFloat(money).toFixed(3) }}VNDK</div>
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

import {
  getReceiveList,
  cumulativeTheme,
  getMoneyAdd,
  getnewyearRed,
  getextraRed,
  getbetprogress,
} from "@/api";
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

      uid: 1,
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
        deposit: 0,
        feast_count: 0,
        user_count: 0,
        red_envelope: 0,
        user_total: 0,
        extra_red_envelope: 0,
      },

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
      if (isbro == "pc") {
        this.$router.replace(`/newyear_pc?uid=${uid}`);
      }
      this.uid = uid;

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
    }
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    // 获取个人数据
    async getheme(user) {
      await cumulativeTheme({ user: user }).then((res) => {
        if (res.code == 200) {
          // this.loading.close();
          let data = res.data;
          this.activityContent = data;
        } else {
          // this.loading.close();
        }
      });
    },

    // 打开领奖记录
    async getRecive() {
      if (!this.uid) {
        this.showlogin = true;
        return;
      }
      await getReceiveList({
        user: this.uid,
      }).then((res) => {
        this.listdata = res.data.list;
        this.dialogVisible = true;
      });
    },

    // 抽红包雨
    getcollet: _debounce(function(type) {
      this.checkcollet(type);
    }, 500),

    async checkcollet(type) {
      if (!this.uid) {
        this.showlogin = true;
        return;
      }

      let params = {
        user: this.uid,
      };
      await getMoneyAdd(params).then((res) => {
        if (res.code == 200) {
          this.darwdialog = true;
          this.money = money;
          this.getheme(this.uid);
        } else {
          this.$message({ type: "warning", message: res.msg });
        }
      });
    },
    // 关闭弹窗
    cancelmodel() {
      this.dialogVisible = false;
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

.h5_container{
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
    height:r(2100);
    background-image:url('../../common/images/invalidName2.png');
    background-repeat:no-repeat;
    background-size:cover;
    // display:flex;
  }
  .top_box{
    // background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    width:100%;
    padding-top:r(20)
  }
  .top_content{
    width:r(360);
    height:r(82);
    margin:0 auto;
    background-image:url('../../common/images/invalidName1.png');
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    justify-content:space-between;
    .row_one{
      // display:flex;
      text-align:center;
      color: #8b1128;
      width:33.3%
      margin-top:r(22)
      div{
        font-size:r(13)
        margin-bottom:r(12)
        font-weight:550;
      }
      p{
        font-size:r(10)
        font-weight:400;
      }
      .more{
        line-height:r(18)
        margin-top:r(-2)
      }
    }
    .time{
      width:44%;
    }
  }
  .receive{
    width:100vw;
    height:r(800);
    // background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;
    text-align:center
    .perimg{
      width:r(360);
      height:r(37)
      margin-top:r(25)
    }

      .rece_box{
        width:r(360);
        height:r(735)
        margin:0 auto;
        background-image:url('../../common/images/invalidName3.png');
        background-repeat:no-repeat;
        background-size:cover;
        // display:flex;
        align-self:center;
        vertical-align:middle
        margin-top:r(-20)
        .title{
          padding-top:r(30);
          position:relative;
          width:r(160);
          margin:0 auto;
          margin-bottom:r(10);
          img{
            width:r(160);
            height:auto;
          }
          div{
            width:r(160);
            height:r(40);
            text-align:center;
            line-height:r(45);
            font-size:r(14);
            color:#f6e8c2;
            position:absolute;
            left:0;
            top:r(28)
          }
        }
        .row{
          width:100%;
          height:r(80)
          background:#ffe4a2;
          color:#902828;
          font-size:r(12);
          // display:flex;
          // justify-content:space-between;
          padding: r(5) r(15) r(10) r(15);
          margin-bottom:r(12);
          .left{
            display:flex;
            justify-content:space-between;
            div{
              margin:r(5) 0;
              span{
                color:rgb(219, 41, 41)
                font-size:r(14)
                font-weight:bold
              }
            }
          }
          .right{
            width:100%;
            position:relative;
            // margin-right:r(50);
            .el-progress{
              margin-top:r(33);
            }
            .perc{
              width: r(110);
              height: r(20);
              line-height: r(20);
              background-color: #c53a3a;
              color: #ffea81;
              text-align center;
              position:absolute;
              left:0
              // top:r(-30);
              bottom:r(19);
              font-size:r(11);
              &:after{
                position:absolute;
                content:'';
                border-top:r(6) solid #c53a3a;
                border-left:r(6) solid transparent;
                border-right:r(6) solid transparent;
                left:r(45);
                bottom: r(-5);
              }
            }
            .total{
              width:r(90);
              height:r(20);
              line-height:r(20);
              text-align:center;
              border:r(1) solid #c53a3a;
              color:#c53a3a;
              background: #fcdec2;
              font-size:r(11);
              position:absolute;
              right:r(0);
              bottom:r(19);

              &:before{
                position:absolute;
                content:'';
                border-top:r(6) solid #c53a3a;
                border-left:r(6) solid transparent;
                border-right:r(6) solid transparent;
                left:r(38);
                bottom: r(-7);
              }
              &:after{
                position:absolute;
                content:'';
                border-top:r2(4) solid #fcdec2;
                border-left:r2(4) solid transparent;
                border-right:r2(4) solid transparent;
                left:r(34.5);
                bottom: r(-6);
              }
            }
            /deep/ .el-progress-bar__outer{
              position:relative;
              // overflow:none !important;
              background:#fbedc9 !important;
              border:r(1) solid #f89797;
            }
            /deep/ .el-progress-bar__innerText{
              width: r(80);
              height: r(20);
              line-height: r(20);
              background-color: #c53a3a;
              color: #ffea81;
              text-align center;
              position:absolute;
              left:0
              top:r(-30);
              font-size:r(11);
              &:after{
                position:absolute;
                content:'';
                border-top:r(6) solid #c53a3a;
                border-left:r(6) solid transparent;
                border-right:r(6) solid transparent;
                left:r(32);
                bottom: r(-5);
              }
            }
          }
        }

      .grand_box{
        width:100%
        display:flex;
        justify-content:flex-end;
        .grand{
          // width:r(350);
          padding:0 r(15)
          margin-top:r(20);
          .all{
            font-size:r(18);
            color: #875d5d;
            margin-bottom:r(35)
            text-align:right
            .price{
              font-size:r(27);
              color:#dc2210;
              font-weight:600
              margin:0 r(5)
            }
          }
          .envep_box{
            // display:flex;
            // justify-content:space-between;
            // margin-right:r(20)
            text-align right
            .reun{
              // width:100%
              font-size:r(12);
              color:#875d5d;
              line-height:r(18)
              display:flex;
              justify-content:flex-end;
              .right_box{
                width:r(135);
                text-align:left;
                div{
                  margin-bottom:r(12)
                }
              }
              span{
                color:#ff2323;
              }
            }
            .btn{
              position:relative;
              width:100%;
              height:r2(40);
              img{
                width:r(140);
                height:auto;
              }
              div{
                position:absolute;
                top:0;
                right:0;
                font-size:r(18);
                color: #f6e8c2;
                width:r(140);
                height:r(40);
                line-height:r(42);
                text-align:center;
              }
            }
          }
          .leov{
            font-size:r(11);
            color:#875d5d;
            line-height:r(28)
            // margin-left:r(20)
            margin-top:r(20)
            text-align:left;
            span{
              color:#ff2323;
            }
          }
          .new{
            margin-top:r(18)
          }
          .newyearenv{
            width:r(330);
            height:r(27.5)
            line-height:r(27.5)
            padding:0 r(10)
            // margin-right:r(10)
            display:flex;
            justify-content:space-between;
            border-radius: r(4);
            border: solid r(1) #e2ca8d;
            color:#fff;
            background-image: linear-gradient(to top, #ff8839, #ff6859 95%);
            .accum{
              font-size:r(11);
              display:flex
              // margin-top:r(-3)
              // vertical-align: middle;
              div{
                font-size:r(17.5)
                font-weight:bold;
                margin:0 r(4)
                vertical-align: middle;
                margin-top:r(-1)
              }
            }
            .getd{
              font-size:r(11)
              text-decoration:underline;
            }
          }
        }
      }

      }
  }
  .activity_content{
    width:100vw;
    height:r(1066);
    // background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    background:rgba(92,0,0,0.3);
    position:relative;
    margin-top:r(10)
    .all_box{
      // width:r2(1200);
      margin:0 auto;
    }
    .title{
      display:flex;
      justify-content:center;
      padding-top:r(5)
      img{
        width:r(350.8);
        height:r(102.5);
      }
    }

    .box_table{
      margin:r(20) r(15) 0 r(15);
      .til{
        font-size: r(12);
        color: #ffeba1;
        line-height:r(16)
      }
      .table{

        margin:r(5) 0;
        .header{
          display:flex;
          justify-content space-between
          height:r(40);
          line-height:r(40);
          background:#e1544a;
          color:#fff
          div{
            // width:25%;
            text-align:center;
            color:#fff;
            font-size:r(11);
            border-right:r(0.5) solid #ffeb8b;
          }
          div:last-child{
            border-right:0
          }
          .more{
            line-height:r(15);
            margin-top:r(5)
          }
        }

        .body{
          display:flex;
          justify-content space-between
          height:r(40);
          line-height:r(40);
          border-top:r(0.5) solid #eaa35e;
          background:#fff0cb
          div{
            // width:25%
            text-align:center;
            color:#b11e14;
            font-size:r(11);
            border-right:r(0.5) solid #eaa35e;
          }
          .exceed{
            height:r(40);
            line-height: r(16);
            padding-top:r(5)
          }
        }
        .morehead{
          div{
            width:20%
          }
          // div:nth-child(1){
          //   width:33%;
          // }
          // div:nth-child(2){
          //   width:30%;
          // }
          // div:nth-child(3){
          //   width:17%;
          // }
          // div:nth-child(4){
          //   width:20%;
          // }
        }

        .moretable{
          height:r(70);
          line-height:r(70);
          div{
            width:20%
          }
          // div:nth-child(1){
          //   width:33%
          // }
          // div:nth-child(2){
          //   width:30%
          // }
          // div:nth-child(3){
          //   width:17%
          // }
          // div:nth-child(4){
          //   width:20%
          // }
          .exceed{
            height:r(70);
            line-height: r(16);
            padding-top:r(10)
          }
          .ex0{
            // height:r(60);
            padding-top:0
            line-height:r(70)
          }
          .ex2{
            height:r(70);
            padding-top:r(20)
          }
        }
        .three{
          div{
            width:50%;
          }
          .lineh{
            line-height:r(15)
            padding-top:r(5)
          }
        }
      }
      .til2{
        color: #fff;
        font-size:r(10)
        line-height:r(16)
        // background:#fff;
        // padding:r(5) r(3)
        // margin-top:r(-5)
      }
    }
    .twobox{
      margin-top:r(40)
    }
    .desc{
      margin:r(35) r(15) 0 r(15)
      color: #ebcd78;
      font-size:r(12.5);
      line-height:r(21)
      .state{
        font-size:r(15);
      }
    }

  }
  .topbox{
    width:100vw;
    display:flex;
    justify-content:center;
    .gotop{
      margin: auto;
      width: r(140);
      height: r(40);
      line-height: r(40);
      margin-top:r(20)
      text-align:center;
      color:#fff;
      font-size:r(15)
      border-radius: r(4);
      background-image: linear-gradient(to bottom, #fe5c5c, #d82c2c), linear-gradient(to bottom, #d8d8d8, #d8d8d8);
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
    width:r(300);
    height:auto
    position:relative;
    .back{
      width:100%;
      height:auto;
    }
    .num{
      font-size:r(16);
      color:rgb(255 236 187);
      position:absolute;
      width:100%;
      text-align:center;
      top:r(17)
    }
    .cons{
      font-size:r(16);
      color:rgb(169 33 2);
      position:absolute;
      width:80%;
      text-align:center;
      left:10%
      top:r(75)
      line-height:r(20)
    }

    .dele{
      width:100%;
      text-align:center
      img{
        width:r(34);
        height:auto;
      }
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
    width:r(200);
    height:auto
    position:relative;
    .back{
      width:100%;
      height:auto;
    }
    .num{
      font-size:r(16);
      color:rgb(250, 74, 5);
      position:absolute;
      width:100%;
      text-align:center;
      top:r(35)
    }
    .cons{
      font-size:r(16);
      color:#fff;
      position:absolute;
      width:90%;
      left:5%;
      text-align:center;
      top:r(115)
    }
    .dele{
      width:100%;
      text-align:center
      img{
        width:r(34);
        height:auto;
      }
    }
  }

}
.modeltable{
  position:absolute;
  width:90%;
  height:r(440);
  background:#fff;
  z-index:22;
  left:5%
  top:20%;
  .chief{
    width:100%;
    height:r(40);
    line-height:r(40)
    color:#fff;
    background:#e1544a;
    font-size:r(15)
    text-align:center;
  }
  .table{
    width:100%;
    background:#fff;
    height:r(400);
    overflow:auto
    // margin:r(5) 0;
    .header{
      display:flex;
      justify-content space-between
      height:r(40);
      line-height:r(40);
      div:nth-child(1){
        width:12%;
        text-align:center;
        color:#000;
        font-size:r(11);
      }
      div:nth-child(2){
        width:25%;
        text-align:center;
        color:#000;
        font-size:r(11);
      }
      div:nth-child(3){
        width:23%;
        text-align:center;
        color:#000;
        font-size:r(11);
      }
      div:nth-child(4){
        width:40%;
        text-align:center;
        color:#000;
        font-size:r(11);
      }
      .time{
        height:r(30)
        line-height:r(13)
        margin-top:r(8)
      }
    }

    .body{
      display:flex;
      justify-content space-between
      height:r(40);
      line-height:r(40);
      border-top:r(0.5) solid #ddd;
      div:nth-child(1){
        width:12%;
        text-align:center;
        color:000;;
        font-size:r(11);
      }
      div:nth-child(2){
        width:25%;
        text-align:center;
        color:000;;
        font-size:r(11);
      }
      div:nth-child(3){
        width:23%;
        text-align:center;
        color:000;;
        font-size:r(11);
      }
      div:nth-child(4){
        width:40%;
        text-align:center;
        color:000;;
        font-size:r(11);
      }
      .exceed{
        height:r(30);
        line-height: r(16);
        margin-top:r(5)
      }
      // .time{
      //   line-height:r(20)
      //   width:r(120)
      // }
    }

  }
  .dele{
    position:absolute;
    bottom:r(-40)
    width:r(34);
    height:auto;
    left:50%;
    margin-left:r(-17)
  }
}
/deep/ .el-progress-bar__outer{
  overflow:inherit !important;
}

.el-table{
    background-color: rgba(38, 38, 38, 0.75);
    border-radius: 9px;
  }
</style>
