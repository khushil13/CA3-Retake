const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username cannot be empty" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email cannot be empty" });
  }

  if (!password || password.length < 8 || password.length > 16) {
    return res
      .status(400)
      .json({
        error:
          "Password length should be greater than 8 or less than or equal to 16",
      });
  }

  return res
    .status(201)
    .json({
      message: "User created successfully",
      data: { username, email, dateOfBirth },
    });
});

module.exports = router;
