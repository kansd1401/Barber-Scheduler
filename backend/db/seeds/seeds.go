package seeds

import (
	"../schema"
	"github.com/jinzhu/gorm"
)

func Seed(db *gorm.DB) {
	user := createUser("bobbyrossy@ross.ross", "Bob", "Ross")
	user1 := createUser("sandra@sandy.sand", "Sandra", "Riot")
	user2 := createUser("penelope@heinz.heinz", "Penelope", "Heinz")
	user3 := createUser("norman@normar.ross", "Norman", "Spaghetti")
	db.Create(&user)
	db.Create(&user1)
	db.Create(&user2)
	db.Create(&user3)

	barber := createBarber("Sylvia", "Palmer", "https://i.imgur.com/LpaY82x.png")
	barber1 := createBarber("Tori", "Malcolm", "https://i.imgur.com/Nmx0Qxo.png")
	barber2 := createBarber("Sven", "Jones", "https://i.imgur.com/twYrpay.jpg")
	barber3 := createBarber("Alec", "Quon", "https://i.imgur.com/3tVgsra.jpg")
	barber4 := createBarber("Viktor", "Jain", "https://i.imgur.com/iHq8K8Z.jpg")
	barber5 := createBarber("Lindsay", "Chu", "https://i.imgur.com/nPywAp1.jpg")

	db.Create(&barber)
	db.Create(&barber1)
	db.Create(&barber2)
	db.Create(&barber3)
	db.Create(&barber4)
	db.Create(&barber5)

	appointment := createAppointments(user1, barber1, 5, "04-02-2020", "Haircut and color")
	appointment1 := createAppointments(user, barber5, 2, "05-02-2020", "Shave")
	appointment2 := createAppointments(user3, barber3, 1, "06-02-2020", "Coloring")
	appointment3 := createAppointments(user2, barber2, 2, "06-02-2020", "Clean Shave and haircut")
	appointment4 := createAppointments(user1, barber, 3, "06-02-2020", "Haircut and Color")
	appointment5 := createAppointments(user3, barber4, 3, "07-02-2020", "Haircut")
	appointment6 := createAppointments(user, barber4, 4, "08-02-2020", "Haircut")

	db.Create(&appointment)
	db.Create(&appointment1)
	db.Create(&appointment2)
	db.Create(&appointment3)
	db.Create(&appointment4)
	db.Create(&appointment5)
	db.Create(&appointment6)

	schedule := createHours(barber, "02-02-2020")
	schedule1 := createHours(barber1, "04-02-2020")
	schedule2 := createHours(barber3, "02-02-2020")
	schedule3 := createHours(barber, "06-02-2020")
	schedule4 := createHours(barber3, "06-02-2020")
	schedule5 := createHours(barber2, "06-02-2020")
	schedule6 := createHours(barber4, "08-02-2020")
	schedule7 := createHours(barber5, "05-02-2020")
	schedule8 := createHours(barber4, "07-02-2020")
	schedule9 := createHours(barber5, "03-02-2020")

	db.Create(&schedule)
	db.Create(&schedule1)
	db.Create(&schedule2)
	db.Create(&schedule3)
	db.Create(&schedule4)
	db.Create(&schedule5)
	db.Create(&schedule6)
	db.Create(&schedule7)
	db.Create(&schedule8)
	db.Create(&schedule9)

}

func createUser(email, firstName, lastName string) schema.Users {
	return schema.Users{
		Email:     email,
		FirstName: firstName,
		LastName:  lastName,
	}
}

func createBarber(firstName, lastName, image string) schema.Barbers {
	return schema.Barbers{
		Image:     image,
		FirstName: firstName,
		LastName:  lastName,
	}
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

func createHours(barber schema.Barbers, date string) schema.Hours {
	return schema.Hours{
		Barber: barber,
		Date:   date,
	}
}
