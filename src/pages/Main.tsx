import { Link, useSearchParams } from 'react-router-dom';
import { users } from '@/db';

export default function Main() {
   const [readSearchParms, setSearchParams] = useSearchParams();

   return (
      <div>
         <h1>Users</h1>
         <ul>
            {users.map(user => (
               <li key={user.id}>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
               </li>
            ))}
         </ul>
      </div>
   );
}
