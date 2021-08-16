import { css } from '@linaria/core';
import { Chip } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  return (
    <div
      className={css`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 18px;

        div {
          margin-bottom: 20px;
        }
      `}
    >
      <Chip
        label={
          <>
            useGetASuccessAPIQuery:{' '}
            {useGetASuccessAPIQueryLoading ? 'Loading...' : data?.description}
          </>
        }
      ></Chip>

      <Chip
        label={
          <>
            useGetAFailedAPIQuery:{' '}
            {useGetAFailedAPIQueryLoading ? 'Loading...' : failedError?.data?.description}
          </>
        }
      ></Chip>

      <Chip
        onClick={() => {
          history.push('/');
        }}
        clickable
        label={<>useHistory</>}
      />
    </div>
  );
}
