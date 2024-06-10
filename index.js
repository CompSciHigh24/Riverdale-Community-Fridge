const mongoose = require("mongoose");
const ejs = require("ejs");

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

const mongoDBConnectionString =
  "mongodb+srv://SE12:CSH2024@cluster0.jeofgpn.mongodb.net/fridge?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBConnectionString)
  .then(() => console.log("MongoDB connection successful."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.static(__dirname + "/public"));

app.use(express.json());

const itemSchema = new mongoose.Schema({
  food: { type: String, required: true },
  type: { type: String, required: true },
  allergy: { type: String },
  quantity: { type: Number, required: true },
});

const item = mongoose.model("item", itemSchema);

app.get("/inventory", (req, res) => {
  item.find({}).then((items) => {
    // res.json(items)
    res.render("inventory.ejs", { item: items });
  });
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.get("/foodtype", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/inventory.html");
});

app.post("/inventory", (req, res) => {
  const newItem = new item({
    food: req.body.food,
    type: req.body.type,
    allergy: req.body.allergy,
    quantity: req.body.quantity,
  });

  newItem.save().then((newItem) => {
    res.json(newItem);
  });
});

app.delete("/inventory/:food", (req, res) => {
  const filter = { food: req.params.food };

  item.findOneAndDelete(filter).then((data) => {
    res.json(data);
  });
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

// History page
// possibly put them in different drop down menus

app.get("/", (req, res) => {
  const data = {
    name: "Neighborhood Fridge History",
    followers: 100,
  };

  res.render("history.ejs", data);
});

app.listen();

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// Event page

const eventSchema = new mongoose.Schema({
  event: { type: String },
  info: { type: String },
  date: { type: String },
  ages: { type: String },
});

const event = mongoose.model("event", eventSchema);

app.get("/event", (req, res) => {
  event.find({}).then((events) => {
    // res.json(items)
    res.render("event.ejs", { event: events });
  });
});

app.get("/eventtype", (req, res) => {
  res.sendFile(__dirname + "/public/event.html");
});

app.post("/event", (req, res) => {
  const newEvent = new event({
    event: req.body.event,
    info: req.body.info,
    date: req.body.date,
    ages: req.body.ages,
  });

  newEvent.save().then((newEvent) => {
    res.json(newEvent);
  });
});

app.listen(3000, () => {
  console.log("Server running");
});




// Admin inventory

app.get("/admintype", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/admin.html");
});

app.post("/admin", (req, res) => {
  const newItem = new item({
    food: req.body.food,
    type: req.body.type,
    allergy: req.body.allergy,
    quantity: req.body.quantity,
  });

  newItem.save().then((newItem) => {
    res.json(newItem);
  });
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});






app.get("/admin", (req, res) => {
  item.find({}).then((items) => {
    // res.json(items)
    res.render("admin.ejs", { item: items });
  });
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});





app.delete("/admin/inventory/:food", (req, res) => {
  const filter = { food: req.params.food };

  item.findOneAndDelete(filter).then((data) => {
    res.json(data);
  });
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});





// Admin Events

app.get("/adminevent", (req, res) => {
  event.find({}).then((events) => {
    // res.json(items)
    res.render("adminevent.ejs", { event: events });
  });
  app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.get("/admineventtype", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/adminevent.html");
});

app.post("/adminevent", (req, res) => {
  const newEvent = new event({
    event: req.body.event,
    info: req.body.info,
    date: req.body.date,
    ages: req.body.ages,
  });

  newEvent.save().then((newEvent) => {
    res.json(newEvent);
  });
});




// CRUD

app.get("/items", (req, res) => {
    event.find({}).then((items) => {
        // res.json(items)
        res.render("items.ejs", {
            item: items
        });
    });
});

app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});
  
