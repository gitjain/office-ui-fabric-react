import { TooltipHost, Tooltip } from './index';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
export default class TooltipVPage extends React.Component<any, any> {
  public render() {
    return <div >
      <div>
        <TooltipHost content='This is the tooltip' id='Tooltip' />
      </div>

      <TooltipHost id='TooltipDisabled' content='This is the tooltip' />
    </div>;
  }
}