
const login = (req, res) => {
  res.send('User login');
}

const register = (req, res) => {
  res.send('User registration');
}

export default { 
    login,
    register
 };