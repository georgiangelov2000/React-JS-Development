const express = require("express");
const connectDatabase = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());

connectDatabase();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
