import  {Router} from 'express';
import uc from '../controllers/usercontroller.js';
const router = Router();

// Sample user data

router.post('/register', uc.register);
router.post('/login', uc.login);


export default router;