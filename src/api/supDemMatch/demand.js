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
};