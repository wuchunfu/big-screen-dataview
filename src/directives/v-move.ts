/**
 * 拖拽弹框
 * 用法：v-move,取消拖拽：v-move:colse
 */

import xhtml from '@hai2007/browser/xhtml';

export default {
    mounted(el, binding) {

        //取消拖拽
        if (binding.arg == 'close') return;
        //绑定鼠标左键按下事件
        xhtml.bind(el, 'mousedown', function mousedown(event) {

            //解决浏览器全选无法拖拽弹框
            el.setCapture && el.setCapture();

            // 目前寻找的是view
            while (el.parentNode && el.getAttribute('defType') != 'dialogFrame') {
                el = el.parentNode;
            }

            let lf = event.clientX;
            let tp = event.clientY;

            let left = (xhtml.getStyle(el, 'left')).replace('px', '');
            let top = (xhtml.getStyle(el, 'top')).replace('px', '');

            //绑定鼠标移动事件
            function mousemove(event) {
                el.style.left = left - - event.clientX - lf + 'px';
                el.style.top = top - - event.clientY - tp + 'px';
            }
            xhtml.bind(document, 'mousemove', mousemove);

            //绑定鼠标松开事件,清除鼠标移动绑定
            xhtml.bind(document, 'mouseup', function (event) {
                xhtml.unbind(document, 'mousemove', mousemove);
                el.releaseCapture && el.releaseCapture();
                return false;
            });
        });

    }
};
