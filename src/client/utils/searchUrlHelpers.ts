import * as moment from 'moment';

import { DateRange, SearchType, SortOrder } from '../../types/search';
import { ISettingsState } from '../../types/stateAndAction';

export default function generateURL(
    settings: ISettingsState,
    input: string,
    page?: number,
): string {
    const base = 'https://hn.algolia.com/api/v1/';

    const endpoint = settings.sortOrder === SortOrder.Date
        ? 'search_by_date'
        : 'search';

    const tags = getTags(settings.searchType);

    const dateRange = getDateRange(settings);

    const hitsPerPage = `&hitsPerPage=${settings.hitsPerPage}`;

    const pageQuery = page ? `&page=${page - 1}` : '';

    return `${base}${endpoint}?query=${input}${tags}${dateRange}${hitsPerPage}${pageQuery}`;
}

export function getTags(searchType: SearchType): string {
    switch (searchType) {
        case SearchType.Stories:
            return '&tags=story';

        case SearchType.Comments:
            return'&tags=comment';

        default:
            return '&tags=(story,comment)';
    }
}

export function getDateRange(settings: ISettingsState): string {
    const prefix = '&numericFilters=created_at_i>';

    const generateQuery = (amount, unit) => prefix + moment().subtract(amount, unit).unix();

    switch (settings.dateRange) {
        case DateRange.LastDay:
            return generateQuery(24, 'hours');

        case DateRange.PastWeek:
            return generateQuery(7, 'days');

        case DateRange.PastMonth:
            return generateQuery(1, 'months');

        case DateRange.PastYear:
            return generateQuery(1, 'years');

        case DateRange.Custom:
            const [from, to] = [settings.from, settings.to]
                .map(time => moment(time).unix())
                .sort((a, b) => a - b);
            const ONE_DAY_IN_SECOND = 86400;
            return `${prefix}${from},created_at_i<${to + ONE_DAY_IN_SECOND}`; // Make target date inclusive

        default:
            return '';
    }
}
