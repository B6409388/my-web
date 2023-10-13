package main

import (
	"github.com/gin-gonic/gin"
	"github.com/B6409388/sa-66-example/controller"
	"github.com/B6409388/sa-66-example/entity"
)
const PORT = "8080"

func main(){

	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	
	r.GET("/Reviews/:id", controller.GetReview)
	r.POST("/Reviews", controller.Createreview)
	r.GET("/Reviews", controller.ListReviews)
	r.GET("/Ratings", controller.ListRating)
	r.GET("/Reviews", controller.CalculateAverageRatings)
	r.Run()
}



func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}