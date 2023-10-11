package entity

import "gorm.io/gorm"

type Rating struct{
	gorm.Model

	Score int

	Review []Review  `gorm:"foreignKey:RatingID"`

	// ReviewID *uint
	// Review Review `gorm:"foreignKey:ReviewID"`
}