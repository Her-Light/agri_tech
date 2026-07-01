import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
    let token;

    // Check for token in the HTTP Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header (Format: "Bearer <token>")
            token = req.headers.authorization.split(' ')[1];

            // Verify the token using your secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach the user ID to the request object for later use in controllers
            req.user = { id: decoded.id, role: decoded.role };

            // Move to the next middleware or controller
            return next();
        } catch (error) {
            return res
                .status(401)
                .json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res
            .status(401)
            .json({ message: 'Not authorized, no token provided' });
    }
};
