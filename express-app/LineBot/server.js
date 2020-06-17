'use strict';

const express = require('express');
const line = require('@line/bot-sdk');

const https = require('https');
const fs = require('fs')

const ssl_server_key = '/etc/pki/tls/private/server.key.pem';
const ssl_server_crt = '/etc/pki/tls/certs/server.crt.pem';

const options = {
  key: fs.readFileSync(ssl_server_key),
  cert: fs.readFileSync(ssl_server_crt)
};

const PORT = process.env.PORT || 3000;

const config = {
    channelSecret: '5c541f774441dfe8127e3c4572f065ab',
    channelAccessToken: 'B+w9PaOBWvQQwluXTxS3SFS+UIwZRS8bP31+TBs8zuDl3LZkVh59JcgAlJkpXC/01ZF10OG0TmaJzeBy5wxWLpFot/jjninxuljcjwYOjVhijCn9jnYun3s8Dawj3p0sSPaK10o0bky2TmiUL6O9mwdB04t89/1O/w1cDnyilFU='
};

const app = express();

app.get('/', (req, res) => res.send('Hello LINE BOT!(GET)')); //ブラウザ確認用(無くても問題ない)
app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);

    //ここのif分はdeveloper consoleの"接続確認"用なので削除して問題ないです。
    if(req.body.events[0].replyToken === '00000000000000000000000000000000' && req.body.events[1].replyToken === 'ffffffffffffffffffffffffffffffff'){
        res.send('Hello LINE BOT!(POST)');
        console.log('疎通確認用');
        return; 
    }

    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text //実際に返信の言葉を入れる箇所
  });
}

const server = https.createServer(options, app);

server.listen(PORT);
console.log(`Server running at ${PORT}`);