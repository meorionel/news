export const excludeRoute = (path) => {
	const excludePaths = ["/", "/sspai", "/weaterDate"];
	return excludePaths.includes(path);
};
