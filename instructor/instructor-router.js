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

// get instructor by id

router.get("/:id", (req, res) => {
  instructorModel
    .getInstInfo(req.params.id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(400).json({
        message: "There was an error getting instructor info"
      });
    });
});

router.get("/classes/:id/", (req, res) => {
  const id = req.params.id;

  instructorModel
    .getInstClasses(req.params.id)
    .then(classes => {
      res.status(200).json(classes);
    })
    .catch(err => {
      res.status(400).json({
        message:
          "An error has occurred when accessing classes for this instructor ID"
      });
    });
});

module.exports = router;
