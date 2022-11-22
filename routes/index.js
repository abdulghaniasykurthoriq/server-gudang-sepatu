import express from 'express'
import { deleteSepatuById, getSepatu, getSepatuById, saveSepatu, updateSepatuById } from '../controllers/sepatuController.js';
import { verifyToken } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getSepatu)

router.get('/:id', verifyToken ,getSepatuById)

router.patch('/:id', updateSepatuById)

router.post('/', saveSepatu)

router.delete('/:id', deleteSepatuById)


export default router;