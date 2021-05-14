exports.up = async function (knex) {
  await knex.schema
    .createTable("project", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description)", 256);
      tbl.boolean("project_completed").defaultTo(0);
    })
    .createTable("resource", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 128).notNullable().unique();
      tbl.string("resource_description", 256);
    })
    .createTable("task", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_description", 256).notNullable();
      tbl.string("task_notes");
      tbl.boolean("task_completed").defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); // YOU WON'T NEED IT!!!!
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("project_resource_id");
      tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); // YOU WON'T NEED IT!!!!
      tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resource")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); // YOU WON'T NEED IT!!!!
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project_resources");
};

// Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data
//  types and constraints. **You must use the table names and the column names described below.**
// To give a primary key a name different than `id`, do `table.increments("project_id")`
// instead of `table.increments()`.

// - [X] A **project** is what needs to be done and is stored in a `projects` table with
// the following columns:

//   - [X] `project_id` - primary key
//   - [X] `project_name` - required
//   - [X] `project_description` - optional
//   - [X] `project_completed` - the database defaults it to `false` (integer 0) if not provided

// - [X] A **resource** is anything needed to complete a project and is stored in a `resources`
// table with the following columns:

//   - [X] `resource_id` - primary key
//   - [X] `resource_name` - required and unique
//   - [X] `resource_description` - optional

// - [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks`
// table with the following columns:

//   - [X] `task_id` - primary key
//   - [X] `task_description` - required
//   - [X] `task_notes` - optional
//   - [X] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [X] `project_id` - required and points to an actual `project_id` in the `projects` table

// - [X] A **resource assignment** connects a resource and a project, and is stored in a
// `project_resources` table. You decide what columns to use.
