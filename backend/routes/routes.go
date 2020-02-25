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
		type Appointments struct {
			ID        int
			FirstName string
			LastName  string
			Slot      int
			Note      string
		}
		type Barbers struct {
			ID           int
			FirstName    string
			LastName     string
			image        string
			appointments []Appointments
		}
		var barbers []Barbers

		db.Table("barbers").Select("barbers.id, barbers.first_name, barbers.last_name, barbers.image").Joins("left join hours on barbers.id = hours.barber_id").Where("hours.date = ?", "06-02-2020").Scan(&barbers)
		for i := 0; i < len(barbers); i++ {
			db.Table("appointments").Select("appointments.id, users.first_name, users.last_name, appointments.slot, appointments.note").Joins("left join users on appointments.user_id = users.id").Where("appointments.date = ?", "06-02-2020").Where("appointments.barber_id = ?", barbers[i].ID).Scan(&barbers[i].appointments)
		}
		// db.Raw("SELECT id, first_name, last_name, image FROM barbers").Scan(&barbers)
		// db.Find(&barbers)
		fmt.Println(&barbers)
		c.JSON(200, gin.H{
			"status":  "barbersssss",
			"barbers": barbers,
		})
	})
	//router starting
	router.Run(":8000")
}
