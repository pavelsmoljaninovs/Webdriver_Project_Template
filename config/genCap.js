const browsers = ['chrome'];
const resolutions = ['1920x1080'];

module.exports = function () {
  let res = [];
  browsers.forEach(br => {
    resolutions.forEach(rs => {
      res.push({
        maxInstances: 1,
        browserName: br,
        'goog:chromeOptions': {
          // args: ['--headless'],
          prefs: {
            resolution: {
              width: +rs.split('x')[0],
              height: +rs.split('x')[1]}
          }
        }
      });
    })
  });
  return res;
};