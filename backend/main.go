package main

import (
	"backend/Config"
	"backend/Routes"

	"github.com/gofiber/fiber/v2"
)

func main() {

	
}
	// using fiber

	app := fiber.New()

	// run the database
	Config.ConnectDB()

	//routes
	Routes.UserRoute(app)

	app.Listen(":6000")

	// create mentor and mentee collectioms

	/*

		firstDb := client.Database("UserInfo")
		//mentorCollection := firstDB.Collection("mentors")
		menteeCollection := firstDb.Collection("Mentees")

		// add information to the files
		menteeResult, err := menteeCollection.InsertMany(ctx, []interface{}{
			bson.D{
				{Key: "name", Value: "David"},
				{Key: "careerInterest", Value: "Technology"},
				{Key: "majorInterest", Value: "Computer Science"},
				{Key: "school", Value: "Eastside high school"},
			},
			bson.D{
				{Key: "name", Value: "Brittany"},
				{Key: "careerInterest", Value: "Health"},
				{Key: "majorInterest", Value: "Biology"},
				{Key: "school", Value: "Eastside high school"},
			},
			bson.D{
				{Key: "name", Value: "Caroline"},
				{Key: "careerInterest", Value: "Technology"},
				{Key: "majorInterest", Value: "Computer Engineering"},
				{Key: "school", Value: "Gainesville middle school"},
			},
		})

		if err != nil {
			log.Fatal(err)
		}

		fmt.Println(menteeResult.InsertedIDs)

		configs.ConnectDB()
	*/

}
