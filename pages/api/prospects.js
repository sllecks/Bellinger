export default function handler(req, res) {
  var mysql      = require('mysql');
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  connection.connect();

  connection.query('SELECT fantrax_all.player, fantrax_all.position, fantrax_all.age, fg_prospects_2022.age, fantrax_all.status, fantrax_all.salary, fg_prospects_2022.rank, fg_prospects_2022.highest_level, fg_prospects_2022.eta, fg_prospects_2022.fv, prospects_2022.ranking AS ath_rank FROM fg_prospects_2022 LEFT JOIN fantrax_all ON fantrax_all.player = fg_prospects_2022.name AND fg_prospects_2022.age = fantrax_all.age LEFT JOIN prospects_2022 ON fantrax_all.player = prospects_2022.player ORDER BY fg_prospects_2022.rank', function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results)
  });

  connection.end();

  
}