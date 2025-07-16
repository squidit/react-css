import { useState, useEffect } from 'react'

export const useSqScopedCssHash = (ref: React.RefObject<HTMLElement>): string | undefined => {
  const [scopedHash, setScopedHash] = useState<string>()

  useEffect(() => {
    if (ref.current) {
      const fullAttribute = Array.from(ref.current.attributes).find((attr: any) => attr.name.startsWith('data-v-')) as
        | { name: string }
        | undefined

      if (fullAttribute) {
        setScopedHash(fullAttribute.name)
      }
    }
  }, [ref.current])

  return scopedHash
}
