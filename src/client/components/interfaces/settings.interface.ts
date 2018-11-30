import { ISettingsState } from '../../../types/stateAndAction';

export interface ISettingsProps {
    apply: () => Promise<any>;
    dateRange: ISettingsState['dateRange'];
    from: ISettingsState['from'];
    hitsPerPage: ISettingsState['hitsPerPage'];
    searchType: ISettingsState['searchType'];
    setState: (state: object) => void;
    sortOrder: ISettingsState['sortOrder'];
    to: ISettingsState['to'];
    toggle: () => void;
}
