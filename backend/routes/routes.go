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

	//Barbers with appointments for the day
	router.GET("/dayData", func(c *gin.Context) {
		type Barbers struct {
			ID        int
			firstName string
			lastName  string
			image     string
		}
		var barbers []Barbers
		db.Table("barbers").Select("id, firstName, lastName, image").Scan(&barbers)
		fmt.Println(barbers)
		c.JSON(200, gin.H{
			"status":  "barbersssss",
			"barbers": barbers,
		})
	})
	//router starting
	router.Run(":8000")
}
