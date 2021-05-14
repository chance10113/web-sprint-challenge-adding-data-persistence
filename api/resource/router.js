// build your `/api/resources` router here
const express = require("express");
const router = express.Router();

const helpers = require("./model");

router.get("/", async (req, res, next) => {
  helpers
    .getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  helpers
    .createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo",
// "resource_description":null}]`

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo",
// "resource_description":null}`
