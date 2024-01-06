function screenProperties() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    ratio: window.devicePixelRatio || 1,
  };
}

export default screenProperties;