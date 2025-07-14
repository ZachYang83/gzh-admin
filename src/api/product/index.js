import request from "utils/request.js";

export default {
  //统计各类所有终端产品
  getAll: (params) => {
    return request({
      url: "/product/product-list/getAll",
      method: "get",
      params,
    });
  },

  getByClass: (params) => {
    return request({
      url: "/product/product-list/getByClass",
      method: "get",
      params,
    });
  },
  getById: (params) => {
    return request({
      url: "/product/product-list/id",
      method: "get",
      params,
    });
  },
  getByKeywords: (params) => {
    return request({
      url: "/product/product-list/keywords",
      method: "get",
      params,
    });
  },
};
