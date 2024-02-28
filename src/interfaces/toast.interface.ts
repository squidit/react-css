export default interface toastConfig {
  message?: string
  className?: string
  fadeDuration?: number
  fadeInterval?: number
  duration?: number
  closeButton?: boolean
  immediately?: boolean
  notOverClick?: boolean
  type?: string
  persistent?: boolean
  onClick?: () => void
}
