<template>
	<section class="container">
		<div>
			<img width="256" src="~/assets/img/logo.png">
			<h1>About</h1>
		</div>
	</section>
</template>
<script>
export default {
	head: {
		title: 'About page'
	}
}
</script>
<style scoped>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.btn {
	margin: 0 8px;
}
</style>