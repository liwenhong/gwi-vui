// 导入组件，组件必须声明 name
import GwiModal from './src'

// 为组件提供 install 安装方法，供按需引入
GwiModal.install = function (Vue) {
  Vue.component(GwiModal.name, GwiModal)
}

// 导出组件
export default GwiModal