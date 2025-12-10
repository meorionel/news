export const formatTime = (time) => {
	const date = new Date(time);
	const now = new Date();
	const diff = now - date;
	const minuteMs = 60 * 1000;
	const hourMs = 60 * minuteMs;
	const dayMs = 24 * hourMs;
	const monthMs = 30 * dayMs;
	const yearMs = 365 * dayMs;

	if (diff < minuteMs) {
		return "刚刚";
	} else if (diff < hourMs) {
		return `${Math.floor(diff / minuteMs)} 分钟前`;
	} else if (diff < dayMs) {
		return `${Math.floor(diff / hourMs)} 小时前`;
	} else if (diff < monthMs) {
		return `${Math.floor(diff / dayMs)} 天前`;
	} else if (diff < yearMs) {
		return `${Math.floor(diff / monthMs)} 个月前`;
	} else {
		return `${Math.floor(diff / yearMs)} 年前`;
	}
};
