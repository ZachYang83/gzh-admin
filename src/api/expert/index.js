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

    // 根据所属机构获取专家
    getByClass: (params) =>{
         return request({
            url: '/experts/experts-ai/getByClass',
            method: 'get',
            params
        })
    },

    //根据关键词获取专家
    getByKeywords: (params) =>{
         return request({
            url: '/experts/experts-ai/keywords',
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