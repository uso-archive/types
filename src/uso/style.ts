import { UsoUser } from "./user";

export type UsoDiscussion = {
    id: number;
    name: string;
    rating: number;
    created: string;
    author_name: string;
    author_id: number;
};

export type UsoStyleSettingOption = {
    id: number;
    style_setting_id: number;
    label: string;
    value: string;
    default: boolean;
    ordinal: number;
    install_key: string;
};

export type UsoStyleSetting = {
    id: number;
    style_id: number;
    install_key: string;
    label: string;
    ordinal: number;
    setting_type: "dropdown" | "image" | "color" | "text";
    style_setting_options: Array<UsoStyleSettingOption>;
};

export type UsoStyle = {
    id: number;
    name: string;
    description?: string;
    user: UsoUser;
    updated?: string;
    weekly_install_count: number;
    total_install_count: number;
    rating?: number;
    after_screenshot_name?: string;
    obsoleting_style_id?: number;
    obsoleting_style_name?: string;
    obsolete: number;
    admin_delete_reason_id?: unknown;
    obsoletion_message?: string;
    screenshots?: Array<string>;
    license?: string;
    created: string;
    category: "site" | "global" | "android";
    raw_subcategory: string;
    subcategory: string;
    additional_info?: string;
    css: string;
    discussions: Array<UsoDiscussion>;
    discussionsCount: number;
    commentsCount: number;
    userjs_url: string;
    style_settings: Array<UsoStyleSetting>;
};