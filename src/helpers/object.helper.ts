export interface IObject {
  [key: string]: any
}

export default class ObjectHelper {
  compareObjects(x: IObject, y: IObject): boolean {
    if (x === y) {
      return true
    }

    if (!(x instanceof Object) || !(y instanceof Object)) {
      return false
    }

    if (x.constructor !== y.constructor) {
      return false
    }

    for (const p in x) {
      // eslint-disable-next-line
      if (!x.hasOwnProperty(p)) {
        continue
      }
      // eslint-disable-next-line
      if (!y.hasOwnProperty(p)) {
        return false
      }

      if (x[p] === y[p]) {
        continue
      }

      if (typeof x[p] !== 'object') {
        return false
      }

      if (!this.compareObjects(x[p], y[p])) {
        return false
      }
    }

    for (const p in y) {
      // eslint-disable-next-line
      if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
        return false
      }
    }
    return true
  }

  compareArrays(arr1: Array<any>, arr2: Array<any>): boolean {
    if (!arr1 || !arr2) return false
    if (arr1 === arr2) return true
    if (arr1.length != arr2.length) return false

    for (let i = 0, l = arr1.length; i < l; i++) {
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
        if (!arr1[i].equals(arr2[i])) return false
      } else if (arr1[i] != arr2[i]) {
        return false
      }
    }
    return true
  }

  sumPerKey(object: IObject, key: string): any {
    return object.reduce((a: any, b: any) => a + (b[key] || 0), 0)
  }

  sumPerKeyList(object: IObject, keys: string[]): any {
    let res = 0
    for (const key of keys) {
      res += object[key] || 0
    }
    return res
  }

  parseQueryStringToObject(queryString = ''): any {
    queryString = queryString.startsWith('?') ? queryString.substring(1) : queryString
    const query: IObject = {}
    const pairs = queryString.split('&')
    for (const pair of pairs) {
      const keyAndValue = pair.split('=')
      query[decodeURIComponent(keyAndValue[0])] = decodeURIComponent(keyAndValue[1] || '')
    }
    return query
  }

  getProperty(prop: any, key: string, shouldReturnNumber = true) {
    if (prop?.[key]) {
      return prop[key]
    }
    return shouldReturnNumber ? 0 : null
  }

  arraysMatch(arr1: Array<any>, arr2: Array<any>): boolean {
    if (arr1.length !== arr2.length) {
      return false
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
    return true
  }

  arraySum(arr: Array<number>) {
    let accum = 0

    for (const i of arr) {
      accum += i
    }

    return accum
  }

  getArrayDiff(array1: Array<any> = [], array2: Array<any> = []): Array<any> {
    return array1.filter((x) => !array2.includes(x)).concat(array2.filter((x) => !array1.includes(x)))
  }

  getObjectArrayDiff(otherArray: Array<any>, key: string) {
    return (current: IObject) =>
      otherArray.filter((other) => {
        if (!other[key]) {
          return false
        }
        return other[key] === current[key]
      }).length === 0
  }
}
