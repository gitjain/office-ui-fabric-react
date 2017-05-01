import { keyframes, CSSProperties } from 'glamor';

/* Register the keyframes */

const EASING_FUNCTION_1: string = 'cubic-bezier(.1,.9,.2,1)';
const EASING_FUNCTION_2: string = 'cubic-bezier(.1,.25,.75,.9)';
const DURATION_1: string = '0.167s';
const DURATION_2: string = '0.267s';
const DURATION_3: string = '0.367s';
const DURATION_4: string = '0.467s';

const FADE_IN: string = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});

const FADE_OUT: string = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
});

const SLIDE_RIGHT_IN10: string = _createSlideInX(-10);
const SLIDE_RIGHT_IN20: string = _createSlideInX(-20);
const SLIDE_RIGHT_IN40: string = _createSlideInX(-40);
const SLIDE_RIGHT_IN400: string = _createSlideInX(-400);
const SLIDE_LEFT_IN10: string = _createSlideInX(10);
const SLIDE_LEFT_IN20: string = _createSlideInX(20);
const SLIDE_LEFT_IN40: string = _createSlideInX(40);
const SLIDE_LEFT_IN400: string = _createSlideInX(400);
const SLIDE_UP_IN10: string = _createSlideInY(10);
const SLIDE_UP_IN20: string = _createSlideInY(20);
const SLIDE_DOWN_IN10: string = _createSlideInY(-10);
const SLIDE_DOWN_IN20: string = _createSlideInY(-20);

const SLIDE_RIGHT_OUT10: string = _createSlideOutX(10);
const SLIDE_RIGHT_OUT20: string = _createSlideOutX(20);
const SLIDE_RIGHT_OUT40: string = _createSlideOutX(40);
const SLIDE_RIGHT_OUT400: string = _createSlideOutX(400);
const SLIDE_LEFT_OUT10: string = _createSlideOutX(-10);
const SLIDE_LEFT_OUT20: string = _createSlideOutX(-20);
const SLIDE_LEFT_OUT40: string = _createSlideOutX(-40);
const SLIDE_LEFT_OUT400: string = _createSlideOutX(-400);
const SLIDE_UP_OUT10: string = _createSlideOutY(-10);
const SLIDE_UP_OUT20: string = _createSlideOutY(-20);
const SLIDE_DOWN_OUT10: string = _createSlideOutY(10);
const SLIDE_DOWN_OUT20: string = _createSlideOutY(20);

const SCALE_UP100: string = keyframes({
  from: { transform: 'scale3d(.98,.98,1)' },
  to: { transform: 'scale3d(1,1,1)' }
});

const SCALE_DOWN98: string = keyframes({
  from: { transform: 'scale3d(1,1,1)' },
  'top': { transform: 'scale3d(.98,.98,1)' },
});

const SCALE_DOWN100: string = keyframes({
  from: { transform: 'scale3d(1.03,1.03,1)' },
  to: { transform: 'scale3d(1,1,1)' }
});

const SCALE_UP103: string = keyframes({
  from: { transform: 'scale3d(1,1,1)' },
  to: { transform: 'scale3d(1.03,1.03,1)' }
});

const ROTATE90: string = keyframes({
  from: { transform: 'rotateZ(0deg)' },
  to: { transform: 'rotateZ(90deg)' }
});

const ROTATE_N90: string = keyframes({
  from: { transform: 'rotateZ(0deg)' },
  to: { transform: 'rotateZ(-90deg)' }
});

/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
export interface IAnimationStyles {
  slideRightIn10: CSSProperties;
  slideRightIn20: CSSProperties;
  slideRightIn40: CSSProperties;
  slideRightIn400: CSSProperties;
  slideLeftIn10: CSSProperties;
  slideLeftIn20: CSSProperties;
  slideLeftIn40: CSSProperties;
  slideLeftIn400: CSSProperties;
  slideUpIn10: CSSProperties;
  slideUpIn20: CSSProperties;
  slideDownIn10: CSSProperties;
  slideDownIn20: CSSProperties;
  slideRightOut10: CSSProperties;
  slideRightOut20: CSSProperties;
  slideRightOut40: CSSProperties;
  slideRightOut400: CSSProperties;
  slideLeftOut10: CSSProperties;
  slideLeftOut20: CSSProperties;
  slideLeftOut40: CSSProperties;
  slideLeftOut400: CSSProperties;
  slideUpOut10: CSSProperties;
  slideUpOut20: CSSProperties;
  slideDownOut10: CSSProperties;
  slideDownOut20: CSSProperties;
  scaleUpIn100: CSSProperties;
  scaleDownIn100: CSSProperties;
  scaleUpOut103: CSSProperties;
  scaleDownOut98: CSSProperties;
  fadeIn100: CSSProperties;
  fadeIn200: CSSProperties;
  fadeIn400: CSSProperties;
  fadeIn500: CSSProperties;
  fadeOut100: CSSProperties;
  fadeOut200: CSSProperties;
  fadeOut400: CSSProperties;
  fadeOut500: CSSProperties;
  rotate90deg: CSSProperties;
  rotateN90deg: CSSProperties;
}

/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
export const animationStyles: IAnimationStyles = {
  slideRightIn10: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN10}`, DURATION_3, EASING_FUNCTION_1),
  slideRightIn20: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN20}`, DURATION_3, EASING_FUNCTION_1),
  slideRightIn40: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN40}`, DURATION_3, EASING_FUNCTION_1),
  slideRightIn400: _createAnimation(`${FADE_IN},${SLIDE_RIGHT_IN400}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn10: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN10}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn20: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN20}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn40: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN40}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftIn400: _createAnimation(`${FADE_IN},${SLIDE_LEFT_IN400}`, DURATION_3, EASING_FUNCTION_1),
  slideUpIn10: _createAnimation(`${FADE_IN},${SLIDE_UP_IN10}`, DURATION_3, EASING_FUNCTION_1),
  slideUpIn20: _createAnimation(`${FADE_IN},${SLIDE_UP_IN20}`, DURATION_3, EASING_FUNCTION_1),
  slideDownIn10: _createAnimation(`${FADE_IN},${SLIDE_DOWN_IN10}`, DURATION_3, EASING_FUNCTION_1),
  slideDownIn20: _createAnimation(`${FADE_IN},${SLIDE_DOWN_IN20}`, DURATION_3, EASING_FUNCTION_1),

  slideRightOut10: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT10}`, DURATION_3, EASING_FUNCTION_1),
  slideRightOut20: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT20}`, DURATION_3, EASING_FUNCTION_1),
  slideRightOut40: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT40}`, DURATION_3, EASING_FUNCTION_1),
  slideRightOut400: _createAnimation(`${FADE_OUT},${SLIDE_RIGHT_OUT400}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut10: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT10}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut20: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT20}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut40: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT40}`, DURATION_3, EASING_FUNCTION_1),
  slideLeftOut400: _createAnimation(`${FADE_OUT},${SLIDE_LEFT_OUT400}`, DURATION_3, EASING_FUNCTION_1),
  slideUpOut10: _createAnimation(`${FADE_OUT},${SLIDE_UP_OUT10}`, DURATION_3, EASING_FUNCTION_1),
  slideUpOut20: _createAnimation(`${FADE_OUT},${SLIDE_UP_OUT20}`, DURATION_3, EASING_FUNCTION_1),
  slideDownOut10: _createAnimation(`${FADE_OUT},${SLIDE_DOWN_OUT10}`, DURATION_3, EASING_FUNCTION_1),
  slideDownOut20: _createAnimation(`${FADE_OUT},${SLIDE_DOWN_OUT20}`, DURATION_3, EASING_FUNCTION_1),

  scaleUpIn100: _createAnimation(`${FADE_IN},${SCALE_UP100}`, DURATION_3, EASING_FUNCTION_1),
  scaleDownIn100: _createAnimation(`${FADE_IN},${SCALE_DOWN100}`, DURATION_3, EASING_FUNCTION_1),
  scaleUpOut103: _createAnimation(`${FADE_OUT},${SCALE_UP103}`, DURATION_1, EASING_FUNCTION_2),
  scaleDownOut98: _createAnimation(`${FADE_OUT},${SCALE_DOWN98}`, DURATION_1, EASING_FUNCTION_2),

  fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
  fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
  fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
  fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),

  fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
  fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
  fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
  fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
  rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
  rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)

  // expandCollapse 100/200/400, delay 100/200
};

function _createAnimation(
  animationName: string,
  animationDuration: string,
  animationTimingFunction: string
): CSSProperties {
  return {
    animationName,
    animationDuration,
    animationTimingFunction,
    animationFillMode: 'both'
  };
}

function _createSlideInX(fromX: number): string {
  return keyframes({
    from: { transform: `translate3d(${fromX}px,0,0)` },
    to: { transform: `translate3d(0,0,0)` }
  });
}

function _createSlideInY(fromY: number): string {
  return keyframes({
    from: { transform: `translate3d(0,${fromY}px,0)` },
    to: { transform: `translate3d(0,0,0)` }
  });
}

function _createSlideOutX(toX: number): string {
  return keyframes({
    from: { transform: `translate3d(0,0,0)` },
    to: { transform: `translate3d(${toX}px,0,0)` }
  });
}

function _createSlideOutY(toY: number): string {
  return keyframes({
    from: { transform: `translate3d(0,0,0)` },
    to: { transform: `translate3d(0,${toY}px,0)` }
  });
}