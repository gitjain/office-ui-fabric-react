import { Casper } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
import { RunVisualTest } from '../../visualtest/RunVisualTest';
import { IdType, ScreenEvent, EventLayer } from '../../visualtest/RunVisualTest';

declare var casper: Casper;

let componentIds = [];
let pngEventList = [ScreenEvent.DEFAULT, ScreenEvent.DOWN, ScreenEvent.HOVERED, ScreenEvent.DOUBLECLICK];

componentIds.push(new RunVisualTest({
  componentId: 'CompoundButton',
  componentIdType: IdType.ID,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

componentIds.push(new RunVisualTest({
  componentId: 'CompoundButtonDisabled',
  componentIdType: IdType.ID,
  eventType: EventLayer.SINGLE,
  eventList: pngEventList
}));

// /* tslint:disable:no-function-expression */
casper.
  start(baseUrl + 'compoundButton').
  then(function () {
    componentIds.map(function (test) {
      test.runCasper();
    });
  });

casper.run(function () { casper.test.done(); });
// /* tslint:enable:no-function-expression */