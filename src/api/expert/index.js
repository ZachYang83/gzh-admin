import request from "utils/request.js";

export default { 

    // 获取所有专家
    getAll: (params) =>{
         return request({
            url: '/experts/experts-ai/getAll',
            method: 'get',
            params
        })
    },

    // 多条件获取专家
    search: (params) =>{
         return request({
            url: '/experts/experts-ai/search',
            method: 'get',
            params
        })
    },


    //根据id获取专家信息
    getById: (params) =>{
         return request({
            url: '/experts/experts-ai/id',
            method: 'get',
            params
        })
    },

};