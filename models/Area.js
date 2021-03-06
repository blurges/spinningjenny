module.exports = (sequelize, DataTypes) => {
	const Area = sequelize.define('Area', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		allowsSelfRegistration: {
			type: DataTypes.BOOLEAN,
			validate: {
				isIn: {
					args: [[true, false]],
					msg: 'Only yes or no answers'
				}
			}
		}
	})

	return Area
}
