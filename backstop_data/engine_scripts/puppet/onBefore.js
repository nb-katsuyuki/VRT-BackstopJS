const puppeteer = require('puppeteer');

module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);

  // UAなど設定
  // https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts
  if(vp.device){await page.emulate( puppeteer.devices[vp.device]);}
};
