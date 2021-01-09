
import { bindEvent, unbindEvent, stopPropagation, preventDefault } from '../../tools/xhtml';
import { evalExpress } from '@hai2007/algorithm/value';

/**
 * [可以使用的修饰符]
 * .prevent 阻止默认事件
 * .stop    阻止冒泡
 * .once    只执行一次
 */
export default {
    inserted: function (el, binding) {

        let types = binding.type.split('.'), modifier = {

            "prevent": false,
            "stop": false,
            "once": false

        }, callback = function (event) {

            if (modifier.stop) stopPropagation(event);
            if (modifier.prevent) preventDefault(event);

            let exps = /^([^(]+)(\([^)]{0,}\)){0,1}/.exec(binding.exp), params = [], oralParams = [];

            if (exps[2]) {

                // 获取原始的数据
                let temp = exps[2].replace(/^\(/, '').replace(/\)$/, '').trim();
                if (temp.length > 0) {
                    oralParams = temp.split(',')
                }
            }

            // 解析
            for (let i = 0; i < oralParams.length; i++) {
                let param = oralParams[i];
                param = evalExpress(binding.target, param);
                params.push(param);
            }

            // 追加事件event
            params.push(event);

            binding.target[exps[1]].apply(binding.target, params);

            if (modifier.once) {
                unbindEvent(el, types[0], callback);
            }

        };

        for (let i = 1; i < types.length; i++) {
            modifier[types[i]] = true;
        }

        bindEvent(el, types[0], callback);
    }
};
