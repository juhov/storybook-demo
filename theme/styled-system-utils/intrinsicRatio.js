export const intrinsicRatio = props => {
  const { intrinsicRatio: { width, height } = {} } = props

  if (!width || !height) return {}

  return {
    overflow: "hidden",
    position: "relative",
    paddingBottom: (height / width) * 100 + "%",
    height: 0,
    "> *": {
      position: "absolute",
      top: 0,
      right: 0,
      width: "100%",
      height: "100%",
    },
  }
}
