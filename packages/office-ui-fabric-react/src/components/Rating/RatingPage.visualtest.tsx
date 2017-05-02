import { Rating, RatingSize } from './index';

/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
export default class RatingVPage extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      rating: null
    };
  }

  public render() {
    return (
      <div >
        <Rating className='Rating' style={ { backgroundColor: 'blue' } }
          min={ 1 }
          max={ 5 }
        />
        <Rating className='RatingLarge' style={ { backgroundColor: 'blue' } }
          min={ 1 }
          max={ 5 }
          size={ RatingSize.Large }
        />
        Disabled:
        <Rating className='RatingDisabled' style={ { backgroundColor: 'blue' } }
          min={ 1 }
          max={ 5 }
          disabled={ true } />
      </div>
    );
  }
}

