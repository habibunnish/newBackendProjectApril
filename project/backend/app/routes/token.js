const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey';
const payload = { email: 'nisha111@gmail.com', isUser: true };
const options = { expiresIn: '1h' };
const token = jwt.sign(payload, secretKey, options);
res.json({ token });
