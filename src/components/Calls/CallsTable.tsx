import React from 'react';

import { TCall } from '../../types/Call';
import CallsItem from './CallsItem';

import { ReactComponent as SpinnerIcon } from '../../assets/icons/spinner.svg';

type CallsTableProps = {
  data: TCall[];
  loading: boolean;
  isError: boolean;
};

function CallsTable({ data, loading, isError }: CallsTableProps) {
  return (
    <div className='container'>
      <div className=''>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4'>
          <div className='min-w-full shadow-[0_4px_5px_#E9EDF3] rounded-lg pl-10 bg-white'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr className='text-left text-[#899CB1] text-sm h-[61px]'>
                  <th className='font-normal'>Тип</th>
                  <th className='font-normal'>Время</th>
                  <th className='font-normal'>Сотрудник</th>
                  <th className='font-normal'>Звонок</th>
                  <th className='font-normal w-[15%] pr-4'>Источник</th>
                  <th className='font-normal'>Оценка</th>
                  <th className='font-normal text-right pr-10'>Длительность</th>
                </tr>
              </thead>
              <tbody>
                {data.map((callItem) => (
                  <CallsItem callItem={callItem} key={callItem.id} />
                ))}
              </tbody>
            </table>
            {loading && (
              <div className='w-full py-20 flex items-center justify-center'>
                <SpinnerIcon className='animate-spin' />
                <p className=' ml-[10px] text-[#899CB1] text-[14px]'>Загружаем</p>
              </div>
            )}
            {isError && (
              <p className='text-red-500 text-[14px] text-center py-3'>Sorry, an error occurred...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallsTable;
