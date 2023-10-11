package entity

import(
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("sa-66.db"),&gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	database.AutoMigrate(
		&Review{},
		&Rating{},
	)
	db = database

	One := Rating{
		Score: 1,
	}
	db.Model(&Rating{}).Create(&One)

	Two := Rating{
		Score: 2,
	}
	db.Model(&Rating{}).Create(&Two)

	Three := Rating{
		Score: 3,
	}
	db.Model(&Rating{}).Create(&Three)

	foun := Rating{
		Score: 4,
	}
	db.Model(&Rating{}).Create(&foun)

	fine := Rating{
		Score: 5,
	}
	db.Model(&Rating{}).Create(&fine)
}