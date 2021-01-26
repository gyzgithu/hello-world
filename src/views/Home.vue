<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<HiWorld></HiWorld>
		<HeyWorld @tellparent="method1" num=30 massage="我是谁" :num1=90></HeyWorld>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import HiWorld from '@/components/HiWorld.vue'

	export default {
		name: 'Home',
		components: {
			HelloWorld,
			HiWorld

		},
		methods: {
			method1(e) {
				console.log("父组件收到数据",e)
				
			},}
		
	}
</script>
