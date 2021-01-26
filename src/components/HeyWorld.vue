<template>
	<div>
		<h2>我是HeyWorld全局组件</h2>
		<p>我接受到了num的值{{num}}</p>
		<p>我接受到了massage的值{{massage}}</p>
		<p>我接受到了num1的值{{num1}}</p>
		<p>我接受到了massage2的值{{massage1}}</p>
		<button @click="toparent">点击向父组件发送信息</button>
	</div>

</template>

<script>
	export default {
		props: {
			num: Number,
			massage: String,
			num1: {
				type: Number,
				required: true
			},
			massage1: {
				type: String,
				default: "123456789"
			},


		},
		methods:{
			toparent(){
				this.$emit("tellparent",{
					name:"qiku",
					age:5
				})
			}
			
		}
	}
</script>


<style>
</style>
