import { css } from '@linaria/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'src/common/store';
import { getNewText } from './slice';

export default function HelloWorld() {
  const dispatch = useAppDispatch();
  const helloWorld = useSelector((state: RootState) => state.helloWorld);
  useEffect(() => {
    dispatch(getNewText());
  }, [dispatch]);
  return (
    <p
      className={css`
        margin-top: 25%;
        text-align: center;
        font-size: 18px;
      `}
    >
      {helloWorld.loading ? 'Loading...' : helloWorld.text}
    </p>
  );
}
