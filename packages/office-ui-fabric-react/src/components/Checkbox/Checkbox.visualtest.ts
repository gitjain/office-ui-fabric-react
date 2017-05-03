import { Casper } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
<<<<<<< HEAD
import { RunVisualTest } from '../../visualtest/RunVisualTest';
import { IdType, ScreenEvent, EventLayer } from '../../visualtest/RunVisualTest';

declare var casper: Casper;

let componentIds = [];
let pngEventList = [ScreenEvent.DEFAULT, ScreenEvent.DOWN, ScreenEvent.HOVERED, ScreenEvent.DOUBLECLICK];

componentIds.push(new RunVisualTest({
  componentId: 'Checkbox',
  componentIdType: IdType.CLASSNAME,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

componentIds.push(new RunVisualTest({
  componentId: 'CheckboxDisabled',
  componentIdType: IdType.CLASSNAME,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

// /* tslint:disable:no-function-expression */
casper.
  start(baseUrl + 'checkbox').
  then(function () {
    componentIds.map(function (test) {
      test.runCasper();
    });
  });

casper.run(function () { casper.test.done(); });
// /* tslint:enable:no-function-expression */
=======
import { defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot, mouseClickScreenshot, testRunner } from '../../visualtest/RunVisualTest';
import { IRunVisualTest } from '../../visualtest/IRunVisualTest';

declare var casper: Casper;

let componentIds: IRunVisualTest[] = [];

componentIds.push({
  selector: '.' + 'ms-Checkbox-input',
  fileName: 'checkbox',
  imageSelector: '.' + 'Checkbox',
  commands: [defaultScreenshot, mouseClickScreenshot, mouseMoveScreenshot, mouseDownScreenshot]
});

componentIds.push({
  selector: '.' + 'CheckboxDisabled',
  fileName: 'checkboxDisabled',
  commands: [defaultScreenshot]
});

casper.
  start(baseUrl + 'checkbox').
  then(() => {
    testRunner(componentIds);
  });

casper.run(() => { casper.test.done(); });
>>>>>>> 20fa5efe21f0be39f604fb3a7bdb12c83fdcbe53
