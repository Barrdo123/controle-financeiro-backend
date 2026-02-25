import Registration from "../models/register.js";

const registerController = {
    async createRegister(req, res){
        try{
            const {category, type, description, value, userId} = req.body

            if (!category || !type || !description || !value){
                return res.status(400).json({
                    message: "Please check the fields again!"
                });
            }

            if(value < 0){
                return res.status(400).json({
                    message: "The value cannot be negative."
                });
            }
            
          if (!["revenue","expense"].includes(type)){
            return res.status(400).json({
                message: "Check if the type is gain or expense."
            });
          }

          const register = await Registration.create({category, type, description, value, userId})

        return res.status(201).json(register);
    } catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Error in registration",
        });
    }
    }


};

export default registerController;