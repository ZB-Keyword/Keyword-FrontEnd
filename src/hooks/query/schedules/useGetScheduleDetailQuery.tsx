import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '@/apis';
import { UserDataType } from '@/types/user/userDataType';
import {
  ScheduleDetailIdType,
  ScheduleDetailType
} from '@/types/schedule/scheduleDataType';

const fetchAPI = async (
  data: ScheduleDetailIdType
): Promise<ScheduleDetailType> => {
  const { scheduleId, noticeId } = data;
  try {
    const res = await axiosAuth.get(
      `/schedules/${scheduleId}?noticeId=${noticeId}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useGetScheduleDetailQuery = (data: ScheduleDetailIdType) => {
  const {
    data: scheduleDetail,
    isLoading: scheduleDetailIsLoading,
    isSuccess: scheduleDetailIsSuccess,
    isError: scheduleDetailIsError
  } = useQuery({
    queryKey: ['scheduleDetail'],
    queryFn: () => fetchAPI(data),

    staleTime: Infinity
  });

  return {
    scheduleDetail,
    scheduleDetailIsLoading,
    scheduleDetailIsSuccess,
    scheduleDetailIsError
  };
};

export default useGetScheduleDetailQuery;
