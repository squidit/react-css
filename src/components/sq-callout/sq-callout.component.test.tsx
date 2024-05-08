import { describe, expect, test } from 'vitest'
import Callout from './sq-callout.component'
import { render } from '@testing-library/react'

describe('Callout Component', () => {
  test('Render an warning with title and content', async () => {
    const { container } = render(<Callout title="I`m a title">I`m a content</Callout>)
    const firstCalloutFounded = container.getElementsByClassName('callout-container')[0]
    expect(firstCalloutFounded).toHaveTextContent('I`m a title')
    expect(firstCalloutFounded).toHaveTextContent('I`m a content')
  })
})
