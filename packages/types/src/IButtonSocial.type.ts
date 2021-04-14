export interface IButtonSocial {
  /**
  @default google
  */
  social: 'google' | 'facebook'
  /**
  @default
  */
  MS_ACCOUNT?: string
  /**
  @default
  */
  onClick?: () => void
}
