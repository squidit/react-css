import * as matchers from '@testing-library/jest-dom/matchers'
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import { expect, vi } from 'vitest'

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
global.ResizeObserver = ResizeObserverMock;
declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> { }
}
expect.extend(matchers)
