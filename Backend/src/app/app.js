import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    // res.status(200).send("Hello World!");
    res.status(200).json({
        message: "Hello, World!"
    });
})

app.post("/api/auth/register", (req, res) => {
    const {email, name, password} = req.body;
    
    /*
        Save data to database
    */

    const token = jwt.sign(
    {
        email, name // _id
    },
    "4e4989b3352cf41f36801ada442a46b4dc511e0afdf06c0438354447e713377c"
    )

    res.status(201).json({
        message: "User created successfully!",
        data : {
            user : {
                email, name
            },
            token
        }
    })
})

export default app;
