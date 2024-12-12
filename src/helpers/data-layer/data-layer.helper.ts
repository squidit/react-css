import { DataLayer, WindowWithDataLayer } from '@interfaces/sq-data-layer.interface'

export default class DataLayerHelper {
  private readonly window: WindowWithDataLayer = window

  public sendToDataLayer(payload) {
    const fullPayload: DataLayer = {
      ...payload,
    }
    this.window?.dataLayer?.push(fullPayload)
  }
}
