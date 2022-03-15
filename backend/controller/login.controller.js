import User from '../model/User.model.js';

export const login = async (req, res) => {
	const { username, password } = req.body;
  
	const user = await User.findOne({ username }).catch(err => {
		console.log('Error: ', err);
	});

	if (!user)
		return res.status(400).json({
			error: true,
			message: 'User was not found!',
		});

	res.status(200).json({
		error: false,
		message: 'Login succesfully!',
	});
};
