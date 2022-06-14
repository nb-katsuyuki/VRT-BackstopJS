const puppeteer = require('puppeteer');

module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);

  // UAなど設定
  // https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts
  if (vp.device) { await page.emulate(puppeteer.devices[vp.device]); }

  page.on('dialog', async dialog => {
    console.log(dialog.type());
    console.log(dialog.message());
    console.log(dialog.defaultValue());
    await dialog.dismiss();
  });


};
