import { UsoDiscussion, UsoStyle, UsoStyleSetting, UsoStyleSettingOption, UsoUser } from "./uso";
import { filenameFromScreenshotUrl, licenseToSpdx } from "./utils";

export type StyleFormat = 'uso' | 'uso-android' | 'usercss';

export class StyleAuthor {
	constructor(usoUser: UsoUser) {
		return {
			id: usoUser.id,
			name: usoUser.name,
			homepage: usoUser.homepage
		};
	}
	id: number;
	name: string;
	homepage?: string;
};

export class StyleInfo {
	constructor(usoStyle: UsoStyle) {
		return {
			name: usoStyle.name,
			description: usoStyle.description,
			additionalInfo: usoStyle.additional_info,
			category: usoStyle.category,
			createdAt: usoStyle.created,
			updatedAt: usoStyle.updated,
			license: licenseToSpdx(usoStyle.license),
			author: new StyleAuthor(usoStyle.user)
		}
	}
	name: string;
	description?: string;
	additionalInfo?: string;
	category: string;
	createdAt: string;
	updatedAt: string;
	license?: string;
	author: StyleAuthor;
};

export class StyleInstalls {
	constructor(usoStyle: UsoStyle) {
		return {
			total: usoStyle.total_install_count,
			weekly: usoStyle.weekly_install_count
		};
	}
	total: number;
	weekly: number;
};

export class StyleStats {
	constructor(usoStyle: UsoStyle) {
		return {
			installs: new StyleInstalls(usoStyle),
			rating: usoStyle.rating
		}
	}
	installs: StyleInstalls;
	rating?: number;
};

export class StyleScreenshot {
	name: string;
	archived: boolean;
};


export class StyleScreenshots {
	constructor(usoStyle: UsoStyle) {
		return {
			main: {
				name: filenameFromScreenshotUrl(usoStyle.after_screenshot_name),
				archived: false
			},
			additional: usoStyle.screenshots.map(e => ({ name: filenameFromScreenshotUrl(e), archived: false }))
		}
	}
	main: StyleScreenshot;
	additional?: Array<StyleScreenshot>;
};

export class StyleDiscussionStats {
	constructor(usoStyle: UsoStyle) {
		return {
			discussionsCount: usoStyle.discussionsCount,
			commentsCount: usoStyle.commentsCount
		}
	}
	discussionsCount: number;
	commentsCount: number;
};

export class StyleDiscussion {
	constructor(usoDiscussion: UsoDiscussion) {
		return {
			id: usoDiscussion.id,
			title: usoDiscussion.name,
			author: {
				id: usoDiscussion.author_id,
				name: usoDiscussion.author_name
			},
			createdAt: usoDiscussion.created
		}
	}
	id: number;
	title: string;
	createdAt: string;
	author: StyleAuthor;
};

export class StyleDiscussions {
	constructor(usoStyle: UsoStyle) {
		return {
			stats: new StyleDiscussionStats(usoStyle),
			data: usoStyle.discussions.map(e => new StyleDiscussion(e))
		}
	}
	stats: StyleDiscussionStats;
	data: Array<StyleDiscussion>;
};

export type StyleSettingType = 'dropdown' | 'toggle' | 'image' | 'color' | 'text';

export class StyleSettingOption {
	constructor(usoStyleSettingOption: UsoStyleSettingOption) {
		return {
			key: usoStyleSettingOption.install_key,
			label: usoStyleSettingOption.label,
			value: usoStyleSettingOption.value,
			default: usoStyleSettingOption.default
		}
	}
	key: string;
	label: string;
	value: string;
	default: boolean;
};

export class StyleSetting {
	constructor(usoStyleSetting: UsoStyleSetting) {
		return {
			key: usoStyleSetting.install_key,
			label: usoStyleSetting.label,
			type: usoStyleSetting.setting_type,
			options: usoStyleSetting.style_setting_options.map(e => new StyleSettingOption(e))
		}
	}
	key: string;
	label: string;
	type: StyleSettingType;
	options: Array<StyleSettingOption>;
};

export class StyleCode {
	constructor(usoStyle: UsoStyle) {
		return {
			css: usoStyle.css,
			settings: usoStyle.style_settings.map(e => new StyleSetting(e))
		}
	}
	css: string;
	settings?: Array<StyleSetting>;
};

export class Style {
	constructor(usoStyle: UsoStyle) {
		return {
			id: usoStyle.id,
			format: usoStyle.category === "android" ? "uso-android" : "uso",
			info: new StyleInfo(usoStyle),
			discussions: new StyleDiscussions(usoStyle),
			screenshots: new StyleScreenshots(usoStyle),
			stats: new StyleStats(usoStyle),
			style: new StyleCode(usoStyle)
		}
	}
	id: number;
	format: StyleFormat;
	info: StyleInfo;
	stats: StyleStats;
	screenshots: StyleScreenshots;
	discussions: StyleDiscussions;
	style: StyleCode;
};
