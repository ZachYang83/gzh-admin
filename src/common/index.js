/*
 * 模块 : 系统通用操作
 * 作者 : 罗永梅（381612175@qq.com）
 * 日期 : 2020-06-01
 * 版本 : version 1.0
 */
import { computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessageBox } from "element-plus";

// 返回一组实用函数
export default function useCommon() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const pageLoading = computed(() => store.getters.pageLoading);
    /**
     * 设置页面加载Loading
     *
     * @param {String} val 加载值
     */
    function setPageLoading(val) {
        store.dispatch("app/setPageLoading", val);
    }
    /**
     * 显示开发提示框
     */
    function showDevMessage() {
        ElMessageBox.alert("功能建设中，敬请期待", "温馨提示", {
            confirmButtonText: "确定",
        });
    }
    /**
     * 返回上一页
     */
    function goBack() {
        router.go(-1);
    }
    /**
     * 跳转页面路径
     * 
     * @param {String} path 路径
     */
    function toPage(path) {
        if (!path) return;
        router.push({ path });
    }
    /**
     * 修改配置
     * 
     * @param {*} key 键
     * @param {*} value 值
     */
    function changeSettings(key, value) {
        store.dispatch("settings/changeSetting", { key, value });
    }

    return {
        route,
        router,
        store,
        pageLoading,
        setPageLoading,
        showDevMessage,
        goBack,
        toPage,
        changeSettings,
    };
}