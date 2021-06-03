import { StyleFormat } from "./style";

export type CategoryIndex = Array<CategoryIndexItem>;
export type CategoryIndexItem = {
    /** Name */
	n: string;
	/** Styles */
	s: StyleIndex;
};

export type StyleIndex = Array<StyleIndexItem>;
export type StyleIndexItem = {
	/** Format */
	f: StyleFormat;
	/** ID */
	i: number;
	/** Name */
	n: string;
    /** Description */
    d: string;
	/** Category */
	c: string;
	/** Updated at */
	u: number;
	/** Total installs */
	t: number;
	/** Weekly installs */
	w: number;
	/** Rating */
	r: number;
	/** Author ID */
	ai: number;
	/** Author name*/
	an: string;
	/** Screnshot name */
	sn: string;
	/** Is screenshot archived */
	sa: boolean;
};