// home仓库

import {reqCategoryList} from '@/api'
const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const action = {
    async categoryList(commit){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    }
}
const getters = {}

export default {
    state,mutations,action,getters
}