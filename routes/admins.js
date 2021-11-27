
const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const { emailExists, statusPending } = require('../helpers/db-validators');

const { adminsGet, 
        adminsPost,
        adminsPatch,
        adminsDelete
      } = require('../controllers/admins');

const router = Router();

router.get('/', adminsGet );

router.post('/',[
    check('name', 'The name is required').not().isEmpty(),
    check('lastName', 'The lastName is required').not().isEmpty(),
    check('email', 'The email not is valid').isEmail(),
    check('email').custom( emailExists ),
    check('role', 'The role is required').not().isEmpty(),
    validateFields
], adminsPost );

router.patch('/:id',[
    check('id', 'Not is valid ID').isMongoId(),
    validateFields
],adminsPatch );

router.delete('/:id',[
    check('id', 'Not is valid ID').isMongoId(),
    check('id').custom( statusPending ),
    validateFields
], adminsDelete );




module.exports = router;