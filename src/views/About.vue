<template>
	<div class="about">
		<div>
			<h2>点击计数</h2>
			<p>
				<button @click="reduse">-</button>
				<san>{{num}}</san>
				<button @click="reduse">+</button>
			</p>
			<p>{{nomal()}}</p>
			<p>{{computed1}}</p>
			<HiWorld></HiWorld>
			<HeyWorld @tellparent="method1" num=10 massage="怎么肥四" :num1='num'></HeyWorld>


		</div>
	</div>
</template>


<script>
	import HiWorld from '@/components/HiWorld.vue'

	export default {
		components: {

			HiWorld

		},

		data() {
			return {
				num: 0
			}
		},
		methods: {
			nomal() {
				console.log("普通方法执行了")
				return "普通方法"
			},
			// getnum() {
			// 	console.log("普通方法执行了");

			// 	return this.num
			// },
			reduse() {
				this.num--;
			},
			add() {
				this.num++;
			},
			method1(e) {
				console.log("父组件收到数据",e)
				
			},


		},
		computed: {
			computed1() {
				console.log("计算属性执行了")
				return "计算属性" + this.num

			}
		},
		watch: {
			num() {
				console.log("监听到num 变化了", this.num)

			}
		}
	}
</script>
