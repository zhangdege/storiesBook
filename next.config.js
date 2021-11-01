module.exports = {
  images: {
    domains: ["http://localhost:3000", "http://localhost:6006"],
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: "file-loader",
      options: {
        outputPath: "images",
      },
    })
    return config
  },
}
