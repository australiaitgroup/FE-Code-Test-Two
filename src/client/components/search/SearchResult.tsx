import * as React from 'react';
import { Header, Icon, Item, Message, Segment } from 'semantic-ui-react';

import { ISearchResultProps } from '../interfaces/searchResult.interface';
import Placeholder from '../Placeholder';
import Hit from './Hit';

const SearchResult: React.FunctionComponent<ISearchResultProps> = ({
    error,
    hits,
    isFetching,
    nbHits,
}) => {
    const noMatch = !isFetching && nbHits === 0;

    const getContent = () => {
        if (isFetching) return <Placeholder />;

        if (error) {
            return (
                <Message negative>
                    <Message.Header>Sorry, there was an error</Message.Header>
                    <p>{error.message}</p>
                </Message>
            );
        }

        if (noMatch) {
            return (
                <Header icon>
                    <Icon name="search" />
                    No results matching your query.
                </Header>
            );
        }

        return (
            <Item.Group divided>
                {(hits || []).map(hit => <Hit key={hit.objectID} data={hit} />)}
            </Item.Group>
        );
    };

    return (
        <Segment loading={isFetching} placeholder={noMatch}>
            {getContent()}
        </Segment>
    );
};

export default SearchResult;
