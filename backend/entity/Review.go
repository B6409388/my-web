package entity

import (
	

	"gorm.io/gorm"
)

type Review struct{
	gorm.Model
	 
	Comic_id int
	Comment string
	
	RatingID *uint
	Rating Rating `gorm:"foreignKey:RatingID"`
	// Ratings []Rating  `gorm:"foreignKey:ReviewID"`
}