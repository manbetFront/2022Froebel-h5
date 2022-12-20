<template>
  <div class="pc_container">
    <img class="banner" src="../../common/img/banner@2x.png" />

    <div class="receive">
      <img class="pos1" src="../../common/img/2-2@2x.png" />
      <img class="pos2" src="../../common/img/hongdenglong.png" />
      <img class="pos3" src="../../common/img/hongdenglong.png" />

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

      <div class="rece_box">
        <div class="title">
          <img src="../../common/img/2-4@2x.png" />
          <div @click="getRecive">领取记录</div>
        </div>
        <div class="row" v-for="item in cersivelist">
          <div class="left">
            <div>{{ item.label }}:</div>
            <div>今日完成次数：{{ item.num }}次</div>
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
            累计已完成次数：{{ activityContent.total_number }}次
            <span
              >累计彩金：{{
                parseFloat(activityContent.lottery_money).toFixed(3)
              }}VNDK</span
            >
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
            class="follow"
            v-if="item.type == 1"
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
              累计存款金额：{{
                parseFloat(activityContent.amount_total).toFixed(3)
              }}VNDK
            </div>
            <div>已解锁人物：{{ activityContent.delock_count }}位</div>
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
      <img class="pos2" src="../../common/img/hongdenglong.png" />
      <img class="pos3" src="../../common/img/hongdenglong.png" />
      <div class="all_box">
        <div class="title">
          <img src="../../common/img/1@2x.png" />
          <div>活动内容</div>
          <img src="../../common/img/2-3@2x.png" />
        </div>
        <!-- <div class="rowinfo">
          <div class="row_one">
            <div>【活动时间】</div>
            <p>2023年01月09日 - 2023年02月08日</p>
          </div>
          <div class="row_one">
            <div>【活动对象】</div>
            <p>全体会员</p>
          </div>
          <div class="row_one">
            <div>【活动平台】</div>
            <p>指定平台</p>
          </div>
        </div> -->

        <div class="tips1">
          【活动内容】会员于2023.01.01-2023.01.06期间，完成以下任务即可获得【福禄双收跨新年】奖励。
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
            <div class="header">
              <div>解锁人物</div>
              <div>完成任务</div>
              <div>额外加码彩金</div>
            </div>
            <div class="body" v-for="item in table2">
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
      <img class="bottom_img" src="../../common/img/invalid-name@2x.png" />
      <div class="topbox">
        <div class="gotop" @click="backTop">回到顶部</div>
      </div>
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

      window.addEventListener("scroll", this.scrollToTop);
    }
  },

  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
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
          Message({ type: "success", message: "解锁成功" });
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

.pc_container{
  width:100vw;
  .banner{
    width:100%;
    height:auto;
    display:flex;
  }
  .activity_content{
    width:100vw;
    height:r2(1785);
    background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;
    .pos1{
      position:absolute;
      left:0;
      top:r2(700);
      width:r2(292);
      height:r2(343);
    }
    .pos2{
      position:absolute;
      right:0;
      top:r2(10);
      width:r2(276);
      height:r2(518);
    }
    .pos3{
      position:absolute;
      left:0;
      top:r2(10);
      width:r2(276);
      height:r2(518);
      transform:rotateY(180deg)
    }
    .all_box{
      width:r2(1200);
      margin:0 auto;
    }
    .title{
      display:flex;
      justify-content:center;
      padding-top:r2(60)
      img{
        width:r2(84.9);
        height:r2(43);
      }
      div{
        font-size: r2(42);
        font-weight: 500;
        color: #690a0a;
        margin:0 r2(15);
      }
    }
    .rowinfo{
      display:flex;
      justify-content:space-between;
      margin-top:r2(80);
      .row_one{
        width:33.3%
        text-align:center;
        color: #7e0000;
        div{
          font-size:r2(30)
          margin-bottom:r2(20)
        }
        p{
          font-size:r2(20)
        }
      }
    }

    .tips1{
      font-size: r2(24);
      color: #7e0000;
      margin-top:r2(40)
    }

    .box_table{
      margin-top:r2(80);
      .til{
        font-size: r2(22);
      color: #7e0000;
      }
      .table{
        background:#e1544a;
        margin:r2(15) 0;
        .header{
          display:flex;
          justify-content space-between
          height:r2(66);
          line-height:r2(66);
          div{
            width:25%;
            text-align:center;
            color:#fff;
            font-size:r2(24);
          }
        }
        .body{
          display:flex;
          justify-content space-between
          height:r2(66);
          line-height:r2(66);
          border-top:r2(1) solid #ffeb8b;
          div{
            width:25%;
            text-align:center;
            color:#ffeb8b;;
            font-size:r2(18);
          }
        }
      }
      .til2{
        color: #a91010;
        font-size:r2(20)
      }
    }
    .desc{
      margin-top:r2(60)
      color: #690a0a;
      font-size:r2(20);
      line-height:r2(40)
    }


    .bottom_img{
      width:100vw;
      height:auto;
      position:absolute;
      bottom:0
      left:0
    }
    .topbox{
      width:100vw;
      display:flex;
      justify-content:center;
    }
    .gotop{
      position:absolute;
       margin: auto;
       bottom:r2(230)
      width: r2(280);
      height: r2(66);
      line-height: r2(66);
      text-align:center;
      color:#fff;
      font-size:r2(24)
      border-radius: r2(8);
      background-image: linear-gradient(to bottom, #fe5c5c, #d82c2c), linear-gradient(to bottom, #d8d8d8, #d8d8d8);
    }
  }
  .center_box{
    background:#fff6df;
    width:100vw;
    height:r2(1087);
    background-image:url('../../common/img/bj-2@2x.png');
    background-repeat:no-repeat;
    background-size:cover;
    // display:flex;
    .people_box{
      width:r2(1200);
      margin:0 auto;
      align-self:center;
      vertical-align:middle;
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      padding-top:r2(70);
      .one_box{
        width:r2(284.2)
        height:r2(332.1);
        position:relative;
        margin-bottom:r(50);
        .woman{
          width:r2(284);
          height:auto;
        }
        .follow{
          position:absolute;
          top:0;
          left:0;
          width:r2(90.4)
          height:r2(61)
        }
        .model{
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          background:rgba(0,0,0,0.5)
          display:flex;
          justify-content:center;
          align-items:center;
          .unlock{
            width:100%;
            div{
              width: r2(138);
              height: r2(44);
              line-height: r2(44);
              border-radius: r2(4);
              box-shadow: 0 r2(2) r2(6) 0 rgba(119, 0, 0, 0.5);
              border: solid r2(1) #ffd599;
              background-image: linear-gradient(to bottom, #fe5c5c, #d82c2c);
              font-size:r2(26);
              color: #ffeeba;
              text-align:center;
              margin:0 auto;
            }
            p{
              text-align:center;
              font-size:r2(36);
              color:#fff;
            }
          }
        }
      }
    }
    .total_price{
      width:r2(1200);
      margin:0 auto;
      .row{
          width:100%;
          // background:#fdf0d2;
          color:#902828;
          font-size:r2(22);
          display:flex;
          justify-content:space-between;
          padding: r2(10) r2(15);
          margin-bottom:r2(25);
          .left{
            div{
              margin:r2(20) 0;
              color:#ffefb9
            }
          }
          .right{
            width:r2(710);
            position:relative;
            margin-right:r2(100);
            .el-progress{
              margin-top:r2(70);
            }
            .perct{
              // margin-top:r2(-65);
              width: r2(190);
              height: r2(44);
              line-height: r2(44);
              background-color: #fbedc9;
              color: #c53a3a;
              text-align center;
              position:absolute;
              left: r2(-0);
              top:r2(12)
              font-size:r2(18);
              &:after{
                position:absolute;
                content:'';
                border-top:r2(10) solid #fbedc9;
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
              border:r2(1) solid #ffd569;
              color:#ffe78b;
              // background: #fcdec2;
              font-size:r2(20);
              position:absolute;
              right:r2(-90);
              top:r2(12);

              &:before{
                position:absolute;
                content:'';
                border-top:r2(10) solid #ffe78b;
                border-left:r2(11) solid transparent;
                border-right:r2(11) solid transparent;
                left:r2(80);
                bottom: r2(-10);
              }
              &:after{
                position:absolute;
                content:'';
                border-top:r2(8) solid #c53a3a;
                border-left:r2(8) solid transparent;
                border-right:r2(8) solid transparent;
                left:r2(83.3);
                bottom: r2(-8);
              }
            }
            /deep/ .el-progress-bar__outer{
              position:relative;
              // overflow:none !important;
              background:#fbedc9;
              border:r2(1) solid #f89797;
            }
            /deep/ .el-progress-bar__innerText{
              margin-top:r2(-65);
              width: r2(160);
              height: r2(44);
              line-height: r2(44);
              background-color: #fbedc9;
              color: #c53a3a;
              text-align center;
              position:absolute;
              margin-left: r2(-80);
              font-size:r2(18);
              &:after{
                position:absolute;
                content:'';
                border-top:r2(10) solid #fbedc9;
                border-left:r2(11) solid transparent;
                border-right:r2(11) solid transparent;
                left:r2(75);
                bottom: r2(-10);
              }
            }
          }
      }
    }

    .center_bot{
      display:flex;
      width:r2(1200);
      margin:0 auto;
      .raise{
        width: r2(429);
        height: r2(61);
        line-height: r2(61);
        text-align:center;
        color: #c53a3a;
        // margin: r2(53) 125.9px 2px 18.2px;
        // padding: 16px 129px 17px 42px;
        border-radius: r2(31);
        box-shadow: 0 r2(2) r2(7) 0 rgba(84, 0, 0, 0.5);
        border: solid r2(1) #c71616;
        background-image: linear-gradient(92deg, #fdf7e6 2%, #e6cc8a 97%);
      }
      .btn{
        // position:relative;
        width:r2(260);
        height:r2(66);
        line-height:r2(66);
        background-image:url('../../common/img/3@2x.png');
        background-repeat:no-repeat;
        background-size:cover;
        text-align center
        color: #7e0000;
        font-size:r2(30)
        margin-left:r2(100);
      }
    }
  }
  .receive{
    width:100vw;
    height:r2(1004);
    background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;
    padding-top:r2(70)
    .pos1{
      position:absolute;
      left:0;
      bottom:r2(10);
      width:r2(292);
      height:r2(343);
    }
    .pos2{
      position:absolute;
      right:0;
      top:r2(10);
      width:r2(248);
      height:r2(443);
    }
    .pos3{
      position:absolute;
      left:0;
      top:r2(10);
      width:r2(248);
      height:r2(443);
      transform:rotateY(180deg)
    }
    .top_content{
      width:r2(1200);
      height:r2(166);
      margin:0 auto;
      background-image:url('../../common/img/invalid-name.png');
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
        margin-top:r2(45)
        div{
          font-size:r2(30)
          margin-bottom:r2(20)
        }
        p{
          font-size:r2(20)
          font-weight:400;
          // width:r(245)
        }
      }
  }
      .rece_box{
        width:r2(1200);
        margin:0 auto;
        // display:flex;
        align-self:center;
        vertical-align:middle
        .title{
          padding-top:r2(60);
          position:relative;
          width:r2(280);
          margin:0 auto;
          margin-bottom:r2(40);
          img{
            width:r2(280);
            height:auto;
          }
          div{
            width:r2(280);
            height:r2(66);
            text-align:center;
            line-height:r2(72);
            font-size:r2(36);
            color:#f6e8c2;
            position:absolute;
            left:0;
            top:r2(60)
          }
        }
        .row{
          width:100%;
          background:#fdf0d2;
          color:#902828;
          font-size:r2(22);
          display:flex;
          justify-content:space-between;
          padding: r2(10) r2(15);
          margin-bottom:r2(25);
          .left{
            div{
              margin:r2(20) 0;
            }
          }
          .right{
            width:r2(710);
            position:relative;
            margin-right:r2(100);
            .el-progress{
              margin-top:r2(70);
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
              top:r2(12);
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
              top:r2(12);

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
              background:#fbedc9;
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
        .grand{
          display:flex;
          justify-content:space-between;
          margin-top:r2(40);
          .all{
            font-size:r2(30);
            color: #ce0000;
            line-height:r2(66);
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
              line-height:r2(66);
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
  .modeltable{
  position:absolute;
  width:60%;
  // height:r(100);
  background:#fff;
  z-index:22;
  left:20%
  top:20%;
  .table{
    width:100%;
    height:100%;
    background:#e1544a;
    // margin:r(5) 0;
    .header{
      display:flex;
      justify-content space-between
      height:r2(60);
      line-height:r2(60);
      div{
        width:25%;
        text-align:center;
        color:#fff;
        font-size:r2(11);
      }
    }

    .body{
      display:flex;
      justify-content space-between
      height:r2(60);
      line-height:r2(60);
      border-top:r(1) solid #ffeb8b;
      div{
        width:25%;
        text-align:center;
        color:#ffeb8b;;
        font-size:r2(11);
      }
      .exceed{
        height:r2(30);
        line-height: r2(16);
        margin-top:r2(5)
      }
    }

  }
}
}

/deep/ .el-progress-bar__outer{
  overflow:inherit !important;
}
</style>
