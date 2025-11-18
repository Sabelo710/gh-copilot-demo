// validate date from text input in french format and convert it to a date object

export function isValidGuid(guid: string): boolean {
    // Matches standard GUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return guidRegex.test(guid);
}

export function isValidIPv6(ip: string): boolean {
    // Matches standard IPv6 format
    const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5})|([0-9a-fA-F]{1,4}:)((:[0-9a-fA-F]{1,4}){1,6})|(:)((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9]))$/;
    return ipv6Regex.test(ip);
}

export function validateAndConvertFrenchDate(dateString: string): Date | null {
    // Regular expression to match French date format (DD/MM/YYYY)
    const frenchDateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(frenchDateRegex);

    if (!match) {
        return null; // Invalid format
    }

    const day = parseInt(match[1]!, 10);
    const month = parseInt(match[2]!, 10) - 1; // Months are zero-based in JS Date
    const year = parseInt(match[3]!, 10);

    const date = new Date(year, month, day);

    // Check if the date is valid
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
        return null; // Invalid date
    }

    return date;
}