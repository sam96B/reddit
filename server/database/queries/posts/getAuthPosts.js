const connection = require('../../config/connection');

const getAuthPostsQuery = (id) => connection.query(`select 
    posts.text_content,
    posts.time,
    posts.id as post_id,
    users.id as user_id,
    users.img_url,
    users.username,
    (select count(*) from up_votes where up_votes.user_id = $1 AND up_votes.post_id=posts.id) up_voted,
    (select count(*) from down_votes where down_votes.user_id = $1 AND down_votes.post_id=posts.id) down_voted,
    (select votes from (select  post_id,(upvotes - downvotes) as votes from (select posts.id as post_id, count(up_votes.post_id) as upvotes, (select count(down_votes.id)from down_votes where down_votes.post_id = posts.id ) as downvotes from posts left join up_votes on posts.id = up_votes.post_id group by posts.id order by post_id) as newTable) as tables where tables.post_id=posts.id) as votes_count,
    
    (select count(*) from comments where comments.post_id=posts.id) comments_count
    from posts join users on posts.user_id=users.id order by posts.time DESC LIMIT 15 ;`, [id]);

module.exports = getAuthPostsQuery;
