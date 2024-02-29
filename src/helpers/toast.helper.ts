import toastConfig from '../interfaces/toast.interface'

export default class ToastHelper {
  public toast: any = {
    success: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    error: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    inverted: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    info: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    warning: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    grayscale: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    custom: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    default: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    show: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
    theme: (message: string, config: toastConfig) => this.toastLogSrr(message, config),
  }

  constructor() {
    this.toast = (window as any).Toast
  }

  toastLogSrr(message: string, config: toastConfig) {
    return {
      message,
      config,
    }
  }
}
