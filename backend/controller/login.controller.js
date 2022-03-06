import User from '../model/User.model.js';

export const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).catch(err => {
		console.log('Error: ', err);
	});

	if (!user)
		return res.status(400).json({
			error: true,
			message: 'Email was not found!',
		});

	res.status(200).json({
		error: null,
		message: 'Login succesfully!',
	});
};
