// register
const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt()
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt)
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  }
  catch (err) {
    res.status(404).json(err)
  }


})



// Login /

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(404).json("user not found")
    }

    const comparePassword = await bcrypt.compare(req.body.password, user.password)

    if (!comparePassword) {
      return res.status(404).json("Password does not match")
    }

    const details = !user && !comparePassword

    details && res.status(404).json("Wrong credentials. Please Try again.")

    const { password, ...others } = user._doc

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
    }, process.env.JWT_SEC)
    res.status(200).json({ ...others, accessToken });

  }
  catch (err) {
    res.status(404).json(err)
  }nimesahau

})


// LOGOUT/

// router.post('/logout', function(req, res){
//   req.logout();
//   res.redirect('/dashbord/login');
// });

module.exports = router