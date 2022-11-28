import { PersistAll, Pinia, Store } from '../utils'

@Store
@PersistAll()
export class User extends Pinia {
  name = 'user'

  token = ''
}
