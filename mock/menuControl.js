
const menuList = [
  {
    id: 81,
    projectId: 3,
    parentId: null,
    menuType: "menu",
    menuPic: null,
    menuName: "推广总览",
    sort: 0,
    dynamicSign: false,
    status: true,
    api: "null",
    url: "http://192.168.2.39/promote/#/home/promotionOverview",
    sign: "promoteOverview",
    children: [],
    createTime: "2020-04-15 15:12:01",
    operate:['新增','修改','删除']
  },
  {
    id: 68,
    projectId: 3,
    parentId: null,
    menuType: "directory",
    menuPic: null,
    menuName: "库存品牌",
    sort: 2,
    dynamicSign: true,
    status: true,
    api: "http://192.168.2.39/promote/api/callAPI/promote/shopBrand/selBrands/",
    url: "http://192.168.2.39/promote//home/promotionOverview",
    sign: "promoteOverview",
    children: [],
    createTime: "2020-04-09 17:03:22",
    operate:['新增','修改','删除']
  },
  {
    id: 69,
    projectId: 3,
    parentId: null,
    menuType: "menu",
    menuPic: null,
    menuName: "报表下载",
    sort: 3,
    dynamicSign: true,
    status: true,
    api: "http://192.168.2.39/promote/api/callAPI/promote/shopBrand/selBrands/",
    url: "http://192.168.2.39/promote/#/home/download/reportDownload",
    sign: "promoteDownload",
    children: [],
    createTime: "2020-04-09 17:03:59",
    operate:['新增','修改','删除']
  },
  {
    id: 87,
    projectId: 3,
    parentId: null,
    menuType: "directory",
    menuPic: null,
    menuName: "权限管理",
    sort: 8,
    dynamicSign: false,
    status: true,
    api: "",
    url: "",
    sign: "",
    children: [
      {
        id: 91,
        projectId: 3,
        parentId: 87,
        menuType: "menu",
        menuPic: null,
        menuName: "角色信息",
        sort: 1,
        dynamicSign: false,
        status: true,
        api: "null",
        url: "/roleContro",
        sign: "roleContro",
        children: [],
        createTime: "2020-04-16 16:49:55",
        operate:['新增','修改','删除']
      },
      {
        id: 88,
        projectId: 3,
        parentId: 87,
        menuType: "menu",
        menuPic: null,
        menuName: "菜单设置",
        sort: 5,
        dynamicSign: false,
        status: true,
        api: null,
        url: "/menuControl",
        sign: "menuControl",
        children: [],
        createTime: "2020-04-16 16:48:08",
        operate:['新增','修改','删除']
      },
      {
        id: 89,
        projectId: 3,
        parentId: 87,
        menuType: "menu",
        menuPic: null,
        menuName: "用户列表",
        sort: 7,
        dynamicSign: false,
        status: true,
        api: null,
        url: "/userList",
        sign: "userList",
        children: [],
        createTime: "2020-04-16 16:48:37",
        operate:['新增','修改','删除']
      }
    ],
    createTime: "2020-04-16 16:47:25"
  },
  {
    id: 96,
    projectId: 3,
    parentId: null,
    menuType: "directory",
    menuPic: null,
    menuName: "测试",
    sort: 9,
    dynamicSign: true,
    status: true,
    api: "null",
    url: "null",
    sign: "null",
    children: [
      {
        id: 101,
        projectId: 3,
        parentId: 96,
        menuType: "menu",
        menuPic: null,
        menuName: "111",
        sort: 25,
        dynamicSign: null,
        status: true,
        api: null,
        url: "11111",
        sign: "2222",
        children: [],
        createTime: "2020-04-17 04:55:02",
        operate:['新增','修改','删除']
      },
      {
        id: 97,
        projectId: 3,
        parentId: 96,
        menuType: "menu",
        menuPic: null,
        menuName: "测试111",
        sort: 33,
        dynamicSign: false,
        status: true,
        api: "null",
        url: "192.168.2.39",
        sign: "二",
        children: [],
        createTime: "2020-04-16 17:52:19",
        operate:['新增','修改','删除']
      }
    ],
    createTime: "2020-04-16 17:51:24",
    operate:['新增','修改','删除']
  }
]



export default [
  // get getRouters
  {
    url: '/menu/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: menuList
      }
    }
  },
]
