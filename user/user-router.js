const router = require("express").Router();
const userModel = require("./user-model");

// Show user by ID

router.get("/:id", (req, res) => {
  userModel
    .getUserInfo(req.params.id)
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(400).json({
        message: "There was an error getting user info"
      });
    });
});

// Show all user endpoints

router.get("/", (req, res) => {
  userModel
    .getAllUsers()
    .then(info => {
      res.status(200).json(info);
    })
    .catch(err => {
      res.status(400).json({
        message: "There was an error getting user info"
      });
    });
});

// Delete user by id

router.delete("/:id", (req, res) => {
  userModel
    .deleteUser(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: "Error deleting user - check that ID exists", err });
    });
});

module.exports = router;
