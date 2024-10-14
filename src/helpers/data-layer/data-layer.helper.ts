import { WindowWithDataLayer } from '@interfaces/sq-data-layer.interface'

export default class DataLayerHelper {
  window: WindowWithDataLayer = window

  public sendToDataLayer(payload) {
    const fullPayload = {
      ...payload,
    }
    this.window?.dataLayer?.push(fullPayload)
  }
}
