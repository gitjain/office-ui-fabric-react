import { Casper } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
import { defaultScreenshot, testRunner, mouseClickScreenshot, mouseMoveScreenshot, mouseDownScreenshot } from '../../visualtest/RunVisualTest';
import { IRunVisualTest } from '../../visualtest/IRunVisualTest';
declare var casper: Casper;
let componentIds: IRunVisualTest[] = [];

componentIds.push({
  selector: '.' + 'ms-Rating-star',
  imageSelector: '.' + 'Rating',
  fileName: 'rating',

  commands: [defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot, mouseClickScreenshot]
});
componentIds.push({
  selector: '.' + 'ms-Rating-star',
  imageSelector: '.' + 'RatingLarge',
  fileName: 'ratingLarge',
  commands: [defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot, mouseClickScreenshot]
});
componentIds.push({
  selector: '.' + 'ms-Rating-star',
  imageSelector: '.' + 'RatingDisabled',
  fileName: 'ratingDisabled',
  commands: [defaultScreenshot]
});

casper.
  start(baseUrl + 'rating').
  then(() => {
    testRunner(componentIds);
  });

casper.run(() => { casper.test.done(); });