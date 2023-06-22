import { FunctionComponent } from 'react';
export interface SearchBoxPropType {
    onChange?: (event: any) => void;
    placeholder?: string;
    searchType?: string;
}
export declare const SearchBoxPropDefault: SearchBoxPropType;
declare const SearchBox: FunctionComponent<SearchBoxPropType>;
export { SearchBox };
