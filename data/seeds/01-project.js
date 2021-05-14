exports.seed = async function(knex) {
    // await knex('projectz').truncate()
    await knex('projects').insert([
      { project_name: 'Project Mayhem',project_description:"save the world", project_completed: 1 },
      { project_name: 'Happiness Project', project_description: "Find happiness in every given moment", project_completed:0 }
    ]);
  };

//   - [X] `project_id` - primary key
//   - [X] `project_name` - required
//   - [X] `project_description` - optional
//   - [X] `project_completed` - the database defaults it to `false` (integer 0) if not provided