import { Casper } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
import { defaultScreenshot, testRunner, mouseClickScreenshot, mouseMoveScreenshot, mouseDownScreenshot } from '../../visualtest/RunVisualTest';
import { IRunVisualTest } from '../../visualtest/IRunVisualTest';
declare var casper: Casper;
let componentIds: IRunVisualTest[] = [];

componentIds.push({
  selector: '.' + 'ProgressIndicator',
  fileName: 'progressIndicator',
  commands: [defaultScreenshot]
});

casper.
  start(baseUrl + 'progressIndicator').
  then(() => {
    testRunner(componentIds);
  });

casper.run(() => { casper.test.done(); });