// 导入组件，组件必须声明 name
import GwiMask from './src'

// 为组件提供 install 安装方法，供按需引入
GwiMask.install = function (Vue) {
  Vue.component(GwiMask.name, GwiMask)
}

// 导出组件
export default GwiMask