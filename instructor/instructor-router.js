const router = require("express").Router();
const instructorModel = require("./instructor-model");

// Display all instructor endpoint

router.get("/", (req, res) => {
  instructorModel
    .getAllInst()
    .then(instructors => {
      console.log(instructors);
      res.status(200).json(instructors);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: "There was an error accessing instructor list from API"
      });
    });
});

module.exports = router;
