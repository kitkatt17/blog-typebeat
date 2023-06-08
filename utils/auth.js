const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        // If user is not logged in, redirect to login page/route
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;