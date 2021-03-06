const dbconnection = require('../../config/db_connection');

exports.getMembers = offset => dbconnection.query(`SELECT member.* , COALESCE(json_agg(skill) FILTER (WHERE skill.id IS NOT NULL),'[]') AS skills
FROM member LEFT OUTER JOIN member_skill ON member_skill.member_id = member.id 
LEFT OUTER JOIN skill ON skill.id = member_skill.skill_id 
GROUP BY member.id LIMIT 100 OFFSET $1 `, [offset]);
