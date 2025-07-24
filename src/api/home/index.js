import request from "utils/request.js";

export default { 

    // 获取所有资源的数量
    getAll: (params) =>{
         return request({
            url: '/homePage/source/getAll',
            method: 'get',
            params
        })
    },

};