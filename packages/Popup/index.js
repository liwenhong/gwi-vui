// 导入组件，组件必须声明 name
import GwiPopup from './src'

// 为组件提供 install 安装方法，供按需引入
GwiPopup.install = function (Vue) {
  Vue.component(GwiPopup.name, GwiPopup)
}

// 导出组件
export default GwiPopup