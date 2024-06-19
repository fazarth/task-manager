package routes

import (
    "task-manager-backend/controllers"
    "github.com/gin-gonic/gin"
)

func TaskRoutes(router *gin.Engine) {
    router.GET("/tasks", controllers.GetTasks)
    router.POST("/tasks", controllers.CreateTask)
}
