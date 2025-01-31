const express = require('express');
const controller=require("../controller/apihandlers")
const router = express.Router()

router.route("/")
.get(controller.test)
.post(controller.test1)
.delete(controller.test2)

router.route("/getemployee").get(controller.getAllEmployee)

router.route("/addEmployee").post(controller.addemployee)

router.route("/removeEmployee/:id").delete(controller.removeemployee)

module.exports = router;