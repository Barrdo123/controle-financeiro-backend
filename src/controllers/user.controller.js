import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const userController = {
    async register(req, res){
        try{
            const {name, email, password} = req.body;

            if(!name || !email || !password){
                return res.status(400).json({
                    message: "Please check the fields again!"
                });
            }

            const hash = await bcrypt.hash(password, 12);

            const user = await User.create({name, email, password: hash});
            const data = {id: user.id, email: user.email};
            return res.status(201).json(data);
    } catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Error in registration",
        })
    }},

        async login(req, res){
            try{
                console.log("req.headers", req.headers);
                console.log("req.body", req.body);

                const {email, password} = req.body;

                const user = await User.findOne({where: {email}});
                if(!user) return res.status(404).json({message: "User not found"});

                const ok= await bcrypt.compare(password, user.password);
                if (!ok) return res.status(401).json({
                    message: "invalid password"
                })

                const token = jwt.sign(
                    {id: user.id, email: user.email},
                    process.env.JWT_SECRET,
                    {expiresIn: process.env.JWT_EXPIRES_IN}
                )

                return res.json({token});
            } catch(error){
                console.error(error);
                return res.status(500).json({
                    message: "Error in login",
                })
}}};

export default userController;