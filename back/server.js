const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });  // This will store uploaded files in an 'uploads' directory.



const app = express();

var corsOptions = {
  origin: "http://localhost:3006",
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true
};

app.use(cors(corsOptions));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  req.session.example = "Hello, world!";
  res.json({ message: "Welcome to bezkoder application." });
});

// User routes
require("./routes/user.routes")(app);

// Agency routes
require("./routes/agency.routes")(app); // Ensure this path is correct and the routes file is named 'agency.routes.js'

// Flight routes
require("./routes/flight.routes")(app); // Ensure this path is correct and the routes file is named 'flight.routes.js'

// Ticket routes
require("./routes/ticket.routes")(app); // Ensure this path is correct and the routes file is named 'ticket.routes.js'

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
