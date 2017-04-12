import { DefaultButton, IconButton } from './index';
import { IconName } from '../../Icon';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
export default class DefaultButtonVPage extends React.Component<any, any> {
  public render() {
    let iconName: IconName = 'Snow';
    return <div >
      <DefaultButton id='DefaultButton' icon='Add' text='Default Button' />
      <DefaultButton id='DefaultButtonDisabled' icon='Add' text='Default Button' />
      <div style={ { backgroundColor: 'white' } }>
        <IconButton id={ 'IconButton' } icon={ iconName } />
      </div>
    </div>;
  }
}