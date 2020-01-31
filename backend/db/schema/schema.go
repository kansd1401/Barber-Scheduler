package schema

import "github.com/jinzhu/gorm"

// Migrate Run all DB migrations
func Migrate(db *gorm.DB) {

	dropExistingTables(db)

	db.AutoMigrate(&Users{})
	db.AutoMigrate(&Customers{})
	db.AutoMigrate(&CustomerOrders{})
	db.AutoMigrate(&Items{})
	db.AutoMigrate(&OrderItems{})
	db.AutoMigrate(&Vendors{})
	db.AutoMigrate(&VendorOrders{})
	db.AutoMigrate(&Addresses{})
}

func dropExistingTables(db *gorm.DB) {
	db.DropTableIfExists(&Users{})
	db.DropTableIfExists(&Customers{})
	db.DropTableIfExists(&CustomerOrders{})
	db.DropTableIfExists(&Items{})
	db.DropTableIfExists(&OrderItems{})
	db.DropTableIfExists(&Vendors{})
	db.DropTableIfExists(&VendorOrders{})
	db.DropTableIfExists(&Addresses{})
}

// Users Schema
type Users struct {
	gorm.Model
	Email     string `gorm:"NOT NULL"`
	Role      string `gorm:"NOT NULL"`
	FirstName string `gorm:"NOT NULL"`
	LastName  string `gorm:"NOT NULL"`
}

// Customers Schema
type Customers struct {
	gorm.Model
	Email     string `gorm:"NOT NULL"`
	FirstName string `gorm:"NOT NULL"`
	LastName  string `gorm:"NOT NULL"`
	Phone     string `gorm:"NOT NULL"`
	Note      string
}

// CustomerOrders Schema
type CustomerOrders struct {
	gorm.Model
	User       Users     `gorm:"NOT NULL"`
	UserID     uint      `gorm:"NOT NULL"`
	Customer   Customers `gorm:"NOT NULL"`
	CustomerID uint      `gorm:"NOT NULL"`
	Note       string
}

// Items Schema
type Items struct {
	gorm.Model
	Vendor      Vendors `gorm:"NOT NULL"`
	VendorID    uint    `gorm:"NOT NULL"`
	Name        string  `gorm:"NOT NULL"`
	Description string
	Type        string
	Price       int
}

// OrderItems Schema
type OrderItems struct {
	gorm.Model
	Order         CustomerOrders `gorm:"NOT NULL"`
	OrderID       uint           `gorm:"NOT NULL"`
	Item          Items          `gorm:"NOT NULL"`
	ItemID        uint           `gorm:"NOT NULL"`
	PurchasePrice int            `gorm:"NOT NULL"`
	Quantity      int            `gorm:"NOT NULL"`
	Discount      int            `gorm:"DEFAULT:0"`
}

// Vendors Schema
type Vendors struct {
	gorm.Model
	Email string `gorm:"NOT NULL"`
	Name  string `gorm:"NOT NULL"`
	Phone string `gorm:"NOT NULL"`
	Note  string
}

// VendorOrders Schema
// This needs to be restrucuted, slight improvement
// over what's in the ERD but it does not fulfill
// requirements for the app.
type VendorOrders struct {
	gorm.Model
	User     Users   `gorm:"NOT NULL"`
	UserID   uint    `gorm:"NOT NULL"`
	Vendor   Vendors `gorm:"NOT NULL"`
	VendorID uint    `gorm:"NOT NULL"`
	Note     string
}

// Addresses Schema
type Addresses struct {
	gorm.Model
	Customer   Customers `gorm:"NOT NULL"`
	CustomerID uint      `gorm:"NOT NULL"`
	FirstName  string    `gorm:"NOT NULL"`
	LastName   string    `gorm:"NOT NULL"`
	Address    string    `gorm:"NOT NULL"`
	City       string    `gorm:"NOT NULL"`
	Phone      string    `gorm:"NOT NULL"`
	Note       string
	IsActive   bool `gorm:"DEFAULT: true"`
}
