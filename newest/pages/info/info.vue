<template>
	<view class="content">
		<view class="text">{{title}}</view>
		<view class="art-contant">
			<rich-text class="richText" :nodes="node"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				node:'',
				
			};
		},
		onLoad:function(e){
			console.log(e)
			uni.showLoading({
				title:'加载中....'
			})
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newid,
				method: 'GET',
				data: {},
				success: res => {
					
					uni.hideLoading();
					this.title = res.data.title;
					this.node = res.data.content;
					console.log(res)
					
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	
.content{
	padding:10upx 2%;
	width:96%;
	flex-wrap: wrap;
}
.text{
	line-height: 2em;
	font-weight: 700;
	font-size: 38upx;
}
.art-contant{
	line-height: 2em;
}
</style>
