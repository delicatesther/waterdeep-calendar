module.exports = ctx => ({
  map: ctx.options.map,
  parser: ctx.file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    "autoprefixer": { "grid": true },
    "css-mqpacker": {sort: true}
  }
})
