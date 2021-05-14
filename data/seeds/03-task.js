exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    // species_id must match valid species
    {
      task_description: "Don't talk about Fight Club",
      task_completed: true,
      project_id: 1,
    },
    {
      task_description: "Look up at the sky",
      task_notes: "You'll never know what beauty you will see",
      task_completed: false,
      project_id: 2,
    },

    // { animal_name: "Bellatrix", species_id: 19 }
  ]);
};

//   - [X] `task_id` - primary key
//   - [X] `task_description` - required
//   - [X] `task_notes` - optional
//   - [X] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [X] `project_id` - required and points to an actual `project_id` in the `projects` table
