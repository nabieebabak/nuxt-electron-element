<template>
<el-container>
  <el-header>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><nuxt-link to="/">Walk In Customer</nuxt-link></el-menu-item>
  <el-menu-item index="2"><nuxt-link to="/about">New Tab</nuxt-link></el-menu-item>
  <el-menu-item index="3"><nuxt-link to="/about">Open Tabs</nuxt-link></el-menu-item>
  <el-menu-item index="4" disabled>Info</el-menu-item>
</el-menu>
  </el-header>
      <el-main>
		  <nuxt></nuxt>
	  </el-main>
    <el-footer>Footer</el-footer>
</el-container>
</template>

<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-header {
    text-align: center;
    line-height: 400px;
  }
</style>

