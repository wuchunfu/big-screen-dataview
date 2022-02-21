import type { DefineComponent } from 'vue'

const $confirm = Object.create(null)

$confirm.install = function (Vue: DefineComponent) {

    Vue.mixin({
        methods: {
            $confirm(title, msg, actionPos, actionNeg, mesPos, mesNeg) {

                if (!title || !msg || typeof actionPos !== 'function') throw Error("确认回调为必传参数！");

                this.$store.commit('openDialog', {
                    id: "warning",
                    initdata: ['confirm', msg, title, mesPos || "确定", mesNeg || "取消"],
                    callback: function (msg) {
                        if (msg == 'yes') actionPos();
                        else if (msg == 'no' && typeof actionNeg == 'function') actionNeg();
                    }
                });
            }
        }
    })
}

export default $confirm




