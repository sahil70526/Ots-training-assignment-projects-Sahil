import express from 'express'
import { getAllBooks,insertBook,specificBook,updateBook,deleteBook } from '../controllers/bookControllers.js';

const router= express.Router();

router.route('/').get(getAllBooks).post(insertBook)

router.route('/:id').get(specificBook).patch(updateBook).delete(deleteBook)
export default router;