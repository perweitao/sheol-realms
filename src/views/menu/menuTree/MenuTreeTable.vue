<template>
    <div>
        <el-table
                :data="tableData"
                :header-cell-style="{background:'#eef1f6',color:'#606266', 'font-weight': 'bold'}"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                stripe
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
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
                        <template v-if="item.id  === 'operate'">
                            <template v-for="(it,index) in scope.row[scope.column.property]">
                                <template v-if="it === '删除'">
                                    <el-button
                                            size="mini"
                                            type="primary"
                                            :key="index"
                                            plain
                                            @click="deleteBtnClick(scope,it)"
                                    >
                                        {{it}}
                                    </el-button>
                                </template>

                                <template v-else>
                                    <el-button
                                            :key="index"
                                            size="mini"
                                            type="primary"
                                            plain
                                            @click="handleClickBtn(scope,it)"
                                    >
                                        {{it}}
                                    </el-button>
                                </template>

                            </template>
                        </template>
                        <span v-else>
                                {{ scope.row[scope.column.property] }}
                        </span>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "MenuTreeTable",
        components: {},
        props: {
            tableColumns: {
                type: Array,
                default: []
            },
            tableData: {
                type: Array,
                default: () => []
            }
        },
        computed: {},
        watch: {},
        data() {
            return {}
        },
        created() {
        },
        mounted() {
        },
        methods: {
            /**
             * 操作列点击事件
             * @param scope
             * @param type
             */
            handleClickBtn(scope, type) {
                let obj = {
                    scope: scope,
                    type: type
                };
                this.$emit('operateEvent', obj)
            },

            /**
             * 操作列中删除事件的点击事件
             * @param scope
             * @param type
             */
            deleteBtnClick(scope, type) {
                let obj = {
                    scope: scope,
                    type: type
                };
                this.$confirm('即将执行删除操作, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$emit('deleteOperateEvent', obj);
                    // this.$message({
                    //     type: 'success',
                    //     message: '删除成功!'
                    // });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        }
    }
</script>

<style scoped>

</style>