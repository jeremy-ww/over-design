import { css } from '@linaria/core';
import { helloWorldAPI } from './slice';

interface RequestError {
  error: { status: number; data: { description: string } };
}

export default function HelloWorld() {
  const { data, isLoading: useGetASuccessAPIQueryLoading } = helloWorldAPI.useGetASuccessAPIQuery();
  const { error: failedError, isLoading: useGetAFailedAPIQueryLoading } =
    helloWorldAPI.useGetAFailedAPIQuery<RequestError & { isLoading: boolean }>({
      __disableNotification: true,
    });

  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 18px;
      `}
    >
      <p>
        useGetASuccessAPIQuery: {useGetASuccessAPIQueryLoading ? 'Loading...' : data?.description}
      </p>

      <p>
        useGetAFailedAPIQuery:{' '}
        {useGetAFailedAPIQueryLoading ? 'Loading...' : failedError?.data?.description}
      </p>
    </div>
  );
}
