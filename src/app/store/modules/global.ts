import { Persist, Pinia, Store } from '../utils'

@Store
export class Global extends Pinia {
  @Persist
  mode = 'light'
}
