import { Router } from 'express';
import {
  getNamedAvatar,
  getGradientAvatar,
} from '../../controlers/avatar.controler.js';

const router = Router();

router.route('/avatar/t/d').get(getNamedAvatar);
router.route('/avatar/t/g').get(getGradientAvatar);

export default router;
