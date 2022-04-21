module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...

  console.log('kill lazyload');
  await page.evaluate(async () => {
    document.querySelectorAll('[loading="lazy"]').forEach((elem) => {
      elem.loading = 'eager';
    });

    document.querySelectorAll('.lazyload').forEach((elem) => {
      elem.classList.remove('lazyload');
      let src = elem.dataset.src;
      if(src){
        elem.setAttribute('src', src);
      }
    });
  });

  console.log('load images wait');
  await page.waitForTimeout(1000);
};
