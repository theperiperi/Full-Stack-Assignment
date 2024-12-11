import express from 'express';
import { createOffer, getOffers, updateOfferStatus } from '../controllers/offers';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.use(authenticateToken);

router.post('/', createOffer);
router.get('/', getOffers);
router.patch('/:id/status', updateOfferStatus);

export default router; 