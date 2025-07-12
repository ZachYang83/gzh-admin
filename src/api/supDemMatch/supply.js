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
};