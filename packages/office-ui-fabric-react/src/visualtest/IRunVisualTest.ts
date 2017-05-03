<<<<<<< HEAD
import { EventLayer, ScreenEvent, FileExtn } from './RunVisualTest';
import { IdType } from './RunVisualTest'
import { RunVisualTest } from './RunVisualTest';

export interface IRunVisualTest {

  componentId: string;
  componentIdType;
  eventType: EventLayer;
  eventList: ScreenEvent[];
  secondLayer?: RunVisualTest;

=======

export interface IRunVisualTest {
  selector: string;
  fileName: string;
  imageSelector?: string;
  commands: ((params: IRunVisualTest) => void)[];
  childParams?: IRunVisualTest;
>>>>>>> 20fa5efe21f0be39f604fb3a7bdb12c83fdcbe53
}