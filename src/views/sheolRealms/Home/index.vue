<template>
  <div class="home">
    <div class="top">
      <div class="df">
        <p>地府人数</p>
        <span>9527</span>
      </div>
      <div class="gh">
        <p>勾魂人数</p>
        <span>5243</span>
      </div>
      <div class="tt">
        <p>投胎人数</p>
        <span>1230</span>
      </div>
      <div class="admin">
        <p>管理员</p>
        <span>2</span>
      </div>
    </div>
    <div class="center">
      <div class="statistics"></div>
      <div class="todo"></div>
    </div>
    <div class="bottom">
      <div class="ghgsph">
        <p>勾魂高手排行</p>
        <common-table :tableColumns="ghgsphColumnsData" :tableData="ghgsphData"></common-table>
      </div>
      <div class="ttzd">
        <p>投胎最多</p>
        <common-table :tableColumns="ttzdColumnsData" :tableData="ttzdData"></common-table>
      </div>
      <div class="sbwyzd">
        <p>散布瘟疫最多</p>
        <common-table :tableColumns="sbwyzdColumnsData" :tableData="sbwyzdData"></common-table>
      </div>
    </div>
  </div>
</template>

<script>
import CommonTable from '../../../components/ElTable/CommonTable'
export default {
  name: 'home',
  components: {
    CommonTable,
  },
  data() {
    return {
      // 勾魂高手排行表格列配置
      ghgsphColumnsData: [
        {
          id: 'name',
          text: '姓名',
          align: 'center',
        },
        {
          id: 'data',
          text: '勾魂数',
          align: 'right',
          unit: '人',
        },
      ],
      // 投胎最多表格列配置
      ttzdColumnsData: [
        {
          id: 'name',
          text: '姓名',
          align: 'center',
        },
        {
          id: 'data',
          text: '投胎次数',
          align: 'right',
          unit: '次',
        },
      ],
      // 散布瘟疫最多表格列配置
      sbwyzdColumnsData: [
        {
          id: 'name',
          text: '姓名',
          align: 'center',
        },
        {
          id: 'data',
          text: '瘟疫场次',
          align: 'right',
          unit: '场',
        },
      ],
      // 勾魂高手排行数据
      ghgsphData: [
        {
          name: '白无常',
          data: 50,
        },
        {
          name: '白无常',
          data: 50,
        },
        {
          name: '白无常',
          data: 50,
        },
        {
          name: '白无常',
          data: 50,
        },
        {
          name: '白无常',
          data: 50,
        },
      ],
      // 投胎最多数据
      ttzdData: [
        {
          name: '李世民',
          data: 50,
        },
        {
          name: '李世民',
          data: 50,
        },
        {
          name: '李世民',
          data: 50,
        },
        {
          name: '李世民',
          data: 50,
        },
        {
          name: '李世民',
          data: 50,
        },
      ],
      // 散布瘟疫最多数据
      sbwyzdData: [
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
        {
          name: '崔判官',
          data: 50,
        },
      ],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang='scss' scoped>
.home {
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      width: 418px;
      height: 180px;
      color: white;
      padding-top: 30px;
      p {
        font-size: 20px;
      }
      span {
        font-size: 28px;
      }
    }
    .df {
      background: #3cdb86;
    }
    .gh {
      background: #4480f4;
    }
    .tt {
      background: #083045;
    }
    .admin {
      background: #f66932;
    }
  }
  .center {
    margin-top: 10px;
    display: flex;
    div {
      border: 1px solid #e4e4e4;
      height: 300px;
    }
    .statistics {
      width: 1200px;
      margin-right: 10px;
    }
    .todo {
      width: 600px;
    }
  }
  .bottom {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ghgsph,
    .ttzd,
    .sbwyzd {
      border: 1px solid #e4e4e4;
      width: 33%;
      height: 310px;
      p {
        text-align: left;
        padding-left: 10px;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>