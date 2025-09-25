import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { index } from "../../services/userService";

const Dashboard = () => {
    const { user } = useContext(UserContext)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await index()
                setUserList([...fetchedUsers])
            } catch (err) {
                console.log(err)
            }
        }
        if (user) fetchUsers()
    }, [user])

    return (
    <main>
      <h1>Welcome, {user.username}</h1>
      {userList.map((item) => (
        <p key={item._id}> {item.username}</p>
      ))}
    </main>
  );
}

export default Dashboard