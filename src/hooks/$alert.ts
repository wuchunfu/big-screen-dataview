import type { DefineComponent } from 'vue'

const $alert = Object.create(null)

$alert.install = function (Vue: DefineComponent) {

    Vue.mixin({
        methods: {
            $alert(msg, title, funPos) {

                msg = msg || "未知错误";

                this.$store.commit('openDialog', {
                    id: "warning",
                    initdata: ['$alert', msg, title || "温馨提示", "确定"],
                    callback: function () {
                        if (typeof funPos == 'function') funPos();
                    }
                });
            }
        }
    })
}

export default $alert




