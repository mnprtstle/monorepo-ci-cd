import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.send("User added successfully");
});

app.listen(3002, () => console.log("Listening on port 3002"));