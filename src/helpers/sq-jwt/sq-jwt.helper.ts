export default class JwtHelper {
  getPayloadToken(token: string): any {
    const payloadJWT = token.split('.')[1] || ''
    const base64 = payloadJWT.replace(/-/g, '+').replace(/_/g, '/')
    return JSON.parse(window.atob(base64))
  }

  verifyExpirationToken(token: string): boolean {
    if (!token) {
      return true
    }
    const payloadToken = this.getPayloadToken(token)
    return new Date().getTime() > payloadToken?.exp * 1000
  }
}
