import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqInputFileExample from './sq-input-file.component.example'

const meta: Meta<typeof SqInputFileExample> = {
  title: 'Components/Inputs/SqInputFile',
  component: SqInputFileExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqInputFileExample>

export const Default: Story = {}
