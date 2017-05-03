import { Casper } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
<<<<<<< HEAD
import { RunVisualTest } from '../../visualtest/RunVisualTest';
import { IdType, ScreenEvent, EventLayer } from '../../visualtest/RunVisualTest';

declare var casper: Casper;

let componentIds = [];
let pngEventList = [ScreenEvent.DEFAULT, ScreenEvent.DOWN, ScreenEvent.HOVERED, ScreenEvent.DOUBLECLICK];

componentIds.push(new RunVisualTest({
  componentId: 'ChoiceGroup',
  componentIdType: IdType.CLASSNAME,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

componentIds.push(new RunVisualTest({
  componentId: 'ChoiceGroupDisabled',
  componentIdType: IdType.CLASSNAME,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

componentIds.push(new RunVisualTest({
  componentId: 'ChoiceGroupIcon',
  componentIdType: IdType.CLASSNAME,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

// /* tslint:disable:no-function-expression */
casper.
  start(baseUrl + 'choiceGroup').
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
  selector: '.' + 'ms-ChoiceField-field',
  fileName: 'choiceGroup',
  imageSelector: '.' + 'ChoiceGroup',
  commands: [defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot, mouseClickScreenshot]
});

componentIds.push({
  selector: '.' + 'ms-ChoiceField-field',
  fileName: 'choiceGroupDisabled',
  imageSelector: '.' + 'ChoiceGroup',
  commands: [defaultScreenshot]
});

componentIds.push({
  selector: '.' + 'ms-ChoiceField',
  fileName: 'choiceGroupIcon',
  imageSelector: '.' + 'ChoiceGroupIcon',
  commands: [defaultScreenshot, mouseMoveScreenshot, mouseDownScreenshot, mouseClickScreenshot]
});

casper.
  start(baseUrl + 'choiceGroup').
  then(() => {
    testRunner(componentIds);
  });

casper.run(() => { casper.test.done(); });
>>>>>>> 20fa5efe21f0be39f604fb3a7bdb12c83fdcbe53
