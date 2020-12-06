import 'styled-components'
import { Theme } from './src/ui/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
