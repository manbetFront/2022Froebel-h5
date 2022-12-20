<template>
  <div class="h5_container">
    <img class="banner" src="../../common/imgs/banner@2x.png" />
    <div class="top_box">
      <div class="top_content">
        <div class="row_one">
          <div>【活动时间】</div>
          <p>2023/01/01 - 2023/01/06</p>
        </div>
        <div class="row_one">
          <div>【活动对象】</div>
          <p>全体会员</p>
        </div>
        <div class="row_one">
          <div>【活动平台】</div>
          <p>指定平台</p>
        </div>
      </div>
    </div>

    <div class="receive">
      <img class="pos1" src="../../common/img/2-2@2x.png" />
      <img class="pos2" src="../../common/imgs/yun.png" />
      <img class="pos3" src="../../common/imgs/yun.png" />
      <div class="rece_box">
        <div class="title">
          <img src="../../common/img/2-4@2x.png" />
          <div @click="getRecive">领取记录</div>
        </div>
        <div class="row" v-for="item in cersivelist">
          <div class="left">
            <div>{{ item.label }}: 今日完成次数：{{ item.num }}次</div>
          </div>
          <div class="right">
            <Progress
              :show-text="false"
              :color="color"
              :text-inside="true"
              :stroke-width="10"
              :percentage="Number(item.percent / item.total) * 100"
            ></Progress>
            <div class="perc">
              {{ parseFloat(item.percent).toFixed(3) }}VNDK
            </div>
            <div class="total">{{ item.total }}VNDK</div>
          </div>
        </div>

        <div class="grand">
          <div class="all">
            <div class="num">
              累计已完成次数：<span>{{ activityContent.total_number }}次</span>
            </div>
            <div class="mon">
              累计彩金：<span
                >{{
                  parseFloat(activityContent.lottery_money).toFixed(3)
                }}VNDK</span
              >
            </div>
          </div>
          <div class="btn" @click="getcollet(1)">
            <img src="../../common/img/4@2x.png" />
            <div>领取</div>
          </div>
        </div>
      </div>
    </div>

    <div class="center_box">
      <div class="people_box">
        <div class="one_box" v-for="item in imglist">
          <img class="woman" :src="item.img" />
          <img
            v-if="item.type == 1"
            class="follow"
            src="../../common/img/2@2x.png"
          />
          <div class="model" v-else>
            <div class="unlock">
              <div v-if="item.type == 2" @click="deblock">解锁</div>
              <p v-if="item.type == 3">未解锁</p>
            </div>
          </div>
        </div>
      </div>
      <div class="total_price">
        <div class="row">
          <div class="left">
            <div>
              累计存款金额:
              {{ parseFloat(activityContent.amount_total).toFixed(3) }}VNDK
              <span>已解锁人物：{{ activityContent.delock_count }}位</span>
            </div>
          </div>
          <div class="right">
            <Progress
              :show-text="false"
              :color="color"
              :text-inside="true"
              :stroke-width="10"
              :percentage="Number(activityContent.amount_total / 3188) * 100"
            ></Progress>
            <div class="perct">
              {{ parseFloat(activityContent.amount_total).toFixed(3) }}VNDK
            </div>
            <div class="total">3188VNDK</div>
          </div>
        </div>
      </div>
      <div class="center_bot">
        <div class="raise">
          加码彩金：{{
            parseFloat(activityContent.plus_lottery_money).toFixed(3)
          }}
          VNDK
        </div>
        <div class="btn" @click="getcollet(2)">
          <!-- <img src="../../common/img/3@2x.png"/> -->
          <div>领取</div>
        </div>
      </div>
    </div>

    <div class="activity_content">
      <img class="pos1" src="../../common/img/2-2@2x.png" />
      <img class="pos2" src="../../common/img/denglong.png" />
      <div class="all_box">
        <div class="title">
          <img src="../../common/img/1@2x.png" />
          <div>活动内容</div>
          <img src="../../common/img/2-3@2x.png" />
        </div>
        <div class="rowinfo">
          <div class="row_one">
            <div>【活动平台】</div>
            <p class="more">
              会员于2023.01.01-2023.01.05期间，完成以下任务即可获得【福禄双收跨新年】奖励。
            </p>
          </div>
        </div>

        <div class="box_table">
          <div class="til">
            ① 每日完成以下投注任务即可获得对应任务彩金奖励。
          </div>
          <div class="table">
            <div class="header">
              <div>游戏平台</div>
              <div>任务</div>
              <div>任务彩金</div>
              <div>每日任务上限</div>
            </div>
            <div class="body" v-for="item in table1">
              <div class="exceed">{{ item.label }}</div>
              <div class="exceed">每日有效投放{{ item.task }}VNDK</div>
              <div>{{ item.handsel }}VNDK</div>
              <div>{{ item.limit }}</div>
            </div>
          </div>
          <div class="til2">
            贴士：本主题投注任务每日00:00重置，当日若未达成任务，次日需重新累计有效投注以获得对应奖励。
          </div>
        </div>

        <div class="box_table">
          <div class="til">
            ① 每日完成以下投注任务即可获得对应任务彩金奖励。
          </div>
          <div class="table">
            <div class="header three">
              <div>解锁人物</div>
              <div>完成任务</div>
              <div>额外加码彩金</div>
            </div>
            <div class="body three" v-for="item in table2">
              <div>{{ item.people }}位</div>
              <div>{{ item.task }}个</div>
              <div>{{ item.handsel }}VNDK</div>
            </div>
          </div>
          <div class="til2">
            贴士：本主题投注任务每日00:00重置，当日若未达成任务，次日需重新累计有效投注以获得对应奖励。
          </div>
        </div>

        <div class="desc">
          <div class="state">【活动说明】</div>
          1.本优惠需会员在活动指定时间内进行点击领取彩金，超时即视为放弃该活动奖励。<br />
          2.本优惠成功领取后不能取消，所获彩金需在完成5倍流水(不含沙巴体育和彩票)即可提款。<br />
          3.本优惠所需存款和投注不与其他活动共享，可与返水活动共享。<br />
          4.本优惠仅对已结算并产生输赢结果的投注进行计算。所有拒绝投注，无效投注，打平，任何出现对押情况的投注及港赔≤0.7、欧赔≤1.7或其他对应赔率，串关投注将不计算在内。<br />
          5.本优惠遵循ManBetX万博【一般优惠规则与条款】。<br />
        </div>
      </div>
      <div class="topbox">
        <div class="gotop" @click="backTop">回到顶部</div>
      </div>
      <img class="bottom_img" src="../../common/img/invalid-name@2x.png" />
    </div>

    <div v-show="dialogVisible" class="model-box">
      <div class="modelveng" @click="dialogVisible = false"></div>
      <div class="modeltable">
        <div class="table">
          <div class="header three">
            <div>序号</div>
            <div>单号</div>
            <div>彩金金额</div>
            <div class="time">领取时间</div>
          </div>
          <div class="body three" v-for="(item, i) in listdata">
            <div>{{ i + 1 }}</div>
            <div>{{ item.order_no }}</div>
            <div>{{ item.lottery_amount }}</div>
            <div class="time">{{ item.created_at }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Message, Progress, Dialog, Table, Loading } from "element-ui";
Vue.use(Message)
  .use(Progress)
  .use(Dialog)
  .use(Table)
  .use(Loading);

import { getReceiveList, cumulativeTheme, getMoneyAdd, getunlock } from "@/api";
export default {
  components: {
    Progress: Progress,
  },
  data() {
    return {
      dialogVisible: false,
      isenv: "",
      color: "#eda567",
      listdata: [],
      cersivelist: [],
      table1: [
        { label: "电子平台", task: 1500, handsel: 10, limit: 15 },
        {
          label: "体育/电竞平台(不含沙巴体育)",
          task: 2800,
          handsel: 28,
          limit: 18,
        },
        { label: "真人/棋牌平台", task: 3500, handsel: 35, limit: 20 },
      ],
      table2: [
        { people: 3, task: 15, handsel: 38 },
        { people: 5, task: 50, handsel: 108 },
        { people: 8, task: 100, handsel: 188 },
      ],

      uid: "",
      platform: "",
      lang: "",

      imglist: [],
      activityContent: {},
      user_id: 100336,

      loading: "",
    };
  },

  async mounted() {
    // 加载时显示loading
    this.loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
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
    this.getheme();

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
      const { uid, platform, lang } = params;
      this.uid = uid;
      this.platform = platform;
      this.lang = lang;
      sessionStorage.setItem("lang", lang);
      sessionStorage.setItem("platform", platform);
      this.$i18n.locale = lang;

      this.getinfo();
    }
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    // 解锁
    async deblock() {
      await getunlock({ user_id: this.user_id }).then((res) => {
        if (res.code == 200) {
          this.getheme();
          Message({ type: "success", message: "领取成功" });
        } else {
          Message({ type: "warning", message: res.msg });
        }
      });
    },
    // 领取彩金
    async getcollet(type) {
      let { lottery_money, total_number } = this.activityContent;
      let params = {
        user_id: this.user_id,
        lottery_amount: lottery_money,
        lottery_type: type == 1 ? "theme_one" : "theme_two",
        finish_count: total_number,
      };
      await getMoneyAdd(params).then((res) => {
        if (res.code == 200) {
          Message({ type: "success", message: "领取成功" });
        } else {
          Message({ type: "warning", message: res.msg });
        }
      });
    },
    // 关闭弹窗
    cancelmodel() {
      this.dialogVisible = false;
    },

    // 打开领奖记录
    getRecive() {
      this.dialogVisible = true;
    },
    // 领取记录
    async getinfo() {
      await getReceiveList({
        page_size: 10,
      }).then((res) => {
        this.listdata = res.data.list;
      });
    },

    // 主题
    async getheme() {
      let list = this.imglist;
      list = [
        { img: require("../../common/imgs/1@2x.png") },
        { img: require("../../common/imgs/2@2x.png") },
        { img: require("../../common/imgs/3@2x.png") },
        { img: require("../../common/imgs/4@2x.png") },
        { img: require("../../common/imgs/5@2x.png") },
        { img: require("../../common/imgs/6@2x.png") },
        { img: require("../../common/imgs/7@2x.png") },
        { img: require("../../common/imgs/8@2x.png") },
      ];
      await cumulativeTheme({ user_id: this.user_id, platform_id: 10002 }).then(
        (res) => {
          if (res.code == 200) {
            this.loading.close();
            let data = res.data;
            this.activityContent = data;
            this.cersivelist = [
              {
                label: "电子有效投注",
                num: data.jl_today_number,
                percent: data.wire_valid_bet_amount,
                total: 1500,
              },
              {
                label: "体育（不包含沙巴）/电竞平台",
                num: data.ai_today_number,
                percent: data.sport_valid_bet_amount,
                total: 2800,
              },
              {
                label: "真人/棋牌平台",
                num: data.ae_today_number,
                percent: data.really_valid_bet_amount,
                total: 3500,
              },
            ];

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
            this.$forceUpdate();
          } else {
            Message({ type: "warning", message: res.msg });
          }
        }
      );
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
  .banner{
    width:100%;
    height:auto;
    display:flex;
  }
  .top_box{
    background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    width:100vw;
    padding-top:r(20)
  }
  .top_content{
    width:r(360);
    height:r(82);
    margin:0 auto;
    background-image:url('../../common/imgs/invalidName.png');
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    justify-content:space-between;
    .row_one{
        // display:flex;
        text-align:center;
        color: #7e0000;
        width:33.3%
        color:rgb(246 232 194)
        margin-top:r(22)
        div{
          font-size:r(13)
          margin-bottom:r(12)
        }
        p{
          font-size:r(10)
          font-weight:400;
          // width:r(245)
        }
        .more{
          line-height:r(18)
          margin-top:r(-2)
        }
      }
  }
  .activity_content{
    width:100vw;
    height:r(970);
    background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;
    .pos1{
      position:absolute;
      left:0;
      top:r(0);
      width:r(37.5);
      height:auto;
    }
    .pos2{
      position:absolute;
      right:0;
      top:r(0);
      width:r(37.5);
      height:auto;
    }
    .all_box{
      // width:r2(1200);
      margin:0 auto;
    }
    .title{
      display:flex;
      justify-content:center;
      padding-top:r(35)
      img{
        width:r(42.5);
        height:r(21.5);
      }
      div{
        font-size: r(21);
        font-weight: 500;
        color: #690a0a;
        margin:0 r(8);
      }
    }
    .rowinfo{
      // display:flex;
      // justify-content:space-between;
      margin:r(25) r(15) 0 r(15);
      .row_one{
        display:flex;
        // text-align:center;
        color: #7e0000;
        div{
          font-size:r(14)
          margin-bottom:r(12)
          color:rgb(126 0 0)
        }
        p{
          font-size:r(13)
          font-weight:400;
          width:r(245)
        }
        .more{
          line-height:r(18)
          margin-top:r(-2)
        }
      }
    }

    .box_table{
      margin:r(20) r(15) 0 r(15);
      .til{
        font-size: r(12);
        color: #7e0000;
      }
      .table{
        background:#e1544a;
        margin:r(5) 0;
        .header{
          display:flex;
          justify-content space-between
          height:r(40);
          line-height:r(40);
          div{
            width:25%;
            text-align:center;
            color:#fff;
            font-size:r(11);
          }
        }

        .body{
          display:flex;
          justify-content space-between
          height:r(40);
          line-height:r(40);
          border-top:r(0.5) solid #ffeb8b;
          div{
            width:25%;
            text-align:center;
            color:#ffeb8b;;
            font-size:r(11);
          }
          .exceed{
            height:r(30);
            line-height: r(16);
            margin-top:r(5)
          }
        }
        .three{
          div{
            width:33.3%
          }
        }
      }
      .til2{
        color: #a91010;
        font-size:r(10)
        line-height:r(14)
      }
    }
    .desc{
      margin:r(20) r(15) 0 r(15)
      color: #690a0a;
      font-size:r(12.5);
      line-height:r(21)
      .state{
        font-size:r(15);
      }
    }

    .topbox{
      width:100vw;
      display:flex;
      justify-content:center;
    }
    .gotop{
      position:absolute;
       margin: auto;
       bottom:r(60)
      width: r(140);
      height: r(40);
      line-height: r(40);
      text-align:center;
      color:#fff;
      font-size:r(15)
      border-radius: r(4);
      background-image: linear-gradient(to bottom, #fe5c5c, #d82c2c), linear-gradient(to bottom, #d8d8d8, #d8d8d8);
    }

    .bottom_img{
      width:100vw;
      height:auto;
      position:absolute;
      bottom:0
      left:0
    }
  }
  .center_box{
    background:#fff6df;
    width:100vw;
    height:r(1001);
    background-image:url('../../common/imgs/invalid-name@2x.png');
    background-repeat:no-repeat;
    background-size:cover;
    // display:flex;
    .people_box{
      margin:0 auto;
      align-self:center;
      vertical-align:middle;
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      padding-top:r(30);
      margin-left:r(15);
      margin-right:r(15)
      .one_box{
        width:r(164.5)
        height:r(190);
        position:relative;
        margin-bottom:r(10);
        .woman{
          width:r(164.5);
          height:r(190);
          display:flex;
        }
        .follow{
          position:absolute;
          top:0;
          left:0;
          width:r(45.2)
          height:r(30.5)
        }
        .model{
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          background:rgba(73,0,0,0.7)
          display:flex;
          justify-content:center;
          align-items:center;
          .unlock{
            width:100%;
            div{
              width: r(80);
              height: r(26.5);
              line-height: r(26.5);
              border-radius: r(4);
              box-shadow: 0 r(2) r(3) 0 rgba(119, 0, 0, 0.5);
              border: solid r(0.5) #ffd599;
              background-image: linear-gradient(to bottom, #fe5c5c, #d82c2c);
              font-size:r(14);
              color: #ffeeba;
              text-align:center;
              margin:0 auto;
            }
            p{
              text-align:center;
              font-size:r(15);
              color:#fff;
            }
          }
        }
      }
    }
    .total_price{
      margin:0 auto;
      .row{
          width:100%;
          // background:#fdf0d2;
          color:#902828;
          font-size:r(12);
          // display:flex;
          // justify-content:space-between;
          padding: r(5) r(15);
          margin-bottom:r(12);
          .left{
            div{
              margin:r(10) 0;
              color:#ffefb9
              span{
                margin-left:r(20)
              }
            }
          }
          .right{
            width:100%;
            position:relative;
            margin-right:r(50);
            .el-progress{
              margin-top:r(49);
            }

            .perct{
              width: r(80);
              height: r(20);
              line-height: r(20);
              background-color: #fbedc9;
              color: #c53a3a;
              text-align center;
              position:absolute;
              left:0;
              bottom:r(20);
              font-size:r(11);
              &:after{
                position:absolute;
                content:'';
                border-top:r(6) solid #fbedc9;
                border-left:r(6) solid transparent;
                border-right:r(6) solid transparent;
                left:r(33);
                bottom: r(-5);
              }
            }

            .total{
              width:r(94);
              height:r(20);
              line-height:r(20);
              text-align:center;
              border:r(0.5) solid #ffd569;
              color:#ffe78b;
              // background: #fcdec2;
              font-size:r(11);
              position:absolute;
              right:r(0);
              bottom:r(20);

              &:before{
                position:absolute;
                content:'';
                border-top:r(6) solid #ffe78b;
                border-left:r(6) solid transparent;
                border-right:r(6) solid transparent;
                left:r(40);
                bottom: r(-6);
              }
              &:after{
                position:absolute;
                content:'';
                border-top:r(5) solid #c53a3a;
                border-left:r(4) solid transparent;
                border-right:r(4) solid transparent;
                left:r(42);
                bottom: r(-4.2);
              }
            }
            /deep/ .el-progress-bar__outer{
              position:relative;
              // overflow:none !important;
              background:#fbedc9;
              border:r(0.5) solid #f89797;
            }
            /deep/ .el-progress-bar__innerText{
              margin-top:r(-30);
              width: r(80);
              height: r(20);
              line-height: r(20);
              background-color: #fbedc9;
              color: #c53a3a;
              text-align center;
              position:absolute;
              left:0;
              font-size:r(11);
              &:after{
                position:absolute;
                content:'';
                border-top:r(6) solid #fbedc9;
                border-left:r(6) solid transparent;
                border-right:r(6) solid transparent;
                left:r(33);
                bottom: r(-5);
              }
            }
          }
      }
    }

    .center_bot{
      display:flex;
      justify-content:space-between;
      margin:0 auto;
      margin-left:r(15)
      margin-right:r(15)
      .raise{
        width: r(195);
        height: r(40);
        line-height: r(40);
        text-align:center;
        color: #c53a3a;
        font-size:r(13)
        // margin: r2(53) 125.9px 2px 18.2px;
        // padding: 16px 129px 17px 42px;
        border-radius: r(20);
        box-shadow: 0 r(1) r(3) 0 rgba(84, 0, 0, 0.5);
        border: solid r(1) #c71616;
        background-image: linear-gradient(92deg, #fdf7e6 2%, #e6cc8a 97%);
      }
      .btn{
        // position:relative;
        width:r(110);
        height:r(40);
        line-height:r(40);
        background-image:url('../../common/imgs/3-2@2x.png');
        background-repeat:no-repeat;
        background-size:cover;
        text-align center
        color: #7e0000;
        font-size:r(15)
        // margin-left:r(40);
      }
    }
  }
  .receive{
    width:100vw;
    height:r(500.5);
    background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;

    .pos1{
      position:absolute;
      left:0;
      bottom:0;
      width:r(54.9);
      height:r(64);
    }
    .pos2{
      position:absolute;
      right:0;
      top:r(10);
      left:0
      width:r(90.9);
      height:auto;
    }
    .pos3{
      position:absolute;
      right:0;
      top:r(60);
      right:0
      width:r(90.9);
      height:auto;
    }
      .rece_box{
        width:100%;
        margin:0 auto;
        // display:flex;
        align-self:center;
        vertical-align:middle
        .title{
          padding-top:r(30);
          position:relative;
          width:r(140);
          margin:0 auto;
          margin-bottom:r(10);
          img{
            width:r(140);
            height:auto;
          }
          div{
            width:r(140);
            height:r(40);
            text-align:center;
            line-height:r(40);
            font-size:r(18);
            color:#f6e8c2;
            position:absolute;
            left:0;
            top:r(28)
          }
        }
        .row{
          width:100%;
          background:#fdf0d2;
          color:#902828;
          font-size:r(12);
          // display:flex;
          // justify-content:space-between;
          padding: r(5) r(15) r(10) r(15);
          margin-bottom:r(12);
          .left{
            div{
              margin:r(10) 0;
            }
          }
          .right{
            width:100%;
            position:relative;
            // margin-right:r(50);
            .el-progress{
              margin-top:r(35);
            }
            .perc{
              width: r(80);
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
                left:r(32);
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
              background:#fbedc9;
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
        .grand{
          display:flex;
          justify-content:space-between;
          margin:0 r2(10);
          margin-top:r(15);

          .all{
            color: #ce0000;

            .num{
              font-size:r(14);
              color:rgb(144 40 40);
              margin-top:r(5)
              span{
                color:rgb(206 0 0);
              }
            }
            .mon{
              color:rgb(144 40 40);
              font-size:r(15);
              font-weight:600;
              margin-top:r(5)
              span{
                color:rgb(206 0 0);
              }
            }
          }
          .btn{
            position:relative;
            width:r(147);
            height:r(47);
            img{
              width:r(147);
              height:auto;
            }
            div{
              position:absolute;
              top:0;
              left:0;
              font-size:r(18);
              color: #f6e8c2;
              width:r(147);
              height:r(47);
              line-height:r(47);
              text-align:center;
            }
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
}
.modeltable{
  position:absolute;
  width:90%;
  // height:r(100);
  background:#fff;
  z-index:22;
  left:5%
  top:20%;
  .table{
    width:100%;
    height:100%;
    background:#e1544a;
    // margin:r(5) 0;
    .header{
      display:flex;
      justify-content space-between
      height:r(40);
      line-height:r(40);
      div{
        width:25%;
        text-align:center;
        color:#fff;
        font-size:r(11);
      }
      .time{
        width:r(120)
      }
    }

    .body{
      display:flex;
      justify-content space-between
      height:r(40);
      line-height:r(40);
      border-top:r(0.5) solid #ffeb8b;
      div{
        width:25%;
        text-align:center;
        color:#ffeb8b;;
        font-size:r(11);
      }
      .exceed{
        height:r(30);
        line-height: r(16);
        margin-top:r(5)
      }
      .time{
        line-height:r(20)
        width:r(120)
      }
    }

  }
}
/deep/ .el-progress-bar__outer{
  overflow:inherit !important;
}
</style>
