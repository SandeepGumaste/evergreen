import React from 'react'
import PropTypes, { node, string } from 'prop-types'

const Progressbar = props => {
  const { percentage = 30, rounded = true, rtl = false, showTooltip = false, tooltipContent = '' } = props

  return (
    <div
      style={{
        width: '100%',
        height: '20px',
        background: 'grey',
        borderRadius: rounded ? '15px' : '0',
        overflow: 'hidden'
      }}
    >
      <div style={{ width: `${percentage}%`, height: '100%', background: 'red' }}></div>
    </div>
  )
}

Progressbar.propTypes = {
  /**
   * The percentage value of the progress bar.
   */
  percentage: PropTypes.number,

  /**
   * If the progressbar should have rounded edges.
   */
  rounded: PropTypes.bool,

  /**
   * If the progressbar should start from Right to left.
   */
  rtl: PropTypes.bool,

  /**
   * If the tooltip should ber shown with the progressbar.
   */
  showTooltip: PropTypes.bool,

  /**
   * The content to be shown in the tooltip of the progressbar
   */
  tooltipContent: PropTypes.oneOfType[node | string],

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
}

export default Progressbar
