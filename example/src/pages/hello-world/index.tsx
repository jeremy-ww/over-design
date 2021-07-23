import { css } from '@linaria/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'src/common/store';
import { getRequest } from './slice';

export default function HelloWorld() {
  const dispatch = useAppDispatch();
  const helloWorld = useSelector((state: RootState) => state.helloWorld);
  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);
  return (
    <pre
      className={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      `}
    >
      <code>{helloWorld.loading ? 'Loading...' : JSON.stringify(helloWorld.json, null, '  ')}</code>
    </pre>
  );
}
