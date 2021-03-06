From 0 to Website
========================================

This curriculum is built using [Gulp][gulp], [Handlebars.js][handlebars], and [SCSS][scss]. It makes heavy use of [Minimill's project template][minimill].

## Setup

Install [npm][npm-install]. Then, install gulp:

```
npm install -g gulp  # May require `sudo`
```

## Developing

```
npm install
gem install scss_lint
gulp serve
```

## Gulp

Relevant gulp commands:

### `gulp build`

Builds the site into the `dist` directory.  This includes:

- SCSS w/ linting, sourcemaps and autoprefixing
- JS linting and uglification
- Handlebars to HTML

### `gulp serve`

Runs `gulp watch` in the background, and serves the `dist` directory at `localhost:3000` with automatic reloading using [Browsersync][browsersync].

## Deploying

Deploying to GitHub pages is a little bit of a pain because of relative paths. Here's the current workflow, after committing a fix or change to `master`:

1. `git checkout gh-pages`
2. `git reset --hard master`
3. (Correct relative paths in `base.hbs` and `_main.scss` by appending `jade/` to the front)
4. `gulp build`
5. `mv dist/* ./`
6. `git add -A`
7. `git commit -m "Excellent fix"`
8. `git push -f origin gh-pages`

And you done.

If you REALLY want to contribute, maybe you can make some configs that will solve this problem...

## Structure

```
├── Gulpfile.js       # Controls Gulp, used for building the website
├── README.md         # This file
├── data.yml          # Metadata associated with the site.
├── dist/             # Gulp builds the static site into this directory
├── package.json      # Dependencies
└── src/              # All source code
    ├── font/         # Font files
    ├── img/          # Images and SVGs
    ├── js/           # Javascript libraries and scripts
    ├── partials/     # Handlebars HTML partials that are included / extended
    ├── sass/         # Stylesheets
    └── templates/    # Handlebars HTML files, one per page on the site.
```

[browsersync]: http://www.browsersync.io/
[gulp]: http://gulpjs.com/
[handlebars]: http://handlebarsjs.com/
[npm-install]: https://nodejs.org/en/download/
[scss]: http://sass-lang.com/
[minimill]: https://github.com/minimill/project-template/
