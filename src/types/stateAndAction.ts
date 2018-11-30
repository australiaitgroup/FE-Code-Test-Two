import { DateRange, ISearchResult, SearchType, SortOrder } from './search';

export interface IState {
    navigation: INavigationState;
    search: ISearchState;
    settings: ISettingsState;
}

export interface INavigationState {
    showSidebar: boolean;
}

export interface ISearchState {
    error: Error | null;
    isFetching: boolean;
    searchFor: string;
    input: string;
    result: ISearchResult;
    page: number;
}

export interface ISettingsState {
    dateRange: DateRange;
    from: string;
    hitsPerPage: number;
    searchType: SearchType;
    sortOrder: SortOrder;
    to: string;
}

export interface IAction {
    type: string;
    [key: string]: any;
}
