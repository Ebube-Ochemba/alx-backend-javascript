import { RowID, RowElement } from './interface';

// Declare the functions from crud.js
export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
