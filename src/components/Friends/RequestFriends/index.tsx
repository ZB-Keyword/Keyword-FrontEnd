import { REQUEST } from '@/constants/friends';
import FriendsList from '../FriendsList';
import useGetMyFriendsQuery from '@/hooks/query/friends/useGetMyFriendsQuery';

const RequestFriends = () => {
  const { friendsList, friendsListFetchNextPage } =
    useGetMyFriendsQuery(REQUEST);

  return (
    <section className="pt-5">
      {friendsList && (
        <FriendsList
          lists={friendsList}
          FetchNextPage={friendsListFetchNextPage}
        />
      )}
    </section>
  );
};

export default RequestFriends;
