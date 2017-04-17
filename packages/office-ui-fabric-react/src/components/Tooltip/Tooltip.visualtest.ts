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
  }).
  then(function () {
    phantomcss.screenshot('#TooltipDisabled', 'TooltipDisabled_not_pressed');
  }).then(function () {
    this.mouse.move('#TooltipDisabled');
    phantomcss.screenshot('#TooltipDisabled', 'TooltipDisabled_hovered');
  }).then(function () {
    this.mouse.down('#TooltipDisabled');
    phantomcss.screenshot('#TooltipDisabled', 'TooltipDisabled_pressed');
  });
casper.run(function () { casper.test.done(); });
/* tslint:enable:no-function-expression */