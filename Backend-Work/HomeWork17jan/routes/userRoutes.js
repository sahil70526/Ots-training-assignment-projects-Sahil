import express from 'express';
import { getAllUsers,createUser,updateUserData,updateUserByPatch,deleteData } from '../controllers/userControllers.js';

const router= express.Router();

router.get('/',getAllUsers);

router.post('/',createUser);

router.put('/:id',updateUserData);
router.patch('/:id',updateUserByPatch);
router.delete('/:id',deleteData)



export default router;