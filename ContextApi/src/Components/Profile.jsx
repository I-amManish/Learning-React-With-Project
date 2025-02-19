import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext); // Fix: Use lowercase `user`

    if (!user) return <div>Please Login</div>;

    return <div>Welcome {user.username}</div>;
}

export default Profile;
