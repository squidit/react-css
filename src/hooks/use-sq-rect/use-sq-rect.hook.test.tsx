import { describe, it, expect } from 'vitest'
import useRect from './use-sq-rect.hook'
import { renderHook } from '@testing-library/react'

describe('useRect hook', () => {
  it('should return correct RectResult when ref is defined and current is not null', () => {
    const ref = { current: document.createElement('div') }
    const { result } = renderHook(() => useRect(ref))

    expect(result.current).toEqual({
      x: expect.any(Number),
      y: expect.any(Number),
      bottom: expect.any(Number),
      height: expect.any(Number),
      left: expect.any(Number),
      right: expect.any(Number),
      top: expect.any(Number),
      width: expect.any(Number),
    })
  })
})
