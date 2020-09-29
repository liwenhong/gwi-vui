// 导入组件，组件必须声明 name
import GwiLoading from './src'

// 为组件提供 install 安装方法，供按需引入
GwiLoading.install = function (Vue) {
  Vue.component(GwiLoading.name, GwiLoading)
}

// 导出组件
export default GwiLoading