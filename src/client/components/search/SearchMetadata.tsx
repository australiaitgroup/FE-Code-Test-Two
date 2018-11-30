import * as React from 'react';
import MediaQuery from 'react-responsive';
import { List, Message } from 'semantic-ui-react';

import { ISearchMetadataProps } from '../interfaces/searchMetadata.interface';
import { DateRange } from '../../../types/search';

const SearchMetadata: React.FunctionComponent<ISearchMetadataProps> = ({ nbHits, settings }) => (
    nbHits !== undefined
        ? (
            <MediaQuery minWidth={768}>
                {(matches) => {
                    const [floated, horizontal, size] = matches
                        ? ['right', true, 'small']
                        : [undefined, undefined, 'tiny'] as any;

                    return (
                        <Message info size={size}>
                            <span>{nbHits === 0 ? 'No' : nbHits} results found</span>
                            <List
                                floated={floated}
                                horizontal={horizontal}
                            >
                                <List.Item>Search Type: {settings.searchType}</List.Item>
                                <List.Item>Sort Order: {settings.sortOrder}</List.Item>
                                <List.Item>
                                    Date Range: {
                                    settings.dateRange !== DateRange.Custom
                                        ? settings.dateRange
                                        : `${settings.from} To ${settings.to}`
                                }
                                </List.Item>
                                <List.Item>Hits Per Page: {settings.hitsPerPage}</List.Item>
                            </List>
                        </Message>
                    );
                }}
            </MediaQuery>
        )
        : null
);

export default SearchMetadata;
