export interface ISearchBarProps {
    handleInputChange: (input: string) => void;
    search: () => Promise<any>;
}
