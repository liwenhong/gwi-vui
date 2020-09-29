// 导入组件，组件必须声明 name
import GwiIcon from './src'

// 为组件提供 install 安装方法，供按需引入
GwiIcon.install = function (Vue) {
  Vue.component(GwiIcon.name, GwiIcon)
}

// 导出组件
export default GwiIcon