import 'react-datepicker/dist/react-datepicker.css';

import * as moment from 'moment';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Button, Menu, Select } from 'semantic-ui-react';

import { ISettingsProps } from '../interfaces/settings.interface';
import { DateRange, SearchType, SortOrder } from '../../../types/search';
import * as s from './Layout.css';

const Settings: React.FunctionComponent<ISettingsProps> = ({
    apply,
    dateRange,
    from,
    hitsPerPage,
    searchType,
    setState,
    sortOrder,
    to,
    toggle,
}) => (
    <React.Fragment>
        <Menu.Item>
            <p>Search type</p>
            <Select
                onChange={handleChange(setState, 'searchType')}
                options={[
                    { text: 'All', value: SearchType.All },
                    { text: 'Stories', value: SearchType.Stories },
                    { text: 'Comments', value: SearchType.Comments },
                ]}
                value={searchType}
            />
        </Menu.Item>
        <Menu.Item>
            <p>Sort order</p>
            <Select
                onChange={handleChange(setState, 'sortOrder')}
                options={[
                    { text: 'Popularity', value: SortOrder.Popularity },
                    { text: 'Date', value: SortOrder.Date },
                ]}
                value={sortOrder}
            />
        </Menu.Item>
        <Menu.Item fitted="horizontally">
            <p>Date range</p>
            <Select
                onChange={handleChange(setState, 'dateRange')}
                options={[
                    { text: 'All time', value: DateRange.AllTime },
                    { text: 'Last 24h', value: DateRange.LastDay },
                    { text: 'Past Week', value: DateRange.PastWeek },
                    { text: 'Past Month', value: DateRange.PastMonth },
                    { text: 'Past Year', value: DateRange.PastYear },
                    { text: 'Custom range', value: DateRange.Custom },
                ]}
                value={dateRange}
            />
            {
                dateRange === DateRange.Custom
                    ? (
                        <React.Fragment>
                            <p>From</p>
                            <DatePicker
                                className={s.minWidth}
                                dateFormat="YYYY-MM-DD"
                                onChange={date => setState({ from: date.format('YYYY-MM-DD') })}
                                selected={moment(from)}
                            />
                            <p>To</p>
                            <DatePicker
                                className={s.minWidth}
                                dateFormat="YYYY-MM-DD"
                                onChange={date => setState({ to: date.format('YYYY-MM-DD') })}
                                selected={moment(to)}
                            />
                        </React.Fragment>
                    )
                    : null
            }
        </Menu.Item>
        <Menu.Item>
            <p>Hits per page</p>
            <Select
                onChange={handleChange(setState, 'hitsPerPage')}
                options={[
                    { text: '10', value: 10 },
                    { text: '20', value: 20 },
                    { text: '30', value: 30 },
                    { text: '50', value: 50 },
                ]}
                value={hitsPerPage}
            />
        </Menu.Item>
        <Menu.Item>
            <Button
                onClick={apply}
                color="green"
                size="mini"
            >
                Apply
            </Button>
            <Button
                onClick={toggle}
                size="mini"
            >
                Cancel
            </Button>
        </Menu.Item>
    </React.Fragment>
);

function handleChange(setState: ISettingsProps['setState'], key: string) {
    return (event, data) => {
        setState({ [key]: data.value });
    };
}

export default Settings;
