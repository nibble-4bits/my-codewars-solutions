function createSecretHolder(secret) {
  return {
    sec: secret,
    getSecret: function() { return this.sec },
    setSecret: function(_sec) { this.sec = _sec }
  }
}