package execute

import (
	"database/sql"

	"forum-backend/internal/Log"
)

func CheckPostByid(db *sql.DB, id int) bool {
	selectRecord := "SELECT * FROM posts WHERE postId = ?"

	err := db.QueryRow(selectRecord, id).Scan()
	if err == sql.ErrNoRows {
		return false
	} else if err != nil {
		Log.LogError(err.Error())
		return false
	}
	return true
}
