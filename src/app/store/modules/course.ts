import { Store } from 'pinia-class-component'
import { PersistAll, Pinia } from '@/app/store/utils'

@Store
@PersistAll()
export class Course extends Pinia {
}
