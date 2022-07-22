import React, { useCallback, useEffect, useState } from 'react';

import { getCalls, GetCallsParams, inOutByCallSign } from '../../../services/Calls';
import { TCall, TCallSign, TFilters } from '../../../types/Call';
import CallsFilters from '../CallsFilters';
import { TChangeFilter } from '../CallsFilters/CallsFilters';
import CallsTable from '../CallsTable';

import styles from './CallsListing.module.scss';

const initialFilters = {
  callSign: TCallSign.ALL,
};

function Calls() {
  const [callData, setCallData] = useState<TCall[]>([]);
  const [isCallDataLoading, setIsCallDataLoading] = useState(true);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const [filters, setFilters] = useState<TFilters>(initialFilters);

  useEffect(() => {
    (async () => {
      try {
        setCallData([]);
        setIsCallDataLoading(true);
        setIsFetchingError(false);

        const getCallsParams = formatFiltersToCallsServiceParams(filters);
        const { results } = await getCalls(getCallsParams);
        setCallData(results);
      } catch (e) {
        setIsFetchingError(true);
      } finally {
        setIsCallDataLoading(false);
      }
    })();
  }, [filters]);

  const changeFilter: TChangeFilter = useCallback((filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  return (
    <div className={styles.callsWrapper}>
      <CallsFilters filters={filters} changeFilter={changeFilter} clearFilters={clearFilters} />
      <CallsTable data={callData} loading={isCallDataLoading} isError={isFetchingError} />
    </div>
  );
}

export default Calls;

function formatFiltersToCallsServiceParams(filters: TFilters): GetCallsParams {
  const params: GetCallsParams = {};

  filters.callSign !== TCallSign.ALL && (params.inOut = inOutByCallSign[filters.callSign]);

  return params;
}
