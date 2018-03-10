import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue'
import test from '@/components/test'
import HelloIview from '@/components/HelloIview'
import demo from '@/components/demo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/foo',
    	name: 'HelloVue',
    	component: HelloVue
    },
    {
    	path: '/iview',
    	name: 'HelloIview',
    	component: HelloIview,
    	children: [
    		{
    			path: '/iview/test',
    			component: test
    		},
    		{
    			path: '/iview/hey',
    			component: HelloIview
    		}
    	]
    },
    {
        path: '/test',
        component: test,
    },
    {
        path: '/demo',
        component: demo
    }
  ]
})
