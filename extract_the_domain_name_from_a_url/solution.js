function domainName(url) {
  url = url.replace('www', '');
  return url.match(/(?<=(\/\/|www\.|))[0-9a-z-]+(?=\.)/g)[0];
}