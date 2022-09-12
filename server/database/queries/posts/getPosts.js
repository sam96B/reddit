const connection = require('../../config/connection');

const getPostsQuery = () => connection.query(
  `select 
    posts.text_content,
    posts.time,
    posts.id as postt_id,
    users.id as userr_id,
    users.img_url,
    users.username ,
    (select count(*)from down_votes where down_votes.post_id=posts.id) votes_count,
    (select count(*) from comments where comments.post_id = posts.id) comments_count 
    from posts join users on posts.user_id=users.id order by votes_count desc LIMIT 15;`,
);

module.exports = getPostsQuery;
