import service from "./service";
// 中奖记录
// export const getPrizelogs = (data) => {
//   return service({
//     method: "post",
//     url: process.env.VUE_APP_LOG_API + "/front/activity/christmas_lottery/info",
//     data,
//   });
// };

// 圣诞-获取奖品信息1
export const christmasInfo = (params) => {
  return service({
    method: "get",
    url: "/front/activity/christmas_lottery/info",
    params: {
      ...params,
    },
  });
};

// 圣诞-用户抽奖信息2
export const christmasLottery = (params) => {
  return service({
    method: "get",
    url: "/front/activity/christmas_lottery/draw",
    params: { ...params },
  });
};

// 金蛋-获取奖品信息1
export const goldeggInfo = (params) => {
  return service({
    method: "get",
    url: "/front/activity/christmas_jindan/info",
    params: { ...params },
  });
};

// 金蛋-用户抽奖信息2
export const goldeggLottery = (params) => {
  return service({
    method: "get",
    url: "/front/activity/christmas_jindan/draw",
    params: { ...params },
  });
};
