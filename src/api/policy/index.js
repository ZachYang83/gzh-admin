import request from "utils/request.js";

export default { 

    // 获取所有政策
    getAll: (params) =>{
         return request({
            url: '/policy/policy-ai/getAll',
            method: 'get',
            params
        })
    },

    // 多条件获取政策
    search: (params) =>{
         return request({
            url: '/policy/policy-ai/search',
            method: 'get',
            params
        })
    },

};