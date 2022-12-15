<template>
  <div class="pc_container">
    <img class="banner" src="../../common/img/banner@2x.png" />

    <div class="receive">
      <img class="pos1" src="../../common/img/2-2@2x.png" />
      <img class="pos2" src="../../common/img/denglong.png" />
      <div class="rece_box">
        <div class="title">
          <img src="../../common/img/2-4@2x.png" />
          <div>领取记录</div>
        </div>
        <div class="row" v-for="item in cersivelist">
          <div class="left">
            <div>{{ item.label }}:</div>
            <div>今日完成次数：{{ item.num }}次</div>
          </div>
          <div class="right">
            <Progress
              :color="color"
              :text-inside="true"
              :stroke-width="10"
              :percentage="item.percent"
            ></Progress>
            <div class="total">{{ item.total }}VNDK</div>
          </div>
        </div>

        <div class="grand">
          <div class="all">累计已完成次数：36次 累计彩金：300VNDK</div>
          <div class="btn">
            <img src="../../common/img/4@2x.png" />
            <div>领取</div>
          </div>
        </div>
      </div>
    </div>

    <div class="center_box">
      <div class="people_box">
        <div class="one_box" v-for="item in 7">
          <img class="woman" src="../../common/img/1-2@2x.png" />
          <img class="follow" src="../../common/img/2@2x.png" />
        </div>
        <div class="one_box">
          <img class="woman" src="../../common/img/2-5@2x.png" />
          <div class="model">
            <div class="unlock">
              <!-- <div>解锁</div> -->
              <p>未解锁</p>
            </div>
          </div>
        </div>
      </div>
      <div class="total_price">
        <div class="row">
          <div class="left">
            <div>累计存款金额:</div>
            <div>今日完成次数：4次</div>
          </div>
          <div class="right">
            <Progress
              :color="color"
              :text-inside="true"
              :stroke-width="10"
              :percentage="20"
            ></Progress>
            <div class="total">876VNDK</div>
          </div>
        </div>
      </div>
      <div class="center_bot">
        <div class="raise">加码彩金：898977 VNDK</div>
        <div class="btn">
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
        </div>

        <div class="tips1">
          【活动内容】会员于2023.01.01-2023.01.05期间，完成以下任务即可获得【福禄双收跨新年】奖励。
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
            <div class="body" v-for="item in 3">
              <div>电子平台</div>
              <div>每月累计</div>
              <div>电子平台</div>
              <div>电子平台</div>
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
              <div>游戏平台</div>
              <div>任务</div>
              <div>任务彩金</div>
              <div>每日任务上限</div>
            </div>
            <div class="body" v-for="item in 3">
              <div>电子平台</div>
              <div>每月累计</div>
              <div>电子平台</div>
              <div>电子平台</div>
            </div>
          </div>
          <div class="til2">
            贴士：本主题投注任务每日00:00重置，当日若未达成任务，次日需重新累计有效投注以获得对应奖励。
          </div>
        </div>

        <div class="desc">
          【活动说明】<br />
          1.本优惠需会员在活动指定时间内进行点击领取彩金，超时即视为放弃该活动奖励。<br />
          2.本优惠成功领取后不能取消，所获彩金需在完成5倍流水(不含沙巴体育和彩票)即可提款。<br />
          3.本优惠所需存款和投注不与其他活动共享，可与返水活动共享。<br />
          4.本优惠仅对已结算并产生输赢结果的投注进行计算。所有拒绝投注，无效投注，打平，任何出现对押情况的投注及港赔≤0.7、欧赔≤1.7或其他对应赔率，串关投注将不计算在内。<br />
          5.本优惠遵循ManBetX万博【一般优惠规则与条款】。<br />
        </div>

        <div class="gotop">回到顶部</div>
      </div>
      <img class="bottom_img" src="../../common/img/invalid-name@2x.png" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Message, Progress } from "element-ui";
Vue.use(Message).use(Progress);

import { christmasInfo, christmasLottery } from "@/api";
export default {
  components: {
    Progress: Progress,
  },
  data() {
    return {
      isenv: "",
      color: "#eda567",
      cersivelist: [
        { label: "电子有效投注", num: 3, percent: 50, total: 120 },
        {
          label: "体育（不包含沙巴）/电竞平台",
          num: 3,
          percent: 80,
          total: 90,
        },
        { label: "真人/棋牌平台", num: 3, percent: 30, total: 100 },
      ],

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
      console.log(this.$i18n);
      this.$i18n.locale = lang;
      // await this.getinfo(uid);
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
      top:r2(500);
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
    .gotop{
       margin: auto;
      width: r2(280);
      height: r2(66);
      line-height: r2(66);
      text-align:center;
      color:#fff;
      font-size:r2(24)
      border-radius: r2(8);
      margin-top:r2(50)
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
                border-left:r2(7) solid transparent;
                border-right:r2(7) solid transparent;
                left:r2(84);
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
    height:r2(744);
    background-image: linear-gradient(to bottom, #fffbf1, #fff6df);
    position:relative;
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
      width:r2(276);
      height:r2(518);
    }
      .rece_box{
        width:r2(1200);
        margin:0 auto;
        // display:flex;
        align-self:center;
        vertical-align:middle
        .title{
          padding-top:r2(50);
          position:relative;
          width:r2(280);
          margin:0 auto;
          margin-bottom:r2(20);
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
            top:r2(50)
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
                border-left:r2(7) solid transparent;
                border-right:r2(7) solid transparent;
                left:r2(84);
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
          margin-top:r2(30);
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
/deep/ .el-progress-bar__outer{
  overflow:inherit !important;
}
</style>
