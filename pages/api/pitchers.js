export default function handler(req, res) {
  var mysql      = require('mysql');
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  connection.connect();

  connection.query('SELECT fantrax_pitchers.player, fantrax_pitchers.team, fantrax_pitchers.position, fantrax_pitchers.rk_ov, fantrax_pitchers.status, fantrax_pitchers.age, fantrax_pitchers.salary, athletic_pitching_rankings.rank,  athletic_rankings_advanced_pitchers.rank AS advanced_rankings_rank, athletic_rankings_advanced_pitchers.auc, athletic_rankings_advanced_pitchers.posrk FROM fantrax_pitchers LEFT JOIN athletic_pitching_rankings ON athletic_pitching_rankings.player = fantrax_pitchers.player LEFT JOIN athletic_rankings_advanced_pitchers ON athletic_rankings_advanced_pitchers.player = fantrax_pitchers.player ORDER BY athletic_pitching_rankings.rank', function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results)
  });

  connection.end();

  
}