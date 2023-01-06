interface BaseTheme {
  main: string
  secondary: string
}

interface Border extends BaseTheme {

}

interface Background extends BaseTheme {}

export interface Theme {
  border: {
    main: string
    secondary: string
  }
}
