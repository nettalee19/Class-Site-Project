const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const auth = require("../middleware/authStudent");

const Users = require("../models/users.models");

const multer = require("multer");
const sharp = require("sharp");

router.get("/", (req, res) => {
  userController.getUsers(req, res);
});

router.get("/me", auth, (req, res) => {
  res.send(req.student);
});

router.post("/", (req, res) => {
  userController.addUser(req, res);
});

router.put("/me", auth, (req, res) => {
  //add auth
  userController.updateMeStudent(req, res);
});

router.delete("/me", auth, (req, res) => {
  //add auth
  userController.deleteMeStudent(req, res);
});

router.post("/login", async (req, res) => {
  try {
    const student = await Users.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await student.generateAuthToken();
    res.send({ student, token });
    //res.send({ student })
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    req.student.tokens = req.student.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.student.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/logoutAll", auth, async (req, res) => {
  try {
    req.student.tokens = [];
    await req.student.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// router.put('/addToFav', auth, async (req,res) =>{
//     try{
//         req.student.tokens = []
//         await req.student.save()

//         res.send()
//     }catch(e){
//         res.status(500).send()
//     }
// })

const upload = multer({
  //dest: 'avatars',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload a JPG/JPEG/PNG document"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    //req.user.avatar = req.file.avatar
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.delete("/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/jpg");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send();
  }
});

router.post("/me/addtofav", auth, async (req, res) => {
  //add auth
  const student = req.student;
  const { title, description } = req.body;
  student.favorites.push({ title, description });
  await req.student.save();
  res.send(req.student);
});
router.get("/me/fav",auth,async (req,res)=>{
  console.log(req.student.favorites)
  res.send(req.student.favorites)
})

router.delete("/me/removefav", auth, async (req, res) => {
  //add auth
  const student = req.student;
  const { title } = req.body;
  const removeIndex = student.favorites.findIndex((el) => 
     (el.title === title)
     );
     //   console.log(removeIndex)
     (removeIndex === -1) ? res.send("User not found") : student.favorites.splice(removeIndex, 1);
  await req.student.save();
  res.send(req.student);
});

module.exports = router;
