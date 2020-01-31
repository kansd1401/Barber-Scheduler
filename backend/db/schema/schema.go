package schema

import "github.com/jinzhu/gorm"

// Migrate Run all DB migrations
func Migrate(db *gorm.DB) {

	dropExistingTables(db)

	db.AutoMigrate(&Users{})
	db.AutoMigrate(&Barbers{})
	db.AutoMigrate(&Appointments{})
	db.AutoMigrate(&Hours{})
}

func dropExistingTables(db *gorm.DB) {
	db.DropTableIfExists(&Users{})
	db.DropTableIfExists(&Barbers{})
	db.DropTableIfExists(&Appointments{})
	db.DropTableIfExists(&Hours{})
}

// Users Schema
type Users struct {
	gorm.Model
	Email     string `gorm:"NOT NULL"`
	FirstName string `gorm:"NOT NULL"`
	LastName  string `gorm:"NOT NULL"`
}

// Barbers Schema
type Barbers struct {
	gorm.Model
	Image     string `gorm:"NOT NULL"`
	FirstName string `gorm:"NOT NULL"`
	LastName  string `gorm:"NOT NULL"`
}

// Appointments Schema
type Appointments struct {
	gorm.Model
	User     Users   `gorm:"NOT NULL"`
	UserID   uint    `gorm:"NOT NULL"`
	Barber   Barbers `gorm:"NOT NULL"`
	BarberID uint    `gorm:"NOT NULL"`
	Slot     int     `gorm:"NOT NULL"`
	Date     string  `gorm:"type:date" gorm:"NOT NULL"`
	Note     string
}

// Hours Schema
type Hours struct {
	gorm.Model
	Barber   Barbers `gorm:"NOT NULL"`
	BarberID uint    `gorm:"NOT NULL"`
	Date     string  `gorm:"type:date" gorm:"NOT NULL"`
}
