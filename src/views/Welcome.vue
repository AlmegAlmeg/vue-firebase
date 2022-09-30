<template>
	<div class="welcome container">
		<p>Welcome</p>
		<Signup />
		<Login />
	</div>
</template>

<script>
	import Signup from "../components/Signup.vue"
	import Login from "../components/Login.vue"
	export default {
		components: {
			Signup,
			Login,
		},
	}
</script>

<style scoped>
	.welcome {
		text-align: center;
		padding: 20px 0;
	}
</style>
