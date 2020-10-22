const asyncRoutes = [

  // {
  //   path: '/ffff',
  //   name: 'placeHolder',
  //   component: 'Layout',
  //   children: [
  //     {
  //       path: 'placeHolder',
  //       component: 'placeHolder',
  //       name: 'placeHolder',
  //       meta: { title: '占位符', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },


  // 生死簿
  {
    name: "Obituary",
    path: '/Obituary',
    component: 'Layout',
    meta: { title: "生死簿", icon: "system" },
    children: [
      {
        name: "Living",
        path: "/Living",
        hidden: false,
        component: 'sheolRealms/Obituary/Living',
        meta: { title: "生簿", icon: "peoples" },
      },
      {
        name: "Death",
        path: "/Death",
        hidden: false,
        component: 'sheolRealms/Obituary/Death',
        meta: { title: "死簿", icon: "peoples" },
      },
      {
        name: 'Detail',
        path: '/Detail',
        hidden: true,
        component: 'sheolRealms/Obituary/Detail',
        meta: { title: '用户详情', icon: 'peoples' }
      },
      {
        name: 'PreviousRecord',
        path: '/PreviousRecord',
        hidden: true,
        component: 'sheolRealms/Obituary/PreviousRecord',
        meta: { title: '前世记录', icon: 'peoples' }
      },
    ]
  },

  //勾魂管理
  {
    name: "Enchantment",
    path: '/Enchantment',
    component: 'Layout',
    meta: { title: "勾魂管理", icon: "system" },
    children: [
      {
        name: "YetEnchantment",
        path: "/YetEnchantment",
        hidden: false,
        component: 'sheolRealms/Enchantment/YetEnchantment',
        meta: { title: "未勾魂", icon: "peoples" },
      },
      {
        name: "AlreadyDistribute",
        path: "/AlreadyDistribute",
        hidden: false,
        component: 'sheolRealms/Enchantment/AlreadyDistribute',
        meta: { title: "已分配", icon: "peoples" },
      },
      {
        name: 'AlreadyEnchantment',
        path: '/AlreadyEnchantment',
        hidden: false,
        component: 'sheolRealms/Enchantment/AlreadyEnchantment',
        meta: { title: '已勾魂', icon: 'peoples' }
      },
      {
        name: 'AlreadyCheckBack',
        path: '/AlreadyCheckBack',
        hidden: false,
        component: 'sheolRealms/Enchantment/AlreadyCheckBack',
        meta: { title: '已退单', icon: 'peoples' }
      },
    ]
  },

  //审判断案
  {
    name: "Trial",
    path: '/Trial',
    component: 'Layout',
    meta: { title: "审判断案", icon: "system" },
    children: [
      {
        name: "YetTrial",
        path: "/YetTrial",
        hidden: false,
        component: 'sheolRealms/Trial/YetTrial',
        meta: { title: "待审判", icon: "peoples" },
      },
      {
        name: "AlreadyTrial",
        path: "/AlreadyTrial",
        hidden: false,
        component: 'sheolRealms/Trial/AlreadyTrial',
        meta: { title: "已审判", icon: "peoples" },
      }
    ]
  },

  //十八层地狱
  {
    name: "Eighteen",
    path: '/Eighteen',
    component: 'Layout',
    meta: { title: "十八层地狱", icon: "system" },
    children: [
      {
        name: "EighteenScene",
        path: "/EighteenScene",
        hidden: false,
        component: 'sheolRealms/Eighteen/EighteenScene',
        meta: { title: "受刑现场", icon: "peoples" },
      },
      {
        name: "EighteenRecord",
        path: "/EighteenRecord",
        hidden: false,
        component: 'sheolRealms/Eighteen/EighteenRecord',
        meta: { title: "刑法记录", icon: "peoples" },
      }
    ]
  },

  //孟婆汤
  {
    name: "Mengpo",
    path: '/Mengpo',
    component: 'Layout',
    meta: { title: "孟婆汤", icon: "system" },
    children: [
      {
        name: "MengpoSoup",
        path: "/MengpoSoup",
        hidden: false,
        component: 'sheolRealms/MengpoSoup',
        meta: { title: "孟婆汤", icon: "peoples" },
      }
    ]
  },

  //六道轮回
  {
    name: "Reincarnation",
    path: '/Reincarnation',
    component: 'Layout',
    meta: { title: "六道轮回", icon: "system" },
    children: [
      {
        name: "ReincarnationStart",
        path: "/ReincarnationStart",
        hidden: false,
        component: 'sheolRealms/Reincarnation/ReincarnationStart',
        meta: { title: "开始轮回", icon: "peoples" },
      },
      {
        name: "ReincarnationRecord",
        path: "/ReincarnationRecord",
        hidden: false,
        component: 'sheolRealms/Reincarnation/ReincarnationRecord',
        meta: { title: "轮回记录", icon: "peoples" },
      }
    ]
  },

    //瘟疫管理
    {
      name: "Plague",
      path: '/Plague',
      component: 'Layout',
      meta: { title: "瘟疫管理", icon: "system" },
      children: [
        {
          name: "PlagueStart",
          path: "/PlagueStart",
          hidden: false,
          component: 'sheolRealms/Plague/PlagueStart',
          meta: { title: "发起瘟疫", icon: "peoples" },
        },
        {
          name: "PlagueRecord",
          path: "/PlagueRecord",
          hidden: false,
          component: 'sheolRealms/Plague/PlagueRecord',
          meta: { title: "瘟疫记录", icon: "peoples" },
        }
      ]
    },

    //系统管理
    {
      name: "System",
      path: '/System',
      component: 'Layout',
      meta: { title: "系统管理", icon: "system" },
      children: [
        {
          name: "SystemUser",
          path: "/SystemUser",
          hidden: false,
          component: 'sheolRealms/System/SystemUser',
          meta: { title: "用户管理", icon: "peoples" },
        },
        {
          name: "SystemRole",
          path: "/SystemRole",
          hidden: false,
          component: 'sheolRealms/System/SystemRole',
          meta: { title: "角色设置", icon: "peoples" },
        },
        {
          name: "SystemLog",
          path: "/SystemLog",
          hidden: false,
          component: 'sheolRealms/System/SystemLog',
          meta: { title: "系统日志", icon: "peoples" },
        }
      ]
    },



]

export default [
  {
    url: '/menu/getRouters',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: asyncRoutes
      }
    }
  },
]
