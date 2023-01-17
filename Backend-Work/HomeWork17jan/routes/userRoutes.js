import express from 'express';
import { getAllUsers,createUser,updateUserData,deleteData } from '../controllers/userControllers.js';

const router= express.Router();

router.get('/',getAllUsers);

router.post('/',createUser);

router.put('/:id',updateUserData);
router.delete('/:id',deleteData)



export default router;