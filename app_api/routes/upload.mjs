import Router from 'express';
import upload from '../controllers/upload/upload.mjs';
import enviarFile from '../controllers/upload/enviarFile.mjs';


const router = Router();

router.put('/:id', upload);
router.get('/:img', enviarFile);


export default router;