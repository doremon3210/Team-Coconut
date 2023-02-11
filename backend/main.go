package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {

	// using fiber

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(&fiber.Map{"data": "Hello from Fiber & mongoDB"})
	})

	app.Listen(":6000")

	/*client, err := mongo.NewClient(options.Client().ApplyURI("mongodb+srv://milamora:qMheja2mFOMGI4i3@cluster0.0b8s1fw.mongodb.net/test"))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)
	//ping the databse
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}
	databases, err := client.ListDatabaseNames(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(databases)

	// create mentor and mentee collectioms
	*/
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
