module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Brastlewarkbook';
        return args
      })
  },

  // publicPath: process.env.NODE_ENV === 'production' ? '/brastlewarkbook/' : '/'
  publicPath: '/brastlewarkbook/'
}
