import express from 'express';
import { deleteAll, retrieveAll, saveHistory } from '../controllers/historyController.js';



const router = express.Router();

router.get('/history', retrieveAll);

router.post('/history', saveHistory);

router.delete('/history', deleteAll);


export default router;