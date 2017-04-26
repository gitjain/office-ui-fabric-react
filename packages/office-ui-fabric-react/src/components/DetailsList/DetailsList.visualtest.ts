import { Casper, IPhantomCSS } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
import {
  defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot,
  mouseClickScreenshot, testRunner
} from '../../visualtest/RunVisualTest';
import { IRunVisualTest } from '../../visualtest/IRunVisualTest';

declare var phantomcss: IPhantomCSS;
declare var casper: Casper;

let componentIds: IRunVisualTest[] = [];

componentIds.push({
  selector: '.' + 'DetailsList',
  fileName: 'detailsList',
  commands: [defaultScreenshot, mouseClickScreenshot, mouseDownScreenshot, mouseMoveScreenshot]

});

casper.
  start(baseUrl + 'detailsList').
  then(() => {
    testRunner(componentIds);
  });

casper.run(() => { casper.test.done(); });
