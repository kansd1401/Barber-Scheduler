package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func Router(db *gorm.DB) {
	router := gin.Default()

	// Get Vendors
	router.GET("/users", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/vendors",
		})
	})

	router.GET("/vendors/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/vendors/" + id,
		})
	})

	router.GET("/vendors/:id/addresses", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/vendors/" + id + "/addresses",
		})
	})
	router.Run(":8000")
}
