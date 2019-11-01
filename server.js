const express = require('express');
const bodyParser = require('body-parser');
const cloudinaryConfig = require('./config/cloudinaryConfig');
const api = require('./routes/api');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('*', cloudinaryConfig.cloudinaryConfig);
app.use(cors());
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.listen(PORT, () => {
  console.log('Server running at port: ' + PORT);
});
