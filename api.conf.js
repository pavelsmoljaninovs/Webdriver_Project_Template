exports.config = {

  runner: 'local',

  specs: [
    //Add your spec between these two lines. Do not forget comma.
    //======================================
    './test/specs/api/01_post/bug.js'
    //======================================
    //'./test/specs/api/**/*.js'
  ],

  exclude: [],

  maxInstances: 1,

  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless']
    }
  }],

  logLevel: 'silent',

  bail: 0,

  baseUrl: 'https://small-express-server.herokuapp.com/',

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  services: ['selenium-standalone'],

  framework: 'mocha',

  reporters: ['spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results'
    }
  },

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: ['js:@babel/register']
  },

};
