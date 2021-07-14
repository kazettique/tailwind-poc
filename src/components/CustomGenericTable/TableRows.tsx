import { ReactElement } from 'react';
import { ColumnDefinitionType, TableRowsClassNameType } from './types';

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  className?: TableRowsClassNameType;
};

function TableRows<T, K extends keyof T>({ data, columns, className }: TableRowsProps<T, K>): ReactElement {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          key={`row-${index}`}
          className={`${
            index % 2 === 0 ? 'bg-table-striped-row-even' : 'bg-table-striped-row-odd'
          } hover:bg-table-row-hover`}
        >
          {columns.map((column, index2) => {
            return (
              <td key={`cell-${index2}`} className="border border-table-cell-border">
                <span className="text-gray-700 px-6 py-3 flex items-center">{row[column.key]}</span>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TableRows;
