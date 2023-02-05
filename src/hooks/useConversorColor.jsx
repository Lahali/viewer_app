import { useEffect, useState } from "react"

const useConversorColor = (hexColor) => {
  const [color, setColor] = useState("")

  const hexToRGB = (hex) => [
    parseInt(hex.substring(1, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(5, 6), 16),
  ]

  const RGBToHSL = (rgb) => {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const canMin = Math.min(r, g, b)
    const canMax = Math.max(r, g, b)
    const canDelta = canMax - canMin

    let h = 0
    let s = 0
    let l = 0
    if (canDelta === 0) {
      h = 0
    } else if (canMax === r) {
      h = ((g - b) / canDelta) % 6
    } else if (canMax === g) {
      h = (b - r) / canDelta + 2
    } else {
      h = (r - g) / canDelta + 4
    }

    if (h < 0) {
      h += 360
    }

    l = (canMax + canMin) / 2
    s = canDelta === 0 ? 0 : canDelta / (1 - Math.abs(2 * l - 1))

    return [h, s, l]
  }

  useEffect(() => {
    const hsl = RGBToHSL(hexToRGB(hexColor))
    if (hsl[2] > 0.5) {
      setColor("black")
    }
    console.log(hsl)
  }, [hexColor])

  return { color }
}

export default useConversorColor
