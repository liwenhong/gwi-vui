const pkg =require('../../package.json')
module.exports = {
  title: pkg.name,
  description: 'gwi移动组件库',
  base: '/gwi-ui/',
  head: [
    ['link', { rel: 'icon', href: './images/logo_big.png' }]
  ],
  themeConfig: {
    nav: [
        { text: '主页', link: '/' },
        { text: '简介', link: '/guide/introduction' },
        { text: '测试', link: '/lib/test' },
      ],
    sidebar:{
        '/guide/':[
          {
            title:'简介',
            collapsable: false,
            children: [
              {
                title:'介绍',
                path: 'introduction',
                collapsable: false,
              },
              {
                title:'基础组件',
                path: 'test',
                collapsable: false,
              }
            ]
          }
        ],
         '/lib/':[
          {
            title:'测试',
            collapsable: false,
            children: [
              {
                title:'使用说明',
                path: 'test',
                collapsable: false,
              }
            ]
          }
        ]
      },
    sidebarDepth: 1
  },
  plugins: [
      // 回到顶部
      '@vuepress/back-to-top',

      // 放大
      ['@vuepress/medium-zoom',{selector: 'img'}]
   ]
}
