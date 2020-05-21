const router = require("express").Router();
const userModel = require("./user-model");

// Show use by ID

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

module.exports = router;
