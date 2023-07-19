-- list all genres from hbtn_0d_tvshows & displays number of shows linked 2 each
-- First column must be called genre
-- Second column must be called number_of_shows
-- sorted in descending order by the number of shows linked
SELECT g.`name` AS `genre`,
       COUNT(*) AS `number_of_shows`
  FROM `tv_genres` AS g
       INNER JOIN `tv_show_genres` AS t
       ON g.`id` = t.`genre_id`
 GROUP BY g.`name`
 ORDER BY `number_of_shows` DESC;
