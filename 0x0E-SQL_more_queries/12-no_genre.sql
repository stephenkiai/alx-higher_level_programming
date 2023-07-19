-- lists all shows contained in hbtn_0d_tvshows without a genre linked.
-- record should display: tv_shows.title - tv_show_genres.genre_id
-- sorted in ascending order
SELECT s.`title`, g.`genre_id`
  FROM `tv_shows` AS s
       LEFT JOIN `tv_show_genres` AS g
       ON s.`id` = g.`show_id`
       WHERE g.`genre_id` IS NULL
 ORDER BY s.`title`, g.`genre_id`;
