package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func main() {
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb+srv://milamora:qMheja2mFOMGI4i3@cluster0.0b8s1fw.mongodb.net/test"))
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
	})

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(menteeResult.InsertedIDs)

}
