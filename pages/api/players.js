export default function handler(req, res) {
  var mysql      = require('mysql');
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  connection.connect();

  connection.query('SELECT * FROM players', function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results)
  });

  connection.end();

  
}