import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import useToast from '@/hooks/useToast';
import { ScheduleDetailType } from '@/types/schedule/scheduleDataType';

const fetchAPI = async (data: ScheduleDetailType) => {
  const res = await axiosAuth.post('/schedules', data);
  return res.data;
};

const usePostSchedulesQuery = () => {
  const { toastSuccess } = useToast();
  const {
    mutate: scheduleIsMutate,
    isError: scheduleIsError,
    isSuccess: scheduleIsSuccess
  } = useMutation({
    mutationKey: ['schedule'],
    mutationFn: (data: ScheduleDetailType) => fetchAPI(data),
    onSuccess: () => {
      toastSuccess('일정이 등록되었습니다.');
    },
    onError: err => {
      console.log(err);
    }
  });

  return {
    scheduleIsMutate,
    scheduleIsError,
    scheduleIsSuccess
  };
};

export default usePostSchedulesQuery;
