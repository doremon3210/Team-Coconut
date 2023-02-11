package Models

type User struct {
	// Background POST
	name                  string `json:"name,omitempty" validate:"required"`
	salutation            string `json:"salutation,omitempty" validate:"required"`
	date_of_birth         string `json:"dob,omitempty" validate:"required"`
	ssn                   string `json:"ssn,omitempty" validate:"required"`
	id                    string `json:"id,omitempty" validate:"required"`
	employer_name         string `json:"employername,omitempty"`
	job_title             string `json:"jobtitle,omitempty" validate:"required"`
	employment_start_date string `json:"startdate,omitempty" `

	// comparison details
	degree_field string `json:"degreefield,omitempty" validate:"required"`
	major        string `json:"major,omitempty" validate:"required"`

	// schools
	middle_school []string `json:"middleschool,omitempty" validate:"required"`
	high_school   []string `json:"highschool,omitempty" validate:"required"`

	/*
		// Career Field checkbox
		career_field                 string
		is_graduate                  bool
		high_school_graduated_year   int
		high_school_graduated_county string
		gender                       string
		race                         string
		is_hispanic                  bool
		additional_language          string
		age                          int
		is_married                   bool
		have_children                bool
		// ATTENTION: May have many children
		children_name string
		child_age     int

		// Mentor Contact Information
		email        string
		cell_phone   string
		home_address string
		home_city    string
		home_state   string
		home_zip     int
		home_phone   string
		work_address string
		work_city    string
		work_state   string
		work_zip     string
		work_phone   string

		// Location Preference
		location_preference string

		nearest_student string

		highest_level string

		first_generation bool

		// Degree field
		degree_field       string
		currently_enrolled bool
		enrolled_detail    string

		// Mentor Information
		communication_style string
		mentor_reason       string
		// specific_training := map[string]string{
		//     "College Admissions": "",
		// }
		club_member       string
		prefer_not_handle string
		// activity_perfer := map[string]string{

		// }
		additional_note               string
		applicant_agreement_signature string
		today_agreement_date          string

		// References
		ref_name_1        string
		ref_address_1     string
		ref_zipcode_1     string
		ref_phone_1       string
		ref_relation_1    string
		ref_years_known_1 int
		ref_name_2        string
		ref_address_2     string
		ref_zipcode_2     string
		ref_phone_2       string
		ref_relation_2    string
		ref_years_known_2 int
		ref_name_3        string
		ref_address_3     string
		ref_zipcode_3     string
		ref_phone_3       string
		ref_relation_3    string
		ref_years_known_3 int
		ref_name_4        string
		ref_address_4     string
		ref_zipcode_4     string
		ref_phone_4       string

		// Liability
		liability_signature  string
		liability_todat_date string
		liability_name       string
	*/

}
