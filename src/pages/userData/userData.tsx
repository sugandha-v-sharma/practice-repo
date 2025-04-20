// src/features/users/UsersList.tsx
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/userData/userSlice'
import { AppDispatch, RootState } from '../../redux/store'

const UsersList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { users, status, error } = useSelector(
        (state: RootState) => state.user
      )

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [dispatch, status])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <ul className='text-center'>
      {users.map((user:any) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  )
}

export default UsersList
