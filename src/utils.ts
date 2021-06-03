export function filenameFromScreenshotUrl(url: string) {
	if (!url) return undefined;
	const rgx = "style_screenshots\\/(?<filename>.*?)\\?";
	const match = new RegExp(rgx).exec(url);
	if (!match || !match.groups || !match.groups.filename) return undefined;
	return match.groups.filename;
}

export function licenseToSpdx(license: string) {
	switch (license) {
	case "publicdomain":
		return "CC0-1.0";
	case "ccby":
		return "CC-BY-4.0";
	case "ccbysa":
		return "CC-BY-SA-4.0";
	case "ccbynd":
		return "CC-BY-ND-4.0";
	case "ccbync":
		return "CC-BY-NC-4.0";
	case "ccbyncsa":
		return "CC-BY-NC-SA-4.0";
	case "ccbyncnd":
		return "CC-BY-NC-ND-4.0";
	}
	return "NO-REDISTRIBUTION";
}