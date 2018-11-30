import { IHit } from '../../../types/search';
import { ISettingsState } from '../../../types/stateAndAction';

export interface ISearchStateProps {
    error: Error | null;
    hits: IHit[] | undefined;
    isFetching: boolean;
    nbHits: number | undefined;
    nbPages: number | undefined;
    page: number;
    settings: ISettingsState;
}

export interface ISearchDispatchProps {
    changePage: (page: number) => Promise<any>;
    handleInputChange: (input: string) => void;
    search: () => Promise<any>;
}

export type ISearchProps = ISearchStateProps & ISearchDispatchProps;
