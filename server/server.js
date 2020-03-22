const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const sendEmail = require('./mailer');

const dev = process.env.NODE_ENV != 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

async function main() {
  await app.prepare();

  const server = express();
  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/contact', async (req, res) => {
    console.log(req.body);

    try {
      let response = await sendEmail(req.body);
      console.log('==== SUCCESS: ', response);
      res.status(200).send('success');
    } catch (error) {
      console.error('==== FAILURE: ', error);
      res.status(500).send('The server was unable to send the message.');
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('Server running on port', port);
  });
}

main();

// app.prepare().then(() => {
//   const server = express();
//   server.use(bodyParser.json());

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.post('/api/contact', (req, res) => {
//     console.log(req.body);

//     try {
//       let response = await sendEmail(req.body);
//       console.log(response);
//       res.status(200).send('success');
//     } catch (error) {
//       res.status(400).send('error');
//     }
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log('Server running on port', port);
//   });
// });