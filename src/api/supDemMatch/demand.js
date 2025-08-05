import request from "utils/request.js";

export default { 

    // 获取需方场景
    getAll: (params) =>{
         return request({
            url: '/supDemMatch/requirement-list/getAll',
            method: 'get',
            params
        })
    },
    search: (params) => {
        return request({
            url: '/supDemMatch/requirement-list/search',
            method: 'get',
            params
        })
    },
    getById: (params) => {
        return request({
            url: '/supDemMatch/requirement-list/id',
            method: 'get',
            params
        })
    },
};