// 导入组件，组件必须声明 name
import GwiButton from './src'

// 为组件提供 install 安装方法，供按需引入
GwiButton.install = function (Vue) {
  Vue.component(GwiButton.name, GwiButton)
}

// 导出组件
export default GwiButton