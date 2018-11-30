import { ISettingsState } from '../../../types/stateAndAction';

export interface ILayoutStateProps {
    dateRange: ISettingsState['dateRange'];
    from: ISettingsState['from'];
    hitsPerPage: ISettingsState['hitsPerPage'];
    searchType: ISettingsState['searchType'];
    showSidebar: boolean;
    sortOrder: ISettingsState['sortOrder'];
    to: ISettingsState['to'];
}

export interface ILayoutDispatchProps {
    apply: (settings: ISettingsState) => Promise<any>;
    toggle: () => void;
}

export interface ILayoutComponentState {
    dateRange: ISettingsState['dateRange'];
    from: ISettingsState['from'];
    hitsPerPage: ISettingsState['hitsPerPage'];
    searchType: ISettingsState['searchType'];
    sortOrder: ISettingsState['sortOrder'];
    to: ISettingsState['to'];
}

export type ILayoutProps = ILayoutStateProps & ILayoutDispatchProps;
