package routes

import (
	"fmt"

	"../db/schema"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func Router(db *gorm.DB) {
	router := gin.Default()

	//Users
	router.GET("/users", func(c *gin.Context) {
		var users []schema.Users
		db.Find(&users)
		fmt.Println(users)
		c.JSON(200, gin.H{
			"status": "ya got got",
			"users":  users,
		})
	})

	router.GET("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/users/" + id,
		})
	})

	router.POST("/users/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/users/" + id,
		})
	})

	router.POST("/users/:id/delete", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/users/" + id,
		})
	})

	//router starting
	router.Run(":8000")
}
