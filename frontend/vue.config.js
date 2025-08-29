module.exports = {
  configureWebpack: () => {
    const ENV = (env) => (!env && (process.env.NODE_ENV)) || ((process.env.NODE_ENV) === env)
    // eslint-disable-next-line
    const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
    // eslint-disable-next-line
    const os = require("os")

    return {
      devtool: false,
      node: {
        __filename: ENV("development")
      },
      plugins: [
        new ForkTsCheckerWebpackPlugin({
          memoryLimit: Math.floor(((os.totalmem() / 1024) / 1024) / 2)
        })
      ]
    }
  },

  pages: {
    index: {
      title: "app",
      description: "default app",
      subject: "typescript, vue.js, vuex, vuetify, vue-router",
      color: "#6600cc",
      entry: "./src/main"
    }
  }
}
