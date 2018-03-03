var test = require('tape');
var tapSpec = require('tap-spec');
var example = require('./example')

test('example test works', example)

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);
