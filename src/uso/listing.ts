import { UsoStyle } from "./style";

export type UsoListing = {
    data: Array<UsoStyle>;
    current_page: number;
    per_page: number;
    total_pages: number;
    total_entries: number;
};

export type UsoHomepageItem = {
    site: string;
    styles: {
        data: Array<UsoStyle>;
    };
    see_more: string;
};

export type UsoHomepage = {
    top_six: Array<UsoStyle>;
    first: UsoHomepageItem;
    second: UsoHomepageItem;
    third: UsoHomepageItem;
};