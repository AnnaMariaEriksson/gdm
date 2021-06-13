let express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dogs', async (request, response) => {
  let data = await db.query('SELECT * FROM dogs')
  response.json(data)
})

const mysql = require("mysql2");
const db = mysql.createConnection({
  host: process.env.HOST,
  user:process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: 3306,
});

const util = require("util");
db.connect = util.promisify(db.connect);
db.query = util.promisify(db.query);

// start the server
app.listen(port, async () => {
  try {
    await db.connect();
    console.log("server running on port " + port);
  } catch (e) {
    console.log(e);
  }
});
