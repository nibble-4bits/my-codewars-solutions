let v = global.require('vm')
function bang() {
  v.runInThisContext('thr' + 'ow new Err' + 'or("Just thr'+ 'ow like this!")')
}
