import service from "./service";
// 领取记录
export const getReceiveList = (params) => {
  return service({
    method: "get",
    url: "/api/front/red_envelope/record",
    params: {
      ...params,
    },
  });
};

// 抽红包雨
export const getMoneyAdd = (data) => {
  return service({
    method: "post",
    url: "/api/front/red_envelope/rain",
    data,
  });
};

// 活动主题
export const cumulativeTheme = (params) => {
  return service({
    method: "get",
    url: "/api/front/activity/user_data",
    // url: "api/new_year/theme_one/list",
    params: { ...params },
  });
};

// 领取新年红包
export const getnewyearRed = (data) => {
  return service({
    method: "post",
    url: "/api/front/red_envelope/receive",
    data,
  });
};
// 领取额外红包
export const getextraRed = (data) => {
  return service({
    method: "post",
    url: "/api/front/red_envelope/extra",
    data,
  });
};

// 获取投注进度
export const getbetprogress = (params) => {
  return service({
    method: "get",
    url: "/api/front/activity/bet_progress",
    params: { ...params },
  });
};
