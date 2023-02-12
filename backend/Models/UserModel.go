package Models

type User struct {
	Name                  string `json:"name" validate:"required"`
	Salutation            string `json:"salutation,omitempty" validate:"required"`
	Date_of_birth         string `json:"dob,omitempty" validate:"required"`
	Ssn                   string `json:"ssn,omitempty" validate:"required"`
	Id                    string `json:"id,omitempty" validate:"required"`
	Employer_name         string `json:"employername,omitempty"`
	Job_title             string `json:"jobtitle,omitempty" validate:"required"`
	Employment_start_date string `json:"startdate,omitempty" `

	// comparison details
	Degree_field string `json:"degreefield,omitempty" validate:"required"`
	Major        string `json:"major,omitempty" validate:"required"`

	// schools
	Middle_school []string `json:"middleschool,omitempty" validate:"required"`
	High_school   []string `json:"highschool,omitempty" validate:"required"`
}
