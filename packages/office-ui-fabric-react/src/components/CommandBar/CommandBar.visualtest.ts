import { Casper, IPhantomCSS } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
import {
  defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot,
  mouseClickScreenshot, mouseSingleClickScreenshot, testRunner
} from '../../visualtest/RunVisualTest';
import { IRunVisualTest } from '../../visualtest/IRunVisualTest';

declare var phantomcss: IPhantomCSS;
declare var casper: Casper;

let componentIds: IRunVisualTest[] = [];

componentIds.push({
  selector: '.' + 'CommandBar',
  fileName: 'commandBar',
  commands: [defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot, mouseClickScreenshot]
});

componentIds.push({
  selector: '.' + 'ms-CommandBarItem-link',
  fileName: 'commandBarItem',
  commands: [mouseSingleClickScreenshot],
  childParams: {
    selector: '.' + 'ms-ContextualMenu-list',
    fileName: 'commandBarItem',
    commands: [defaultScreenshot],
  }
});

casper.
  start(baseUrl + 'commandBar').
  then(() => {
    testRunner(componentIds);
  });

casper.run(() => { casper.test.done(); });