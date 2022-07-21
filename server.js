const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.post('/record', (req, res) => {
  res.header({
    'Content-Disposition': 'attachment; filename="record.mp3"',
    'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    'Content-Transfer-Encoding': 'binary',
  });

  res.download(path.resolve(__dirname, 'record.mp3'));
});

app.listen(PORT, () => {
  console.log(`Mock server listening on http://localhost:${PORT}/`);
});
