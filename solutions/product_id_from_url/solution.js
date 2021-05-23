function getProductId(url) {
  const splitURL = url.split('-');
  return splitURL[splitURL.length - 2]
}