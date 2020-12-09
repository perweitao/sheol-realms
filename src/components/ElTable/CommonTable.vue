<template>
  <div class="commom-table">
    <el-table
      :data="tableData"
      stripe
      :header-cell-style="{ background: '#eef1f6', color: '#606266', 'font-weight': 'bold' }"
      style="width: 100%; height:100%"
    >
      <template v-for="(item, index) in tableColumns">
        <el-table-column
          :align="item.align || 'left'"
          :key="index"
          :show-overflow-tooltip="true"
          :prop="item.id"
          header-align="center"
          :label="item.text"
          :width="item.width"
        >
          <template slot-scope="scope">
            <template v-if="item.id === 'operate'">
              <template v-for="(it, index) in scope.row[scope.column.property]">
                <template v-if="it === '删除'">
                  <el-button
                    :key="index"
                    size="mini"
                    type="primary"
                    plain
                    @click="deleteBtnClick(scope, it)"
                  >
                    {{ it }}
                  </el-button>
                </template>

                <template v-else>
                  <el-button
                    :key="index"
                    size="mini"
                    type="primary"
                    plain
                    @click="handleClickBtn(scope, it)"
                  >
                    {{ it }}
                  </el-button>
                </template>
              </template>
            </template>
            <span v-else>
              {{ scope.row[scope.column.property] }} {{item.unit}}
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CommonTable',
  components: {},
  props: {
    tableColumns: {
      type: Array,
      default: [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
  watch: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * 操作列点击事件
     * @param scope
     * @param type
     */
    handleClickBtn(scope, type) {
    },

    /**
     * 操作列中删除事件的点击事件
     * @param scope
     * @param type
     */
    deleteBtnClick(scope, type) {
    },
  },
}
</script>

<style scoped>
.commom-table{
  width: 100%;
}
</style>