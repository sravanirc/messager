import express from "express";

const app = express();
const port = 5001;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Messager: log your thoughts!");
}); //read

app.post("/addNewMessage", (req, res) => {
  console.log(req.body);
  let newmessage = JSON.stringify(req.body);
  res.send(`successfully added new message. ${newmessage}`);
});
// app.post(); //create
// app.delete(); //delete
app.listen(port, () => {
  console.log(`I am server, i am listening at port ${port}`);
});
