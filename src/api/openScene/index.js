import request from "utils/request.js";

export default { 

    //统计各类场景数量
    getCaseCount: (params) => {
        return request({
            url: '/scene/scene-guozi/getCaseCount',
            method: 'get',
            params
        })
    },

    // 获取场景
    getAll: (params) =>{
         return request({
            url: '/scene/scene-guozi/getAll',
            method: 'get',
            params
        })
    },

    // 根据id获取场景
    getCaseById:(params)=>{
        return request({
            url: '/scene/scene-guozi/id',
            method: 'get',
            params
        })
    },

    search:(params)=>{
        return request({
            url: '/scene/scene-guozi/search',
            method: 'get',
            params
        })
    },
};