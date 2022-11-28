import History from "../models/History.js";




export const retrieveAll = async(req,res) => {
    try {
        const history = await History.find();
        return res.json(history);
    } catch (error) {
        res.json({message:error.message})
    }
}

export const saveHistory = async(req,res) => {
    const history = new History(req.body);
    try {
        const newHistory = history.save();
        res.status(201).json(newHistory);
    } catch (error) {
        res.json({message:error.message})
    }
}

export const deleteAll = async(req,res) => {
    try {
        const history = await History.deleteMany();
        res.status(200).json(history)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

