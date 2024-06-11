const mongoose = require("mongoose");
const ejs = require("ejs");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());

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

const itemSchema = new mongoose.Schema({
  food: { type: String, required: true },
  type: { type: String, required: true },
  allergy: { type: String },
  quantity: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);

app.get("/inventory", (req, res) => {
  Item.find({}).then((items) => {
    res.render("inventory.ejs", { item: items });
  });
});

app.get("/foodtype", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/inventory.html");
});

app.post("/inventory", (req, res) => {
  const newItem = new Item({
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

  Item.findOneAndDelete(filter).then((data) => {
    res.json(data);
  });
});

app.get("/", (req, res) => {
  const data = {
    name: "Neighborhood Fridge History",
    followers: 100,
  };

  res.render("history.ejs", data);
});

const eventSchema = new mongoose.Schema({
  event: { type: String },
  info: { type: String },
  date: { type: String },
  ages: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

app.get("/event", (req, res) => {
  Event.find({}).then((events) => {
    res.render("event.ejs", { event: events });
  });
});

app.get("/eventtype", (req, res) => {
  res.sendFile(__dirname + "/public/event.html");
});

app.post("/event", (req, res) => {
  const newEvent = new Event({
    event: req.body.event,
    info: req.body.info,
    date: req.body.date,
    ages: req.body.ages,
  });

  newEvent.save().then((newEvent) => {
    res.json(newEvent);
  });
});

app.get("/admintype", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/admin.html");
});

app.post("/admin", (req, res) => {
  const newItem = new Item({
    food: req.body.food,
    type: req.body.type,
    allergy: req.body.allergy,
    quantity: req.body.quantity,
  });

  newItem.save().then((newItem) => {
    res.json(newItem);
  });
});

app.get("/admin", (req, res) => {
  Item.find({}).then((items) => {
    res.render("admin.ejs", { item: items });
  });
});

app.delete("/admin/inventory/:food", (req, res) => {
  const filter = { food: req.params.food };

  Item.findOneAndDelete(filter).then((data) => {
    res.json(data);
  });
});

app.get("/adminevent", (req, res) => {
  Event.find({}).then((events) => {
    res.render("adminevent.ejs", { event: events });
  });
});

app.get("/admineventtype", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/adminevent.html");
});

app.post("/adminevent", (req, res) => {
  const newEvent = new Event({
    event: req.body.event,
    info: req.body.info,
    date: req.body.date,
    ages: req.body.ages,
  });

  newEvent.save().then((newEvent) => {
    res.json(newEvent);
  });
});

app.get("/items", (req, res) => {
  Item.find({}).then((items) => {
    res.render("items.ejs", { item: items });
  });
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server running");
});
