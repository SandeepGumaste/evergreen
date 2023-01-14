import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import Progressbar from '../src/Progressbar'

storiesOf('progress-bar', module).add('Progress Bar', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Progressbar />
  </Box>
))
