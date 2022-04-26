# Brandist Landing Page

...

## Requirements

- Ruby
- gem [bundler](https://rubygems.org/gems/bundler)
- Node.js
- Yarn

## Development

Install dependencies:

```shell
bundle install
yarn install
```

### Jekyll

Start [Jekyll](https://jekyllrb.com/) server:

```shell
bundle exec jekyll serve --incremental --livereload
```

Build [Jekyll](https://jekyllrb.com/) static website:

```shell
bundle exec jekyll build
```

### WindiCSS

Start [WindiCSS](https://windicss.org/integrations/cli.html) with hot reload and watch mode.

```shell
yarn run windicss:dev
```

Build [WindiCSS](https://windicss.org/integrations/cli.html) style minified:

```shell
yarn run windicss:build
```

Analyse [WindiCSS](https://windicss.org/integrations/cli.html) style with the [Visual Analyzer](https://windicss.org/features/analyzer.html#visual-analyzer):

```shell
yarn run windicss:analysis
```

## Deployement

Deploy on [GitHub Pages](https://pages.github.com/) using the branch `gh-pages` as the source.

```shell
./deploy.sh
```

## License

[MIT](./LICENSE)
