import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  // dummy table data
  const tableData = Array(100)
    .fill('')
    .map((_, index) => index);

  return (
    <div className="App">
      <div className="my-3">
        <button
          type="button"
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        >
          Green-500
        </button>
        <button
          type="button"
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-shitty-gold hover:bg-light-yellow hover:text-gray-900"
        >
          Shitty
        </button>
      </div>
      <div className="my-3">
        <button
          type="button"
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-submit hover:bg-cancel hover:text-gray-900"
        >
          Submit
        </button>
        <button
          type="button"
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-cancel hover:bg-submit hover:text-gray-900"
        >
          Cancel
        </button>
      </div>

      <div className="flex flex-col h-full" style={{ height: 800 }}>
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
      </div>
    </div>
  );
}

export default App;
