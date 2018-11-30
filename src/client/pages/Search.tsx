import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { doSearch, handleInputChangeAction } from '../actions/search';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import SearchMetadata from '../components/search/SearchMetadata';
import SearchBar from '../components/search/SearchBar';
import SearchResult from '../components/search/SearchResult';
import { IState } from '../../types/stateAndAction';
import {
    ISearchDispatchProps,
    ISearchProps,
    ISearchStateProps,
} from './interfaces/search.interface';

const mapStateToProps = (state: IState): ISearchStateProps => ({
    error: state.search.error,
    hits: state.search.result.hits,
    isFetching: state.search.isFetching,
    nbHits: state.search.result.nbHits,
    nbPages: state.search.result.nbPages,
    page: state.search.page,
    settings: state.settings,
});

const mapDispatchToProps = (dispatch): ISearchDispatchProps => ({
    changePage: page => dispatch(doSearch(page)),
    handleInputChange: input => dispatch(handleInputChangeAction(input)),
    search: () => dispatch(doSearch()),
});

class Search extends React.Component<ISearchProps> {
    componentDidMount() {
        this.props.search();
    }

    render() {
        const {
            changePage,
            error,
            handleInputChange,
            hits,
            isFetching,
            nbHits,
            nbPages,
            page,
            search,
            settings,
        } = this.props;

        return (
            <Layout>
                <SearchBar
                    handleInputChange={handleInputChange}
                    search={search}
                />
                <SearchMetadata nbHits={nbHits} settings={settings} />
                <SearchResult
                    error={error}
                    hits={hits}
                    isFetching={isFetching}
                    nbHits={nbHits}
                />
                <Pagination
                    handlePageChange={changePage}
                    nbPages={nbPages}
                    page={page}
                />
            </Layout>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
