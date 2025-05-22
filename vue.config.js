const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:80', // Cambia al puerto donde corre tu API
        changeOrigin: true
      }
    }
  }
}