import { css } from '@linaria/core';
import { Chip } from '@material-ui/core';
import type { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { instance } from 'src/common/api';

export default function HelloWorld() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isLoading: getASuccessAPIQueryLoading, data } = useQuery(
    ['getASuccessAPIQueryLoading'],
    () =>
      instance.get<{
        code: number;
        description: string;
      }>('/200'),
  );

  const { isLoading: getAFailedAPIQueryLoading, error } = useQuery<
    any,
    AxiosError<{ code: number; description: string }>
  >(['getAFailedAPIQuery'], () => instance.get('/400'));

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
            {t('getASuccessAPIQuery')}:{' '}
            {getASuccessAPIQueryLoading ? t('Loading') + '...' : data?.description}
          </>
        }
      ></Chip>

      <Chip
        label={
          <>
            {t('getAFailedAPIQuery')}:{' '}
            {getAFailedAPIQueryLoading ? t('Loading') + '...' : error?.response?.data.description}
          </>
        }
      ></Chip>

      <Chip
        onClick={() => {
          const searchString = new URLSearchParams();
          searchString.append('s', Math.random().toString());
          navigate(location.pathname + '?' + searchString.toString());
        }}
        clickable
        label={<>{t('useHistory')}</>}
      />
    </div>
  );
}
