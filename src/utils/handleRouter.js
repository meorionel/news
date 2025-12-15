export const excludeRoute = (path) => {
	const excludePaths = ["/", "/sspai", "/weaterDate", "/NewsFeed"];
	return excludePaths.includes(path);
};
