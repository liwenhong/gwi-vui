// 导入组件，组件必须声明 name
import GwiToast from './src'

// 为组件提供 install 安装方法，供按需引入
GwiToast.install = function (Vue) {
  Vue.component(GwiToast.name, GwiToast)
}

// 导出组件
export default GwiToast