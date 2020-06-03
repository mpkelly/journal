import { FlexProps } from "@mpkelly/siam";
export interface SearchInputProps extends FlexProps {
    onSearch(text: string): void;
    resultCount: number | string;
}
export declare const SearchInput: (props: SearchInputProps) => JSX.Element;
