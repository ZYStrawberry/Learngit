<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(){
			
		},
		methods: {
			enterFilm(e){
				var newsid = e.currentTarget.dataset.newid;
				uni.navigateTo({
					url: '../info/info?newid='+newsid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style>
		
	
	.uni-media-list-body{
		height:auto;
	}
		
	.uni-media-list-text-top{
		line-height: 1.6em;
	}
</style>
