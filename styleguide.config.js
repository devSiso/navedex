const path = require('path');

module.exports = {
  title: 'Navedex ATD DOC',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const spplited = componentPath.split('/');
    const name = spplited[spplited.length - 2];
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}';`;
  },
  sections: [
    {
      name: 'Atoms',
      components: 'src/components/atoms/**/*.jsx',
      exampleMode: 'collapse',
      content: 'docs/atoms.md',
      usageMode: 'collapse',
    },
    {
      name: 'Molecules',
      components: 'src/components/molecules/**/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse',
      content: 'docs/molecules.md',
    },
    {
      name: 'Organisms',
      components: 'src/components/organisms/**/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse',
      content: 'docs/organisms.md',
    },
    {
      name: 'Templates',
      components: 'src/components/templates/**/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'collapse',
      content: 'docs/templates.md',
    },
    {
      name: 'Routing',
      components: 'src/Router/**/*.jsx',
      content: 'docs/routing.md',
    },
  ],
  assetsDir: 'public/static/',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
      noParse: /\.(css|scss)/,
    },
    resolve: {
      extensions: ['.js', 'jsx'],
    },
  },
  moduleAliases: {
    'rsg-src': path.resolve(__dirname, 'src'),
  },
};
