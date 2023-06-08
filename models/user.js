const User = require('../models/');

// Function to handle user registration
const registerUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error('Error in user registration');
  }
};

// Function to handle user login
const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !user.validPassword(password)) {
      throw new Error('Invalid email or password');
    }
    return user;
  } catch (error) {
    throw new Error('Error in user login');
  }
};

// Function to handle user logout
const logoutUser = (req, res) => {
  try {
    req.logout();
    res.redirect('/login');
  } catch (error) {
    throw new Error('Error in user logout');
  }
};

module.exports = { registerUser, loginUser, logoutUser };
