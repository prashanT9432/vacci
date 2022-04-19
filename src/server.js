const express = require("express");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
const PostRouter = require("./router/posts.routes");
require("./db");

app.get("/views/AddPatientForm", function (req, res) {
    res.render("AddPatientForm");
});
app.post("/views/AddPatientForm", function(req,res){
    var newPatient = new Patient_data({
        name:req.body.name,
        DOB:req.body.DOB,
        Gender:req.body.Gender,
        Place_of_Birth:req.body.Place_of_Birth,
        Blood_Group:req.body.Blood_Group,
        Height:req.body.Height,
        Weight:req.body.Weight
    })
    newPatient.save();
})
app.use("/views", PostRouter)



app.listen(9090, () => console.log("Server Started at PORT : 9090"))