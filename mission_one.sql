-- 課題1
SELECT id,name,gender,birthday,GROUP_CONCAT(user_labels.label_id) AS label_ids
FROM users
INNER JOIN user_labels
ON id = user_labels.user_id
WHERE gender = 'male'
GROUP BY id, name, gender, birthday

-- 課題2
SELECT *
FROM staffs