// 对api进行统一管理
import request from './request'
// 三级联动接口
export const reqCategoryList = ()=>{
    // 发请求
    return request({
        url:'/product/getBaseCategoryList',
        method: 'GET',
    })
}