import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import layout from '../layout/layout.vue'
//创建路由对象并配置路由规则
export default new Router({
	mode: "history", // require service support
	routes: [

		{
			path: '/home',
			name: 'home',
			redirect: '/homePage'

		},
		{
			path: '/',
			name: 'home',
			meta: {
				title: "首页"
			},
			component: layout,
			redirect: '/homePage',
			children: [
				// 首页
				{
					path: 'homePage',
					name: 'homePage',
					component: () =>
						import('@/views/homePage.vue'),
				},
				// 版权作品传播-总页
				{
					path: 'copyrightWorkDiffuse',
					name: 'copyrightWorkDiffuse',
					component: () => import('@/views/copyrightWorkDiffuse.vue'),
					redirect: '/copyrightWorkDiffuse/displayBySummarize',
					children: [
						// 版权作品总览
						{
							path: 'displayBySummarize',
							name: 'displayBySummarize',
							component: () =>
								import('@/views/displayBySummarize.vue'),
						},
						// 按媒体查询
						{
							path: 'displayByMedia',
							name: 'displayByMedia',
							component: () =>
								import('@/views/displayByMedia.vue'),
						},
						// 按渠道显示
						{
							path: 'displayByChannel',
							name: 'displayByChannel',
							component: () =>
								import('@/views/displayByChannel.vue'),
						},
						// 按网络数据查询
						{
							path: 'displayByHistory',
							name: 'displayByHistory',
							component: () =>
								import('@/views/displayByHistory.vue'),
						},
					]

				},

				// 按媒体查询-查看更多
				{
					path: '/mediaShowsMore',
					name: 'mediaShowsMore',
					component: () =>
						import('@/views/mediaShowsMore.vue'),
				},
				// 按渠道显示-查看更多
				{
					path: '/channelShowsMore',
					name: 'channelShowsMore',
					component: () =>
						import('@/views/channelShowsMore.vue'),
				},
				{
					path: '/404',
					name: 'Page404',
					component: () =>
						import('@/views/404'),
				},
				//查看文章转载
				{
					path: '/viewArticleReprints',
					component: () =>
						import('@/views/viewArticleReprints'),
				}, {
					//  文章预览对比
					path: '/detailedComparisonOfArticles',
					component: () =>
						import('@/views/detailedComparisonOfArticles'),

				}, {
					//  查看文章细览
					path: '/articleInDetail',
					component: () =>
						import('@/views/articleInDetail'),
				}, {
					//  传播关闭统计
					path: '/disseminationClosureStatistics',
					component: () =>
						import('@/views/disseminationClosureStatistics'),
				}, {
					//  传播查询统计
					path: '/queryStatistics',
					component: () =>
						import('@/views/queryStatistics'),
				},
				{
					//  添加临时监控
					path: '/addingTemporaryMonitoring',
					component: () =>
						import('@/views/addingTemporaryMonitoring'),
				},
				//传播关闭日志
				{
					path: '/propagationClosureRecord',
					component: () =>
						import('@/views/propagationClosureRecord'),
				},
				//ckm运行日志
				{
					path: '/ckmRunningLog',
					component: () =>
						import('@/views/ckmRunningLog'),
				},
				//关闭日志详情
				{
					path: '/closeLogDetails',
					component: () =>
						import('@/views/closeLogDetails'),
				},
				//系统日志管理
				{
					path: '/systemLogManagement',
					component: () =>
						import('@/views/systemLogManagement'),
				},
				//媒体配置
				{
					path: '/mediaConfiguration',
					component: () =>
						import('@/views/mediaConfiguration'),
				},
				//添加原创媒体
				{
					path: '/toAddMediaConfiguration',
					component: () =>
						import('@/views/toAddMediaConfiguration'),
				},
				//传播媒体配置
				{
					path: '/communicationMediaConfiguration',
					component: () =>
						import('@/views/communicationMediaConfiguration'),
				},

				// 导出传播次数
				{
					path: '/derivedPropagationTimes',
					component: () =>
						import('@/views/derivedPropagationTimes'),
				},
				// 导出传播明细
				{
					path: '/derivedCommunicationDetails',
					component: () =>
						import('@/views/derivedCommunicationDetails'),
				},
				// 转载监测
				{
					path: '/reproductionMonitoring',
					component: () =>
						import('@/views/reproductionMonitoring'),
				},
				// 查看转载
				{
					path: '/viewReprints',
					component: () =>
						import('@/views/viewReprints'),
				},
				// 临时监测
				{
					path: '/temporaryMonitoring',
					component: () =>
						import('@/views/temporaryMonitoring'),
				},
				// 版权监测统计
				{
					path: '/copyrightMonitoringStatistics',
					component: () =>
						import('@/views/copyrightMonitoringStatistics'),
				},
				// 转载检测统计
				{
					path: '/reproductionDetectionStatistics',
					component: () =>
						import('@/views/reproductionDetectionStatistics'),
				},
				// 微信报告统计-媒体
				{
					path: '/wechatReportStatisticsMedia',
					component: () =>
						import('@/views/wechatReportStatisticsMedia'),
				},
				// 微信报告统计-集团
				{
					path: '/wechatReportingStatisticsGroup',
					component: () =>
						import('@/views/wechatReportingStatisticsGroup'),
				},
				//黑白名单管理
				{
					path: '/blackAndWhiteListManagement',
					component: () =>
						import('@/views/blackAndWhiteListManagement'),
				},
				//用户管理
				{
					path: '/userManagement',
					component: () =>
						import('@/views/userManagement'),
				},
				//角色权限管理
				{
					path: '/rolePermissions',
					component: () =>
						import('@/views/rolePermissions'),
				},
				//新增传播媒体
				{
					path: '/toAddMedia',
					component: () =>
						import('@/views/toAddMedia'),
				},
				//修改传播媒体
				{
					path: '/EditMedia',
					component: () =>
						import('@/views/EditMedia'),
				},

				//新增黑白名单
				{
					path: '/toAddBlackAndWhiteListManagement',
					component: () =>
						import('@/views/toAddBlackAndWhiteListManagement'),
				},
				//修改黑白名单
				{
					path: '/EditBlackAndWhiteListManagement',
					component: () =>
						import('@/views/EditBlackAndWhiteListManagement'),
				},
				//新增用户
				{
					path: '/toAddUserManagement',
					component: () =>
						import('@/views/toAddUserManagement'),
				},
				//修改用户
				{
					path: '/EditUserManagement',
					component: () =>
						import('@/views/EditUserManagement'),
				},
				//修改角色
				{
					path: '/EditrolePermissions',
					component: () =>
						import('@/views/EditrolePermissions'),
				},
				//权限设置
				{
					path: '/permissionSetting',
					component: () =>
						import('@/views/permissionSetting'),
				},
				//err
				{
					path: '/err',
					component: () =>
						import('@/views/err'),
				},
			]
		},
		{
			path: '/login',
			component: () =>
				import('@/views/login/index'),
			hidden: true
		},
		{ //注册
			path: '/registered',
			component: () =>
				import('@/views/login/registered'),
			hidden: true
		},
		// 404 page must be placed at the end !!!
		// {
		// 	path: '*',
		// 	redirect: '/404',
		// 	hidden: true
		// }
	]
});