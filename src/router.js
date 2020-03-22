import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const Home = ()=>import('@/views/home/Home.vue')
const Shop = () => import('@/views/shop/Shop.vue')
const Good = () => import('@/views/good/Good.vue')
const PublishGood = () => import('@/views/good/PublishGood.vue')
const Login = ()=>import('@/views/login/Login.vue')
const Dashboard = ()=>import('@/views/dashboard/Dashboard')

const routes = [
	{
		path: '/dashboard',
		component: Dashboard,
	},
	{
		path: '/shop',
		component: Shop
	},
	{
		path: '/good',
		component: Good
	},
	{
		path: '/publish',
		component: PublishGood
	},
	{
		path: '/',
		component: Home
	},
	{
		path: '/login',
		components: { 
			// default: Login 
			login:Login
		}
	},
	// {
	// 	path: '/login',
	// 	component: Login
	// },
	{
		path: '/*',
		redirect: '/'
	}
];

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

// 全局路由守卫
// router.beforeEach((to,from,next)=>{
// 	// const isLogin = false;
// 	const isLogin = localStorage.getItem('isLogin');
// 	if(to.path === '/login'){
// 		next();
// 	} else {
// 		if(isLogin){
// 			next()
// 		} else {
// 			next('/login');
// 		}
// 	}

// 	// console.log('to',to);
// 	// console.log('from',from);
// 	// next()
// })
export default router
