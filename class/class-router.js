const router = require("express").Router();
const classModel = require("./class-model");

// Get list of all classes

router.get("/", (req, res) => {
  classModel
    .getAllClasses()
    .then(classes => {
      console.log(classes);
      res.status(200).json(classes);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json({ message: "There was an error accessing class list from API" });
    });
});

// Get class by ID

router.get("/:id", (req, res) => {
  const id = req.params.id;
  classModel
    .getClassById(id)
    .then(classes => {
      res.status(200).json(classes);
    })
    .catch(err => {
      res.status(400).json({
        message: "There was an error when checking your instructor ID"
      });
    });
});

// Update class

router.put("/:id", (req, res) => {
  classModel
    .updateClass(req.params.id, req.body)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).json({
        message:
          "An error occurred updating the class data, check the id you're sending",
        err
      });
    });
});

// Register new class by instructor

router.post("/instructor/:id", (req, res) => {
  const id = req.params.id;
  classModel
    .add(req.body, id)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Delete class by id

router.delete("/:id", (req, res) => {
  classModel
    .deleteClass(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: "Error deleting class - check that ID exists", err });
    });
});

module.exports = router;
