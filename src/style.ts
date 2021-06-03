export type StyleFormat = 'uso' | 'uso-android';

export type StyleAuthor = {
	id: number;
	name: string;
	homepage?: string;
};

export type StyleInfo = {
	name: string;
	description: string;
	additionalInfo: string;
	category: string;
	createdAt: string;
	updatedAt: string;
	license: string;
	author: StyleAuthor;
};

export type StyleInstalls = {
    total: number;
    weekly: number;
};

export type StyleStats = {
	installs: StyleInstalls;
	rating: number;
};

export type StyleScreenshot = {
	name: string;
	archived: boolean;
};

export type StyleScreenshots = {
	main: StyleScreenshot;
	additional?: Array<StyleScreenshot>;
};

export type StyleDiscussionStats = {
    discussionsCount: number;
    commentsCount: number;
};

export type StyleDiscussion = {
    id: number;
    title: string;
    createdAt: string;
    author: StyleAuthor;
};

export type StyleDiscussions = {
	stats: StyleDiscussionStats;
	data: Array<StyleDiscussion>;
};

export type StyleSettingType = 'dropdown' | 'toggle' | 'image' | 'color' | 'text';

export type StyleSettingOption = {
    key: string;
    label: string;
    value: string;
    default: boolean;
};

export type StyleSetting = {
    key: string;
    label: string;
    type: StyleSettingType;
    options?: Array<StyleSettingOption>;
};

export type StyleCode = {
	css: string;
	settings?: Array<StyleSetting>;
};

export type Style = {
	id: number;
	format: StyleFormat;
	info: StyleInfo;
	stats: StyleStats;
	screenshots: StyleScreenshots;
	discussions: StyleDiscussions;
	style: StyleCode;
};