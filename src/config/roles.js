/**
 * roles:
 * admin: the system admin who can controll the system
 * user: a regular user
 */
const allRoles = {
	user: [],
	admin: ["admin"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
	roles,
	roleRights,
};
