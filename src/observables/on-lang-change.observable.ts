import { BehaviorSubject } from 'rxjs'
export type Language = 'pt' | 'en' | 'es'
export default new BehaviorSubject<Language>('en')
