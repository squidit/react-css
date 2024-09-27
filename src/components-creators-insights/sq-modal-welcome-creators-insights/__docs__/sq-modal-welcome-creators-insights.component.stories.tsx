import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SqModalWelcomeCreatorsInsightsExample from './sq-modal-welcome-creators-insights.component.example'

const meta: Meta<typeof SqModalWelcomeCreatorsInsightsExample> = {
  title: 'Creators Insights/Components/SqModalWelcomeCreatorsInsights',
  component: SqModalWelcomeCreatorsInsightsExample,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SqModalWelcomeCreatorsInsightsExample>

export const Default: Story = {
  args: {},
}
