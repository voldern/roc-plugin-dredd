module.exports = {
  settings: {
    runtime: {
        applicationName: '',
        port: 3000,
        serve: ['public', 'build/client'],
        ssr: false,
        koa: {
            trailingSlashes: {
                enabled: false,
            },
            lowercase: {
                enabled: false,
            },
        },
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/routes.js',
      koaMiddlewares: 'src/server/index.js',
    },
    test: {
        dredd: {
            path: ['blueprint.apib'],
        },
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
};
