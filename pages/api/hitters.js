export default function handler(req, res) {
  var mysql      = require('mysql');
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  connection.connect();

  connection.query('SELECT fantrax_hitters.player, fantrax_hitters.team, fantrax_hitters.position, fantrax_hitters.status, fantrax_hitters.age, fantrax_hitters.salary, signings_2022.last_year_of_control - 2022 AS years_left, cbs_ranking_2022.rank AS cbs_rank, athletic_rankings_simple.rank AS simple_rank, athletic_rankings_advanced_hitters.rank AS advanced_rank, fantrax_hitters.rk_ov AS fantrax_rank, athletic_rankings_advanced_hitters.auc, athletic_rankings_advanced_hitters.posrk, prospects_2022.ranking AS prospect_rank, prospects_2022.eta AS prospect_eta FROM fantrax_hitters LEFT JOIN athletic_rankings_simple ON athletic_rankings_simple.name = fantrax_hitters.player LEFT JOIN athletic_rankings_advanced_hitters ON athletic_rankings_advanced_hitters.player = fantrax_hitters.player LEFT JOIN cbs_ranking_2022 ON cbs_ranking_2022.name = fantrax_hitters.player LEFT JOIN signings_2022 ON signings_2022.player = fantrax_hitters.player LEFT JOIN prospects_2022 ON prospects_2022.player = fantrax_hitters.player ORDER BY cbs_ranking_2022.rank DESC LIMIT 30', function (error, results, fields) {
    if (error) throw error;
    res.status(200).json(results)
  });

  connection.end();

  
}