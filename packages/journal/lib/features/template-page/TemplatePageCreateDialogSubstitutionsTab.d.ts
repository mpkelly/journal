import { FlexProps } from "@mpkelly/siam";
export interface TemplatePageCreateDialogSubstitutionsTabProps extends FlexProps {
}
export declare const TemplatePageCreateDialogSubstitutionsTab: () => JSX.Element;
export interface TemplateSubstitionProps {
    name: string;
    value: string;
    onChange(value: string): void;
    focus?: boolean;
}
export declare const TemplateSubstition: (props: TemplateSubstitionProps) => JSX.Element;
