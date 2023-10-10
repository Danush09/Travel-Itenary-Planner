// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const { default: mongoose } = require("mongoose");

// app.listen(3000);
// app.use(express.static(__dirname)); //for css file
// app.use(bodyParser.json());

// mongoose.connect("mongodb://Localhost:27017/mydb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// let db = mongoose.connection;

// db.on("error", () => console.log("Error in connecting to Database"));
// db.once("open", () => console.log("Connected to Database"));

// app.get("/", (req, res) => {
//   res.sendFile("home_page_html.html", { root: __dirname });
//   res.set({ "Allow-access-Allow-Origin": "*" });
//   return res.redirect("home_page_html.html");
// });
// app.get("/home_page_html.html", (req, res) => {
//   res.sendFile("home_page_html.html", { root: __dirname });
// });
// app.get("/packages.html", (req, res) => {
//   res.sendFile("packages.html", { root: __dirname });
// });
// app.get("/packageagra.html", (req, res) => {
//   res.sendFile("packageagra.html", { root: __dirname });
// });
// app.get("/packageand.html", (req, res) => {
//   res.sendFile("packageand.html", { root: __dirname });
// });
// app.get("/packagegoa.html", (req, res) => {
//   res.sendFile("packagegoa.html", { root: __dirname });
// });
// app.get("/packagejai.html", (req, res) => {
//   res.sendFile("packagejai.html", { root: __dirname });
// });
// app.get("/packagelad.html", (req, res) => {
//   res.sendFile("packagelad.html", { root: __dirname });
// });
// app.get("/payment.html", (req, res) => {
//   res.sendFile("payment.html", { root: __dirname });
// });
// app.get("/book_page.html", (req, res) => {
//   res.sendFile("book_page.html", { root: __dirname });
// });
// app.use((req, res) => {
//   res.status(404);
//   res.write("<h1></h1>page not found</h1>");
// });

// const users = [
//   { email: "khwab@gmail.com", password: "Khwab@1234" },
//   { email: "parv@gmail.com", password: "Parv@12345" },
//   { email: "priyansh@gmail.com", password: "Priyansh@123456" },
// ];
// app.post("/hi", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (!user) {
//     return res.send("(Invalid email or password)");
//   }
//   res.sendFile("home_page_html.html", { root: __dirname });
// });

// app.post("/sign_up", (req, res) => {
//   let fname_sgn = req.body.fname_sgn;
//   let lname_sgn = req.body.lname_sgn;
//   let email_sgn = req.body.email_sgn;
//   let password_sgn = req.body.password_sgn;
//   let cnf_password_sgn = req.body.cnf_password_sgn;

//   let data = {
//     fname_sgn: fname_sgn,
//     lname_sgn: lname_sgn,
//     password_sgn: password_sgn,
//     cnf_password_sgn: cnf_password_sgn,
//   };

//   db.collection("users").insertOne(data, (err, collection) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Record Inserted Sucessfully");
//   });

//   return res.redirect("signup_success.html");
// });

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));
mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
  usenewUrlparser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
const users_schema = new mongoose.Schema({
  fname_sgn: String,
  lname_sgn: String,
  email_sgn: String,
  password_sgn: String,
  cnf_password_sgn: String,
});
const users_model = mongoose.model("users_model", users_schema);

// const user = mongoose.model("user", users_data);
app.listen(8000);
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile("home_page_html.html", { root: __dirname });
});
app.get("/home_page_html.html", (req, res) => {
  res.sendFile("home_page_html.html", { root: __dirname });
});
app.get("/packages.html", (req, res) => {
  res.sendFile("packages.html", { root: __dirname });
});
app.get("/packageagra.html", (req, res) => {
  res.sendFile("packageagra.html", { root: __dirname });
});
app.get("/packageand.html", (req, res) => {
  res.sendFile("packageand.html", { root: __dirname });
});
app.get("/packagegoa.html", (req, res) => {
  res.sendFile("packagegoa.html", { root: __dirname });
});
app.get("/packagejai.html", (req, res) => {
  res.sendFile("packagejai.html", { root: __dirname });
});
app.get("/packagelad.html", (req, res) => {
  res.sendFile("packagelad.html", { root: __dirname });
});
app.get("/payment.html", (req, res) => {
  res.sendFile("payment.html", { root: __dirname });
});
app.get("/book_page.html", (req, res) => {
  res.sendFile("book_page.html", { root: __dirname });
});

// const users = [
//   { email: "khwab@gmail.com", password: "Khwab@1234" },
//   { email: "parv@gmail.com", password: "Parv@12345" },
//   { email: "priyansh@gmail.com", password: "Priyansh@123456" },
// ];

app.post("/sign_up", (req, res) => {
  let fname_sgn = req.body.fname_sgn;
  let lname_sgn = req.body.lname_sgn;
  let email_sgn = req.body.email_sgn;
  let password_sgn = req.body.password_sgn;
  let cnf_password_sgn = req.body.cnf_password_sgn;

  let data = {
    fname_sgn: fname_sgn,
    lname_sgn: lname_sgn,
    email_sgn: email_sgn,
    password_sgn: password_sgn,
    cnf_password_sgn: cnf_password_sgn,
  };

  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Sucessfully");
  });

  return res.redirect("signup_success.html");
});

app.post("/hi", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // const user = users.find(
  //   (user) => user.email === email && user.password === password
  // );
  const result_1 = users_model.find({
    email_sqn: req.body.email,
    password_sgn: req.body.password,
  });

  if (!result_1) {
    return res.send("(Invalid email or password)");
  }
  res.sendFile("home_page_html.html", { root: __dirname });
});

// app.use((req, res) => {
//   res.status(404);
//   res.write("<h1></h1>page not found</h1>");
// });
