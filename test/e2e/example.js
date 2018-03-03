module.exports = {
  'Example' : function (client) {
    console.log(client.url)
    client
      .url('http://google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .pause(3000)
      .end()

    client.perform(function() { done(); });
  }
}
