import test from './test.js'
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
export function type2icon(type = 'success', fill = false) {
	// 如果非预置值,默认为success
	if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
	let iconName = '';
	// 目前info和primary使用同一个图标
	switch (type) {
		case 'primary':
			iconName = 'info-circle';
			break;
		case 'info':
			iconName = 'info-circle';
			break;
		case 'error':
			iconName = 'close-circle';
			break;
		case 'warning':
			iconName = 'error-circle';
			break;
		case 'success':
			iconName = 'checkmark-circle';
			break;
		default:
			iconName = 'checkmark-circle';
	}
	// 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
	if (fill) iconName += '-fill';
	return iconName;
}

// 深度克隆
export function deepClone (obj) {
	// 对常见的“非”值，直接返回原来值
	if([null, undefined, NaN, false].includes(obj)) return obj;
    if(typeof obj !== "object" && typeof obj !== 'function') {
		//原始类型直接返回
        return obj;
    }
    var o = test.array(obj) ? [] : {};
    for(let i in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if(obj.hasOwnProperty(i)){
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }
    return o;
}

// JS对象深度合并
export function deepMerge(target = {}, source = {}) {
	target = deepClone(target);
	if (typeof target !== 'object' || typeof source !== 'object') return false;
	for (var prop in source) {
		if (!source.hasOwnProperty(prop)) continue;
		if (prop in target) {
			if (typeof target[prop] !== 'object') {
				target[prop] = source[prop];
			} else {
				if (typeof source[prop] !== 'object') {
					target[prop] = source[prop];
				} else {
					if (target[prop].concat && source[prop].concat) {
						target[prop] = target[prop].concat(source[prop]);
					} else {
						target[prop] = deepMerge(target[prop], source[prop]);
					}
				}
			}
		} else {
			target[prop] = source[prop];
		}
	}
	return target;
}