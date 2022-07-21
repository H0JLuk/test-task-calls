import React, { memo } from 'react';

import Select from '../../common/Select';
import { TCallSign, TFilters } from '../../../types/Call';

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';

const filtersOptions = [
  { value: TCallSign.ALL, label: 'Все звонки' },
  { value: TCallSign.INCOMMING, label: 'Входящие' },
  { value: TCallSign.OUTGOING, label: 'Исходящие' },
];

export type TChangeFilter = <F extends keyof TFilters>(filter: F, value: TFilters[F]) => void;

type CallsFiltersProps = {
  filters: TFilters;
  changeFilter: TChangeFilter;
  clearFilters: () => void;
};

const CallsFilters = memo(function CallsFilters({ filters, changeFilter, clearFilters }: CallsFiltersProps) {
  const onCallSignChange = (value: TCallSign) => changeFilter('callSign', value);

  const hasFilters = filters.callSign !== TCallSign.ALL;

  return (
    <div className='flex justify-end space-x-6 last:mr-0'>
      {hasFilters && <ClearFilters onClick={clearFilters} />}
      <Select<TCallSign> value={filters.callSign} options={filtersOptions} onChange={onCallSignChange} />
    </div>
  );
});

type ClearFiltersProps = { onClick: () => void };

function ClearFilters({ onClick }: ClearFiltersProps) {
  return (
    <div className='flex items-center cursor-pointer' onClick={onClick}>
      <span className='mr-1 text-[#5E7793] text-[14px]'>Сбросить фильтры</span>
      <CloseIcon />
    </div>
  );
}

export default CallsFilters;
