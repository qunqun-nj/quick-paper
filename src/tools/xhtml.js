
// 替换DOM

export function replaceDom(oldEl, newEl) {
    oldEl.parentNode.replaceChild(newEl, oldEl);
};

// 绑定事件

export function bindEvent(dom, eventType, callback) {

    if (window.attachEvent) {
        dom.attachEvent("on" + eventType, callback); // 后绑定的先执行
    } else {
        dom.addEventListener(eventType, callback, false);// 捕获
    }

};

// 解除绑定

export function unbindEvent(dom, eventType, handler) {
    if (window.detachEvent) {
        dom.detachEvent("on" + eventType, handler);
    } else {
        dom.removeEventListener(eventType, handler, false);// 捕获
    }

};

// 阻止冒泡

export function stopPropagation(event) {
    event = event || window.event;
    if (event.stopPropagation) { //这是其他非IE浏览器
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};

// 阻止默认事件

export function preventDefault(event) {
    event = event || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};
