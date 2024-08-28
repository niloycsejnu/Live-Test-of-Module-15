let express = require("express");
let multer = require("multer");

let app = express();

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null,file.originalname);
    }
});

let upload = multer({ storage: storage });

app.post("/uploads", upload.single("file"), (req,res) => {
    if (!req.file) {
        return res.status(400).send("No file is uploaded.");
    }
    res.send("Successfully uploaded the file");
});

app.listen(8000,() => {
    console.log("Server Run Successful");
});
