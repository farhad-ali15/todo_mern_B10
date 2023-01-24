import jwt from "jsonwebtoken";
export const isAuthenticatedUser = async (req, res, next, err) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new Error('please login to access this resource'))
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
  } catch (err) {
    next(err)
  }
  next()
}


export const isAuthorizedUser = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new Error('unauthorized user'))
    }
    next()
  }
}