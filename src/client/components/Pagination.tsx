import * as React from 'react';
import MediaQuery from 'react-responsive';
import { animateScroll } from 'react-scroll';
import { Container, Pagination } from 'semantic-ui-react';

import { IPaginationProps } from './interfaces/pagination.interface';

const PaginationComponent: React.FunctionComponent<IPaginationProps> = ({
    handlePageChange,
    nbPages,
    page,
}) => nbPages
    ? (
        <Container textAlign="center">
            <MediaQuery minWidth={768}>
                {(matches) => {
                    const boundaryRange = matches ? 1 : 0;
                    const siblingRange = matches ? 1 : 0;

                    return (
                        <Pagination
                            activePage={page}
                            boundaryRange={boundaryRange}
                            onPageChange={(event, data) => {
                                animateScroll.scrollToTop({ duration: 400 });
                                handlePageChange(data.activePage as number);
                            }}
                            siblingRange={siblingRange}
                            size="mini"
                            totalPages={nbPages}
                        />
                    );
                }}
            </MediaQuery>
        </Container>
    )
    : null;

export default PaginationComponent;
