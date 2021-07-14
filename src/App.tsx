import { ReactElement } from 'react';
import './App.css';

import CustomGenericTable from './components/CustomGenericTable';

import { ColumnDefinitionType, GenericTableClassNameType } from './components/CustomGenericTable/types';

// * experiment
type BulmaTableStyleParams = {
  tableColor: string;
  tableBackgroundColor: string;

  tableCellBorder: string;
  tableCellBorderWidth: string;
  tableCellPadding: string;
  tableCellHeadingColor: string;

  tableHeadCellBorderWidth: string;
  tableHeadCellColor: string;
  tableFootCellBorderWidth: string;
  tableFootCellColor: string;

  tableHeadBackgroundColor: string;
  tableBodyBackgroundColor: string;
  tableFootBackgroundColor: string;

  tableRowHoverBackgroundColor: string;
  tableRowActiveBackgroundColor: string;
  tableRowActiveColor: string;

  tableStripedRowEvenBackgroundColor: string;
  tableStripedRowEvenHoverBackgroundColor: string;

  tableColors: string;
};

// * experiment
type GenericCustomStyles = {
  global: {
    backgroundColor: string;
    color: string;
  };
  tableCell: {
    border: string;
    borderWidth: string;
    padding: string;
    headingColor: string;
  };
  head: {
    backgroundColor: string;
    cell: {
      color: string;
      borderWidth: string;
    };
  };
  body: {
    backgroundColor: string;
  };
  footer: {
    backgroundColor: string;
    cell: {
      color: string;
      borderWidth: string;
    };
  };
};

function App(): ReactElement {
  // dummy table data
  const tableData = Array(100)
    .fill('')
    .map((_, index) => index);

  const data: Cat[] = [
    {
      name: 'Mittens',
      color: 'black',
      age: 2,
      gender: 'female',
      activityLevel: 'hight',
      favoriteFood: 'milk',
    },
    {
      name: 'Mons',
      color: 'grey',
      age: 2,
      gender: 'male',
      favoriteFood: 'old socks',
      activityLevel: 'medium',
    },
    {
      name: 'Luna',
      color: 'black',
      age: 2,
      gender: 'female',
      activityLevel: 'medium',
      favoriteFood: 'fish',
    },
    {
      name: 'Bella',
      color: 'grey',
      age: 1,
      gender: 'female',
      activityLevel: 'high',
      favoriteFood: 'mice',
    },
    {
      name: 'Oliver',
      color: 'orange',
      age: 1,
      gender: 'male',
      activityLevel: 'low',
      favoriteFood: 'fish',
    },
  ];

  const data2: Cat[] = tableData.map((item, index) => ({
    name: `Bella-${item}`,
    color: 'grey',
    age: item + 1,
    gender: item % 2 === 0 ? 'female' : 'male',
    activityLevel: 'high',
    favoriteFood: 'mice',
  }));

  const columns: ColumnDefinitionType<Cat, keyof Cat>[] = [
    {
      key: 'name',
      header: 'Name',
      width: 150,
    },
    {
      key: 'color',
      header: 'Color',
    },
    {
      key: 'age',
      header: 'Age in years',
    },
    {
      key: 'gender',
      header: 'Gender',
    },
    {
      key: 'activityLevel',
      header: 'activity Level',
    },
    {
      key: 'favoriteFood',
      header: 'favorite Food',
    },
  ];

  interface Cat {
    name: string;
    age: number;
    gender: string;
    color: string;
    activityLevel?: string; // optional, same as string | undefined
    favoriteFood?: string; // optional, same as string | undefined
  }

  // const customClassName: GenericTableClassNameType = {
  //   tableClassName: 'border border-yellow-500 text-gray-600',
  //   headerClassName: {
  //     thClassName: 'border border-yellow-500',
  //     trClassName: 'bg-yellow-300',
  //   },
  //   rowClassName: {
  //     trClassName: 'bg-yellow-200',
  //     tdClassName: 'border border-yellow-500',
  //   },
  // };

  return (
    <div className="bg-gray-700 w-screen h-screen text-gray-300">
      <div className="w-1/2 my-0 mx-auto h-full">
        <CustomGenericTable data={data2} columns={columns} />
      </div>

      {/* <div className="flex flex-col h-full" style={{ height: 800 }}>
        <div className="flex-grow overflow-auto">
          <table className="relative w-full border">
            <thead>
              <tr>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">序號</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">帳號</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">名稱</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">角色</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">關係</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">上層</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">
                  下層代理數/會員數
                </th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">公司帳</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">創建日期</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">密碼狀況</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">帳號狀況</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">新增下線</th>
                <th className="sticky top-0 px-6 py-3 bg-table-header border border-table-cell-border ">操作</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr
                    key={item}
                    className={`bg-table-striped-row-${index % 2 === 0 ? 'even' : 'odd'} hover:bg-table-row-hover`}
                  >
                    <td className="px-6 py-4 text-center border border-table-cell-border">{item + 1}</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">0Lv1AG-{item + 1}</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">Lv1AG-{item + 1}</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">代理</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">詳細</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">--</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">1 / 1</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">0</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">2021/07/07</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">開放</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">啟用</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">新增代理/新增會員</td>
                    <td className="px-6 py-4 text-center border border-table-cell-border">操作...</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default App;
