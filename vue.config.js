module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: '一起話畫 (Paint out loud)'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/shared.scss";
        `
      }
    }
  }
};
