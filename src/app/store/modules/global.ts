import { Pinia, Store } from '../utils'

@Store
export class Global extends Pinia {
  mode = 'light'
}
