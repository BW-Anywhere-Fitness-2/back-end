const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("./auth-model");
const Instructor = require("../instructor/instructor-model");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

// user registration endpoint

router.post("/register/user", async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user) {
      return res.status(409).json({ message: "Username is already taken" });
    }
    res.status(201).json(await Users.add(req.body));
  } catch (err) {
    next(err);
  }
});

// instructor registration endpoint

router.post("/register/instructor", async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await Instructor.findBy({ username }).first();

    if (user) {
      return res.status(409).json({ message: "Username is already taken" });
    }
    res.status(201).json(await Instructor.add(req.body));
  } catch (err) {
    next(err);
  }
});

// user login endpoint

router.post("/login/user", async (req, res, next) => {
  const authError = {
    message: "Invalid Credentials"
  };

  try {
    const user = await Users.findBy({ username: req.body.username }).first();
    if (!user) {
      return res.status(401).json(authError);
    }
    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValid) {
      return res.status(401).json(authError);
    }
    const tokenPayload = {
      username: user.username,
      userId: user.id
    };

    res.json({
      message: `Welcome ${user.username}!`,
      token: jwt.sign(tokenPayload, process.env.JWT_SECRET || "coolbeans")
    });
  } catch (err) {
    next(err);
  }
});

// instructor login endpoint

router.post("/login/instructor", async (req, res, next) => {
  const authError = {
    message: "Invalid Credentials"
  };

  try {
    const user = await Instructor.findBy({
      username: req.body.username
    }).first();
    if (!user) {
      return res.status(401).json(authError);
    }
    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValid) {
      return res.status(401).json(authError);
    }
    const tokenPayload = {
      username: user.username,
      userId: user.id
    };

    res.json({
      message: `Welcome ${user.username}!`,
      token: jwt.sign(tokenPayload, process.env.JWT_SECRET || "cooldude")
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
