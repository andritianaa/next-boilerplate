const express = require("express");
const { FileRouter } = require("./routes/file.routes");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 9901;

app.use(express.static('public'));
app.use(express.json());
app.use(cors({ origin: "*" }));


app.use("/", FileRouter);
app.use("/public", express.static(path.join(__dirname, "/public")))

app.use((req, res) => {
  res.status(404).send("File not found");
});

app.use((err, req, res) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
