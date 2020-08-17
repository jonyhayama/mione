module.exports = {
  rules: [
    // SASS has different line endings than SCSS
    // and cannot use semicolons in the markup
    {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // This is the path to your variables
            additionalData: `@import "@/../assets/scss/_variables.sass"`
          },
        },
      ],
    },
    // SCSS has different line endings than SASS
    // and needs a semicolon after the import.
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // This is the path to your variables
            additionalData: `@import "@/../assets/scss/_variables.scss";`
          },
        },
      ],
    },
  ],
}