<template>
	<div class="content-home">
		<template v-for="(item, index) in pageMessage">
			<div class="content-title" :key="index">{{item.title}}</div>
			<div class="content-content" :key="index+item.key">
				<div
					:class="item.key === 'plugin' ? 'content-plugin' : 'content-other'"
					v-for="(content, index) in item.content"
					:key="index+item.key"
				>{{content}}</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: "home",
	components: {},
	data() {
		return {
			pageMessage: [
				{
					title: "项目简介",
					key: "des",
					content: ["一个综合的后台管理系统"]
				},
				{
					title: "功能介绍",
					key: "featureDes",
					content: [
						"1、可以作为后台系统开发的模板项目进行使用。",
						"2、项目实现了菜单栏信息的动态加载和前端手动创建两个功能。",
						"3、在开发过程中，只需要集中精力对业务模块进行开发，省去大量页面主题ui的设计的时间。",
						"4、项目中各开放出来的部分进行简单edit即可完成项目的简单搭建",
						"5、本地项目使用mockjs进行数据模拟，接口请求模拟"
					]
				},
				{
					title: "项目使用的插件",
					key: "plugin",
					content: [
						"axios",
						"babel-core",
						"element-ui",
						"js-cookie",
						"mockjs",
						"nprogress",
						"vue",
						"vue-loader-plugin",
						"vue-router",
						"vuex",
						"node-sass",
						"normalize.css",
						"sass-loader",
						"svg-sprite-loader",
						"svgo",
						"一些基本的打包插件等不做赘述"
					]
				},
				{
					title: "使用方法",
					key: "use",
					content: [
						"1、项目拉取，install，跑通",
						"2、在views、component文件夹下创建项目对应的页面（需要自定义公用方法的也可以自建文件夹等）",
						"3、在router路由中配置相关的跳转关系等",
						"4、如果是动态后端获取的路由可以在store中进行数据请求（然后进行数据处理，处理成路由接受的数据格式）"
					]
				}
			]
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang='less' scoped>
.content-home {
  padding: 40px 300px;
	.content-title {
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 20px;
    margin-top: 20px;
	}
	.content-content {
    font-size: 16px;
		.content-plugin {
      display: inline-flex;
      margin: 8px 8px;
		}
		.content-other {
      display: flex;
      margin: 8px 0;
		}
	}
}
</style>