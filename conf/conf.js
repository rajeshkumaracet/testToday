exports.config = {
  directConnect: true,
  framework: "jasmine2",

  // multiCapabilities: [{
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'firefox'
  // }],
    capabilities:{
           browserName: "chrome"
                },
  specs: ["../test_spec/calculator_spec.js"],
  //   "../test_spec/registration_spec.js",

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
