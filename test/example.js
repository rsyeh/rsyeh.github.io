var testHelpers = require('./testHelpers')

module.exports = (t) => {
    
        t.ok(testHelpers.true, 'true is truthy')

        t.end()
}
