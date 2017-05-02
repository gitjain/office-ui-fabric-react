import { ProgressIndicator } from './index';

/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
export default class ProgressIndicatorVPage extends React.Component<any, any> {
  public render() {
    return <div >
      <div> <ProgressIndicator
        className='ProgressIndicator'
        percentComplete={ 50 }
      /></div>&nbsp;

    </div>;
  }
}

