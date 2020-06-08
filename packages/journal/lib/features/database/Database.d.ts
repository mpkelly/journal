import { File as JFile } from "../file/File";
import { JournalSettings } from "../settings/JournalSettings";
import { CodeFile } from "../code-editor/CodeFile";
import { Variable } from "../variables/Variable";
export interface Database {
    getCollections(): Promise<JFile[]>;
    getFile(id: any): Promise<JFile | undefined>;
    addFile(item: JFile): Promise<void>;
    deleteFiles(ids: any[]): Promise<void>;
    updateFile(id: any, changes: Partial<JFile>): Promise<number>;
    getCodeFile(id: any): Promise<CodeFile | undefined>;
    getAllCodeFiles(ids?: any[], includeGlobal?: boolean): Promise<CodeFile[]>;
    addCodeFile(code: CodeFile): Promise<void>;
    deleteCodeFile(id: any): Promise<void>;
    updateCodeFile(id: any, changes: Partial<CodeFile>): Promise<number>;
    getTemplates(): Promise<JFile[]>;
    getVariables(): Promise<Variable[]>;
    incrementCount(id: string): Promise<void>;
    addVariable(variable: Variable): Promise<void>;
    updateVariable(id: any, changes: Partial<Variable>): Promise<number>;
    deleteVariable(id: any): Promise<void>;
    getChildren(id: string, page: number, pageSize: number): Promise<PagedResult<JFile>>;
    getSettings(): Promise<JournalSettings>;
    updateSettings(settings: JournalSettings): Promise<number>;
    transact(work: UnitOfDBWork, tables: string[]): Promise<void>;
    exportDb(): Promise<Blob>;
    importDb(file: File): Promise<any>;
    delete(): Promise<void>;
}
export declare type UnitOfDBWork = () => Promise<void>;
export declare type PagedResult<T> = {
    count: number;
    pageSize: number;
    page: number;
    items: T[];
    search?: string;
};
export declare const emptyPagedResult: () => {
    count: number;
    pageSize: number;
    page: number;
    items: any[];
};
