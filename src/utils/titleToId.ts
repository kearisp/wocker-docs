export const titleToId = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[#?]/, "")
        .replace(/\s/g, "-");
};
