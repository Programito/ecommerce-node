import Router from 'express';
import upload from '../controllers/upload/upload.js';
import enviarFile from '../controllers/upload/enviarFile.js';


const router = Router();

router.put('/:id', upload);
router.get('/:img', enviarFile);


export default router;