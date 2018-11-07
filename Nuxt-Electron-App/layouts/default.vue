<template>
<el-container>
  <el-header>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><nuxt-link to="/">Home</nuxt-link></el-menu-item>
  <el-menu-item index="2"><nuxt-link to="/about">About</nuxt-link></el-menu-item>

</el-menu>
  </el-header>
      <el-main>
		  <nuxt></nuxt>
	  </el-main>
    <el-footer>Footer</el-footer>
</el-container>
</template>

