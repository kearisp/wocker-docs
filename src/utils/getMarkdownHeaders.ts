const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const headerKeyValueRegExp = /(.*?):[\r\n]?\s+(\[[^\]]+]|.*)/g;


export const getMarkdownHeaders = (markdown: string) => {
    let [, header = ""] = markdown.match(headerRegExp) || [];

    if(!header) {
        return {
            components: []
        };
    }

    try {
        let regexMatches;
        const headers: {
            [key: string]: string | string[];
        } = {
            components: []
        };

        // eslint-disable-next-line no-cond-assign
        while((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
            let [, key, value] = regexMatches;

            if(value[0] === '[') {
                // Need double quotes to JSON parse.
                value = value.replace(/'/g, '"');
                // Remove the comma after the last value e.g. ["foo", "bar",] -> ["foo", "bar"].
                value = value.replace(/,\s+]$/g, ']');
                headers[key] = JSON.parse(value);
            }
            else {
                // Remove trailing single quote yml escaping.
                headers[key] = value.replace(/^'|'$/g, '');
            }
        }

        if(headers.components && typeof headers.components === "string") {
            headers.components = headers.components
                .split(",")
                .map((x) => x.trim())
                .sort();
        }
        else {
            headers.components = [];
        }

        if(headers.hooks && typeof headers.hooks === "string") {
            headers.hooks = headers.hooks
                .split(",")
                .map((x) => x.trim())
                .sort();
        }
        else {
            headers.hooks = [];
        }

        return headers;
    }
    catch(err) {
        throw new Error(
            `docs-infra: ${(err as Error).message} in getHeader(markdown) with markdown: \n\n${header}\n`,
        );
    }
}
