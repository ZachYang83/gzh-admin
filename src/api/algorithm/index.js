import request from "utils/request.js";

export default {
  //统计各类所有终端产品
  search: (params) => {
    return request({
      url: "/algorithms/algorithms/search",
      method: "get",
      params,
    });
  },
  getById: (params) => {
    return request({
      url: "/algorithms/algorithms/id",
      method: "get",
      params,
    });
  },
  getByCompanyName: (params) => {
    return request({
      url: "/algorithms/algorithms/algorithms",
      method: "get",
      params,
    });
  }
};
