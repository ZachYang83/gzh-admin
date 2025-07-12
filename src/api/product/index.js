import request from "utils/request.js";

export default { 

    //统计各类场景数量
    getAll: (params) => {
        return request({
            url: '/product/product-list/getAll',
            method: 'get',
            params
        })
    },

}