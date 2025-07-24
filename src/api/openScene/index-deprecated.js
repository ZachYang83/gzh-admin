import request from '@/utils/request.js'

export default{
    getListByClass: (params) => {// 获取任务列表
        return request({
            url: '/task_lead/task-lead/class',
            method: 'get',
            params
        })
    },

    getListByKeywords: (params) => {// 根据关键词获取任务列表
        return request({
            url: '/task_lead/task-lead/keywords',
            method: 'get',
            params
        })
    },

    getById: (params) => {
        return request({
            url: '/task_lead/task-lead/id',
            method: 'get',
            params
        })
    }




}
