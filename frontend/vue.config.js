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
      title: "Intelli Mail - Análises Inteligente de Emails",
      description: "Descubra se seus emails são produtivos e receba sugestões de resposta automatizadas",
      subject: "email, resposta automatizadas, emails automatizados, respostas inteligentes",
      color: "#fff",
      entry: "./src/main"
    }
  }
}
