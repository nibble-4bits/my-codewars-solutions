// TODO: create UriBuilder object
class UriBuilder {
  constructor(uriString) {
    this.baseUri = uriString.match(/.+(?=\?)/)[0];
    this.params = {};
    
    let paramsRegex = /(\w+)=(\w+)/g;
    let match;
    while (match = paramsRegex.exec(uriString)) {
      this.params[match[1]] = parseInt(match[2]) || match[2];
    }
  }
  
  build() {
    let completeUri = this.baseUri;
    completeUri = Object.keys(this.params).length > 0 ? completeUri += '?' : completeUri;
    
    for (let param in this.params) {
      completeUri += `${param}=${this.params[param]}&`;
    }
    completeUri = completeUri.slice(0, completeUri.length - 1);
    
    return encodeURI(completeUri);
  }
}