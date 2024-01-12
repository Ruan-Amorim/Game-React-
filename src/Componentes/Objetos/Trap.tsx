import React from 'react'
import { SIZE_1_BLOCK } from '../Sizes'

const Trap = () => {
  return ( < div style = {{
    position: 'absolute',
    width: SIZE_1_BLOCK,
    height: SIZE_1_BLOCK,

    bottom: 4 * 48,
    left: 10 * 48,

    backgroundImage: " url(./midia/TRAP.png)",
    backgroundPosition: "left bottom",
    animation: "trap 2s steps(8) infinite",
  }} />
  )
}
export default Trap;