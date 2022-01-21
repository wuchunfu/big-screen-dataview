import type { DefineComponent } from 'vue'

const $remote = Object.create(null)

let xhrObj = (method: "GET" | "POST", url: string, data?: any) => {
    return new Promise((resolve, reject) => {
        require('@hai2007/xhr')({

            method, // 请求方法
            url, // 请求地址
            data, // 请求数据，可选
            header: {}, // 请求头，可选
            timeout: 6000, // 请求超时时间，可选

        }, function (data) {

            // 成功回调
            resolve(data)

        }, function (error) {

            // 错误回调
            reject(error)

        })
    })
}

$remote.install = function (Vue: DefineComponent) {

    Vue.mixin({
        methods: {
            $get(url) {
                return xhrObj('GET', url)
            }
        }
    })
}

export default $remote


