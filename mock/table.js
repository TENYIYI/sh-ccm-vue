import Mock from 'mockjs'

const data = Mock.mock({
  'items|20': [{
    id: '@id',
    // title: '@sentence(10, 20)',
    title: '冒充情报人员招摇撞骗 将对冒充者依法追责(APP)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '解放日报',
    display_time: '@datetime',
    pageviews: '关闭此结果'
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
