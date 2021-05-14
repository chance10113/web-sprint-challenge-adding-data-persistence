// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks as t")
  .join("projects as p", "t.project_id", "p.project_id")
  .select("t.*")
}

async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTasks().where({ task_id }).first();
}

module.exports = {
  getTasks,
  createTask,
};
