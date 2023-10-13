package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/B6409388/sa-66-example/entity"
)

// GET /Rating
func ListRating(c *gin.Context) {
	var rating []entity.Rating
	if err := entity.DB().Raw("SELECT * FROM Ratings").Scan(&rating).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": rating})
}

