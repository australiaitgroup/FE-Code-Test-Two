export interface ISearchResult {
    hits: IHit[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    processingTimeMS: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
}

export interface IHit {
    created_at: string;
    title: string | null;
    url: string | null;
    author: string;
    points: number;
    story_text: string | null;
    comment_text: string | null;
    num_comments: number | null;
    story_id: number | null;
    story_title: string | null;
    story_url: string | null;
    parent_id: number | null;
    created_at_i: number;
    _tags: string[];
    objectID: string;
    _highlightResult: {
        author: IHightlightResultItem;
        comment_text: IHightlightResultItem;
        story_text: IHightlightResultItem;
        story_title: IHightlightResultItem,
        title: IHightlightResultItem;
        url: IHightlightResultItem;
    };
}

interface IHightlightResultItem {
    value: string;
    matchLevel: string;
    fullyHighlighted?: boolean;
    matchedWords: string[];
}

export const enum SearchType {
    All = 'All',
    Stories = 'Stories',
    Comments = 'Comments',
}

export const enum SortOrder {
    Popularity = 'Popularity',
    Date = 'Date',
}

export const enum DateRange {
    AllTime = 'All Time',
    LastDay = 'Last 24 hours',
    PastWeek = 'Past Week',
    PastMonth = 'Past Month',
    PastYear = 'Past Year',
    Custom = 'Custom',
}
