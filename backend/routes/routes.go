package routes

import (
	"fmt"
	"time"

	"../db/schema"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func Router(db *gorm.DB) {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"PUT", "PATCH", "GET"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))
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
			Image        string
			Appointments []Appointments
		}
		var barbers []Barbers
		db.Table("barbers").Select("barbers.id, barbers.first_name, barbers.last_name, barbers.image").Joins("left join hours on barbers.id = hours.barber_id").Where("hours.date = ?", "06-02-2020").Scan(&barbers)
		for i := 0; i < len(barbers); i++ {
			db.Table("appointments").Select("appointments.id, users.first_name, users.last_name, appointments.slot, appointments.note").Joins("left join users on appointments.user_id = users.id").Where("appointments.date = ?", "06-02-2020").Where("appointments.barber_id = ?", barbers[i].ID).Scan(&barbers[i].Appointments)
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
