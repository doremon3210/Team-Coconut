package Routes

import (
	"backend/Controller"

	"github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {
	app.Post("/user", Controller.CreateUser)
	app.Get("/mentees", Controller.GetAUser)
}
