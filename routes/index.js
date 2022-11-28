import express from 'express'
import { deleteSepatuById, getSepatu, getSepatuById, saveSepatu, updateSepatuById } from '../controllers/sepatuController.js';
import { verifyToken } from '../controllers/userController.js';

const router = express.Router();

router.get('/sepatu', getSepatu)

router.get('/sepatu/:id' ,getSepatuById)

router.patch('/sepatu/:id', updateSepatuById)

router.post('/sepatu', saveSepatu)

router.delete('/sepatu:id', deleteSepatuById)


export default router;