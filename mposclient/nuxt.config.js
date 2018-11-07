module.exports = {
	mode: 'spa',
	head: {title: 'mposclient'}, // Headers of the page
	loading: false, // Disable default loading bar
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
	},
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		'@/assets/css/global.css',
		'element-ui/lib/theme-chalk/reset.css',
		'element-ui/lib/theme-chalk/index.css'
	],
	plugins: [
		'@/plugins/element-ui'
	  ]
}
