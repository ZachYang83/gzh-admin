import request from "utils/request.js";

export default { 

    //统计各类场景数量
    getCaseCount: (params) => {
        return request({
            url: '/scene/scene-case/getCaseCount',
            method: 'get',
            params
        })
    },

    // 获取场景
    getCase: (params) =>{
         return request({
            url: '/scene/scene-case/getCase',
            method: 'get',
            params
        })
    }
};