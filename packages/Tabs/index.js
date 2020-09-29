// 导入组件，组件必须声明 name
import GwiTabs from './src'

// 为组件提供 install 安装方法，供按需引入
GwiTabs.install = function (Vue) {
  Vue.component(GwiTabs.name, GwiTabs)
}

// 导出组件
export default GwiTabs