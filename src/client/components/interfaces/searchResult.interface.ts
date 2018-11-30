import { IHit } from '../../../types/search';

export interface ISearchResultProps {
    error: Error | null;
    hits?: IHit[];
    isFetching: boolean;
    nbHits?: number;
}
