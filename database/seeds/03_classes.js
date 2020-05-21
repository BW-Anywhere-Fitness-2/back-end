exports.seed = async function(knex) {
  await knex("class").insert([
    {
      id: 1,
      class_name: "Body Pump",
      class_type: "Aerobics",
      class_desc: "Quick workout to get the sweat flowing!",
      start_time: "9AM",
      duration: "30 Minutes",
      intensity: "Moderate",
      location: "Durham, NC",
      registered: 5,
      max_size: 20,
      instructor_id: 1
    },
    {
      id: 2,
      class_name: "HIIT Express",
      class_type: "HIIT",
      class_desc: "Quick workout to get the sweat flowing!",
      start_time: "10AM",
      duration: "20 Minutes",
      intensity: "Moderate",
      location: "Chapel Hill, NC",
      registered: 4,
      max_size: 12,
      instructor_id: 2
    },
    {
      id: 3,
      class_name: "Powerlifting Extreme",
      class_type: "CrossFit",
      class_desc: "Intense CrossFit type workout to get the sweat flowing!",
      start_time: "11AM",
      duration: "45 Minutes",
      intensity: "Extreme",
      location: "Raleigh, NC",
      registered: 6,
      max_size: 10,
      instructor_id: 3
    },
    {
      id: 4,
      class_name: "Bodyweight Burner",
      class_type: "Bodyweight",
      class_desc: "Intense bodyweight workout to get the sweat flowing!",
      start_time: "12PM",
      duration: "30 Minutes",
      intensity: "Moderate",
      location: "Greensboro, NC",
      registered: 7,
      max_size: 15,
      instructor_id: 4
    },
    {
      id: 5,
      class_name: "Hip Hop Dance",
      class_type: "Aerobic",
      class_desc: "Fun workout to get the sweat flowing!",
      start_time: "1PM",
      duration: "45 Minutes",
      intensity: "Moderate",
      location: "Charlotte, NC",
      registered: 3,
      max_size: 10,
      instructor_id: 5
    },
    {
      id: 6,
      class_name: "Zumba Zoom",
      class_type: "Zumba",
      class_desc: "Beginner Zumba workout to get the sweat flowing!",
      start_time: "3PM",
      duration: "30 Minutes",
      intensity: "Beginner",
      location: "Virginia Beach, VA",
      registered: 9,
      max_size: 20,
      instructor_id: 6
    }
  ]);
};
