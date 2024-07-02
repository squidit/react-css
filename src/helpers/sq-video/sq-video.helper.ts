import MP4Box from 'mp4box'

interface CustomArrayBuffer extends ArrayBuffer {
  fileStart: number
}

/**
 * Helper class for video related operations
 * @example
 * const videoHelper = useMemo(() => new VideoHelper(), [])
 * const codecName = await videoHelper.getCodecName(file)
 * @returns Promise<string>
 */
export default class SqVideoHelper {
  /**
   *
   * Get codec name from video file
   * @param file: File
   * @returns string
   * @example
   * const codecName = await getCodecName(file)
   */
  getCodecName = async (file: File): Promise<string> => {
    let codecName = ''
    const mp4boxfile = MP4Box.createFile()
    mp4boxfile.onReady = (info) => {
      codecName = info?.videoTracks[0]?.codec?.split('.')?.[0]
    }

    const data = await fetch(URL.createObjectURL(file))
      .then((response) => {
        return response.arrayBuffer()
      })
      .then((arrayBuffer: CustomArrayBuffer) => {
        arrayBuffer.fileStart = 0
        mp4boxfile.appendBuffer(arrayBuffer)
      })
      .then(() => codecName)
      .catch((error) => {
        throw error
      })
    return data
  }
}
