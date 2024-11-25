import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function Warning(props: any) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.667 14.976h14.666L8 2.31.667 14.976zm8-2H7.333v-1.333h1.334v1.333zm0-2.667H7.333V7.643h1.334v2.667z"
        fill="#EA2A2A"
      />
    </Svg>
  )
}



    
