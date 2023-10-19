var protobuf = require('protocol-buffers')
var fs= require('fs');
// pass a proto file as a buffer/string or pass a parsed protobuf-schema object
var messages = protobuf(fs.readFileSync('test.proto'))

var buf = messages.Test.encode({
  num: 42,
  payload: 'hello world'
})
buf = messages.AnotherOne.encode({
    list: [
      messages.FOO.BAR
    ]
  })

  buf =messages.Person.encode({
    name: 'ali',
    id:110
  })
console.log(buf) // should print a buffer

var obj = messages.Person.decode(buf)
console.log(obj) // should print an object similar to above

