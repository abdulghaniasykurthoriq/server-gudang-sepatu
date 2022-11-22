import Sepatu from '../models/Sepatu.js'

export const getSepatu = async (req,res) => {
    try {
        const sepatu = await Sepatu.find();
        res.json(sepatu)
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getSepatuById = async (req,res) => {
    
    try {
        const sepatu = await Sepatu.findById(req.params.id);
        res.json(sepatu)
    } catch (error) {
        console.error(error)
    }
}


export const saveSepatu = async (req,res) => {
    const sepatu = new Sepatu(req.body);
    try {
        const saveSepatu = await sepatu.save();
        res.status(201).json(saveSepatu);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}



export const updateSepatuById = async (req,res) => {
    const check = Sepatu.findById(req.params.id);
    if(!check) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedSepatu = await Sepatu.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedSepatu);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


export const deleteSepatuById = async (req,res) => {
    const check = Sepatu.findById(req.params.id);
    if(!check) return res.status(404).json({message:"data tidak ditemukan"});
    try {
        const deletedSepatu = await Sepatu.deleteOne({_id:req.params.id});
        res.status(200).json(deletedSepatu)
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}


