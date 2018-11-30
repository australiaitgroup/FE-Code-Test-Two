import * as React from 'react';
import { Button, Input } from 'semantic-ui-react';

import { ISearchBarProps } from '../interfaces/searchBar.interface';

let searchTimer;

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({
    handleInputChange,
    search,
}) => (
    <Input
        action={
            <Button
                color="teal"
                content="Search"
                onClick={search}
            />
        }
        fluid
        icon="search"
        iconPosition="left"
        onKeyUp={(event) => {
            clearTimeout(searchTimer);
            handleInputChange(event.target.value);
            if (event.key === 'Enter') return search();
            searchTimer = setTimeout(search, 300);
        }}
        placeholder="Search..."
    />
);

export default SearchBar;
