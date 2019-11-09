import Router from 'express';
import upload from '../controllers/upload/upload.js';
import enviarFile from '../controllers/upload/enviarFile.js';


const router = Router();

router.put('/:id', upload);
router.get('/:id', enviarFile);


export default router;