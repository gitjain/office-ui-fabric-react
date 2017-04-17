import { Casper, IPhantomCSS } from '../../visualtest/PhantomCssInterface';
import { baseUrl } from '../../common/VisualTest';
declare var phantomcss: IPhantomCSS;
declare var casper: Casper;
/* tslint:disable:no-function-expression */
casper.
  start(baseUrl + 'tooltip').
  then(function () {
    phantomcss.screenshot('#Tooltip', 'Tooltip_not_pressed');
  }).then(function () {
    this.mouse.move('#Tooltip');
    phantomcss.screenshot('#Tooltip', 'Tooltip_hovered');
  }).then(function () {
    this.mouse.down('#Tooltip');
    phantomcss.screenshot('#Tooltip', 'Tooltip_pressed');
  });
casper.run(function () { casper.test.done(); });
/* tslint:enable:no-function-expression */