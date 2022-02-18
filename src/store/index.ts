import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {

            // 记录当前打开的交易
            dialogs: []
        }
    },
    mutations: {

        // 打开弹框
        openDialog(state: any, args) {
            if (typeof args.callback == 'boolean') {
                args.noShade = args.callback;
                args.callback = undefined;
            }

            state.dialogs.push({
                id: args.id,
                data: args.initdata,
                callback: args.callback,
                shade: args.noShade || false
            });
        },

        // 关闭弹框
        closeDialog(state: any, args) {
            // 从数组中删除即可关闭
            let will_close_dialog = state.dialogs.pop();

            // 如果有回调，回调
            if (typeof will_close_dialog.callback === "function") {
                will_close_dialog.callback(args);
            }
        }
    }
})

export default store
