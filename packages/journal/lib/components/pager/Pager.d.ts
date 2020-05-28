import { FlexProps } from "@mpkelly/siam";
export interface PagerProps extends FlexProps {
    hasNext: boolean;
    hasPrevious: boolean;
    onNext(): void;
    onPrevious(): void;
    page: number;
    totalPages: number;
}
export declare const Pager: (props: PagerProps) => JSX.Element;
