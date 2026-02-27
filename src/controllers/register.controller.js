import Registration from "../models/register.js";

const registerController = {
    async createRegister(req, res){
        try{
            const {category, type, description, value} = req.body

            if (!category || !type || !description || !value){
                return res.status(400).json({
                    message: "Please check the fields again!"
                });
            }

            if(value !== undefined && value < 0){
                return res.status(400).json({
                    message: "The value cannot be negative."
                });
                }
            
            
            
            if (!["revenue","expense"].includes(type)){
                return res.status(400).json({
                    message: "Check if the type is revenue or expense."
                });
            }
            

          const register = await Registration.create({
            category,
            type,
            description,
            value,
            })

        return res.status(201).json(register);
    } catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Error in registration",
        });
    }
    },

    async updateRegister(req, res){
        try{
            const {id} = req.params;
            const {category, type, description, value} = req.body;

            const register = await Registration.findByPk(id);

            if(!register){
                return res.status(404).json({
                    message: "Register not found"
                })
            }

            if(value !== undefined && value < 0){
                return res.status(400).json({
                    message: "The value cannot be negative."
                });
                }
            
            
            if (!["revenue","expense"].includes(type)){
                return res.status(400).json({
                    message: "Check if the type is revenue or expense."
                });
            }

            await register.update({
                category,
                type,
                description,
                value,               
            });

            return res.json(register);
        } catch (error){
            console.error(error);
            return res.status(500).json({
                message: "Error in update register",
        })
    }},

    async deleteRegister(req, res){
        try{
            const {id} = req.params;

            const register = await Registration.findByPk(id);
            if(!id){
                return res.status(400).json({
                    message: "register not found"
                })
            }

            await register.destroy()

            return res.json({
            message: `Register ${id} deleted successfully`
            });

        }catch(error){
            console.error(error);
            return res.status(500).json({
                message: "Error in delete register"
            })
        }
    }


};

export default registerController;