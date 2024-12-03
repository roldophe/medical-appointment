// // src/features/user/UserProfile.tsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadUserData, selectUser, selectLoading, selectError } from './userSlice';

// interface UserProfileProps {
//   userId: string; // Pass user ID as a prop
// }

// const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(loadUserData(userId));
//   }, [dispatch, userId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!user) {
//     return <div>No user data available</div>;
//   }

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>Email: {user.email}</p>
//       <p>Username: {user.username}</p>
//       {/* Add more user info as needed */}
//     </div>
//   );
// };

// export default UserProfile;
