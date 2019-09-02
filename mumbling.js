function accum (s) {
  var store = []
  for (var i = 0; i < s.length; i++) {
    store.push(s[i].toUpperCase() + s.slice(i, i + 1).repeat([i]).toLowerCase())
  }
  return store.join('-')
}
