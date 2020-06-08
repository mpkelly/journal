import { Element, Node } from "@mpkelly/react-editor-kit";
import { Variable } from "../variables/Variable";
export declare type Substitution = {
    name: string;
    value: string;
    type: SubstitutionType;
    variable?: Variable;
};
export declare enum SubstitutionType {
    Placeholder = 0,
    Variable = 1
}
export declare const findSubstitutions: (elements: Element[], variables: Variable[]) => Substitution[];
export declare const applySubstitutions: (nodes: Node[], substitution: Substitution[]) => void;
