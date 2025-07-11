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
    getAll: (params) =>{
         return request({
            url: '/scene/scene-case/getAll',
            method: 'get',
            params
        })
    },

    // 根据id获取场景
    getCaseById:(params)=>{
        return request({
            url: '/scene/scene-case/id',
            method: 'get',
            params
        })
    },

    //根据类型获取对应的场景列表-分页
    getByClass:(params)=>{
        return request({
            url: '/scene/scene-case/getByClass',
            method: 'get',
            params
        })
    },
};