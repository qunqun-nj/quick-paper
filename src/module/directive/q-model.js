
// 用于数据双向绑定
// q-model="express"

import { bindEvent } from '../../tools/xhtml';
import { setValue } from '@hai2007/algorithm/value';

export default {
    inserted: function (el, binding) {
        el.value = binding.value;
        bindEvent(el, 'input', () => {
            setValue(binding.target, "." + binding.exp, el.value);
        });

    },
    update: function (el, binding) {
        el.value = binding.value;
    }
};
