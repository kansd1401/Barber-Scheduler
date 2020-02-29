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
		AllowMethods:     []string{"GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "x-requested-with", "content-type"},
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

	router.POST("/users/new", func(c *gin.Context) {
		type User struct {
			FirstName string
			LastName  string
			Email     string
		}
		var newUser User
		c.BindJSON(&newUser)
		var user schema.Users
		db.FirstOrCreate(&user, newUser)
		c.JSON(200, gin.H{
			"status": "ya got got",
			"user":   user,
		})
	})

	// router.POST("/user/:id", func(c *gin.Context) {
	// 	id := c.Param("id")
	// 	c.JSON(200, gin.H{
	// 		"status":  "ya got got",
	// 		"message": "/users/" + id,
	// 	})
	// })

	router.POST("/user/:id/delete", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/users/" + id,
		})
	})

	//Appointment
	router.GET("/appointments", func(c *gin.Context) {
		var appointments []schema.Appointments
		db.Find(&appointments)
		c.JSON(200, gin.H{
			"status":       "ya got got",
			"appointments": appointments,
		})
	})

	router.POST("/appointments/new", func(c *gin.Context) {
		type Appointment struct {
			User   schema.Users
			Barber schema.Barbers
			Slot   int
			Date   string
			Note   string
		}
		type Data struct {
			BarberID int
			UserID   int
			Slot     int
			Date     string
			Note     string
		}
		var boi Data
		var newAppointment Appointment
		c.BindJSON(&boi)
		c.BindJSON(&newAppointment)
		newAppointment.Slot = boi.Slot
		newAppointment.Date = boi.Date
		newAppointment.Note = boi.Note
		fmt.Println("we hereeeeeeeeeeeeeeee")
		fmt.Println(boi.UserID)
		fmt.Println(newAppointment)

		db.Table("barbers").Where("barbers.id = ?", boi.BarberID).Scan(&newAppointment.Barber)
		db.Table("users").Where("users.id = ?", boi.UserID).Scan(&newAppointment.User)
		appointment := createAppointments(newAppointment.User, newAppointment.Barber, newAppointment.Slot, newAppointment.Date, newAppointment.Note)
		var createdAppointment []schema.Appointments
		db.Table("appointments").Where("barber_id = ?", boi.BarberID).Where("slot = ?", boi.Slot).Where("date = ?", boi.Date).Scan(&createdAppointment)
		if len(createdAppointment) == 0 {
			db.Create(&appointment)
			c.JSON(201, gin.H{
				"status":      "ya got got",
				"appointment": appointment,
			})
		} else {
			c.JSON(409, gin.H{
				"status":  "ya got got",
				"message": "Appointment slot filled",
			})
		}
	})

	router.GET("/appointment/:id", func(c *gin.Context) {
		id := c.Param("id")
		c.JSON(200, gin.H{
			"status":  "ya got got",
			"message": "/users/" + id,
		})
	})
	router.POST("/appointment/:id/delete", func(c *gin.Context) {
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
			Time      string
		}
		type Barbers struct {
			ID           int
			FirstName    string
			LastName     string
			Image        string
			Appointments []Appointments
		}
		times := []string{"12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"}
		date := c.Query("date")
		var barbers []Barbers
		db.Table("barbers").Select("barbers.id, barbers.first_name, barbers.last_name, barbers.image").Joins("left join hours on barbers.id = hours.barber_id").Where("hours.date = ?", date).Order("id").Scan(&barbers)
		for i := 0; i < len(barbers); i++ {
			var appointments []Appointments
			db.Table("appointments").Select("appointments.id, users.first_name, users.last_name, appointments.slot, appointments.note").Joins("left join users on appointments.user_id = users.id").Where("appointments.date = ?", date).Where("appointments.barber_id = ?", barbers[i].ID).Scan(&appointments)
			for j := 1; j < 7; j++ {
				found := false
				for k := 0; k < len(appointments); k++ {
					if appointments[k].Slot == j {
						barbers[i].Appointments = append(barbers[i].Appointments, appointments[k])
						found = true
						if i == 0 {
							barbers[i].Appointments[j-1].Time = times[j-1]
						}
					}
				}
				if found == false {
					barbers[i].Appointments = append(barbers[i].Appointments, Appointments{Slot: j, ID: j})
					if i == 0 {
						barbers[i].Appointments[j-1].Time = times[j-1]
					}
				}
			}
		}
		c.JSON(200, gin.H{
			"status":  "barbersssss",
			"barbers": barbers,
		})
	})
	//router starting
	router.Run(":8000")
}

func createAppointments(user schema.Users, barber schema.Barbers, slot int, date, note string) schema.Appointments {
	return schema.Appointments{
		User:   user,
		Barber: barber,
		Slot:   slot,
		Date:   date,
		Note:   note,
	}
}
