export default (date) => {
    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " 星期" + ["天", "一", "二", "三", "四", "五", "六"][date.getDay()]
}
