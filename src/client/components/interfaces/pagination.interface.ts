export interface IPaginationProps {
    handlePageChange: (page: number) => Promise<any>;
    nbPages?: number;
    page: number;
}
