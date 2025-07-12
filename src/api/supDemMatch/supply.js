import request from "utils/request.js";

export default { 

    // 获取所有供方场景
    getAll: (params) =>{
         return request({
            url: '/supDemMatch/supply-list/getAll',
            method: 'get',
            params
        })
    },
    getByClass: (params) => {
        return request({
            url: '/supDemMatch/supply-list/getByClass',
            method: 'get',
            params
        })
    },
    getById: (params) => {
        return request({
            url: '/supDemMatch/supply-list/id',
            method: 'get',
            params
        })
    },
    getByKeywords: (params) => {
        return request({
            url: '/supDemMatch/supply-list/keywords',
            method: 'get',
            params
        })
    }
};