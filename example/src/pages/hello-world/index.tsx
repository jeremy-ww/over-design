import { css } from '@linaria/core';
import { Chip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
            {t('useGetASuccessAPIQuery')}:{' '}
            {useGetASuccessAPIQueryLoading ? t('Loading') + '...' : data?.description}
          </>
        }
      ></Chip>

      <Chip
        label={
          <>
            {t('useGetAFailedAPIQuery')}:{' '}
            {useGetAFailedAPIQueryLoading ? t('Loading') + '...' : failedError?.data?.description}
          </>
        }
      ></Chip>

      <Chip
        onClick={() => {
          const searchString = new URLSearchParams();
          searchString.append('s', Math.random().toString());
          history.push(location.pathname + '?' + searchString.toString());
        }}
        clickable
        label={<>{t('useHistory')}</>}
      />
    </div>
  );
}
