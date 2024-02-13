import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users  = [
    {
        userName: 'jquiroga',
        name: 'jaison quiroga',
        isFollowing: true
    },
    {
        userName: 'cSolano',
        name: 'Cris Solano',
        isFollowing: false
    },
    {
        userName: 'rRestrepo',
        name: 'Ronald Restrepo',
        isFollowing: true
    },
    {
        userName: 'SRestrepo',
        name: 'Stewart Restrepo',
        isFollowing: false
    }
]


export function App () {
    return (
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              name={name}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
            </TwitterFollowCard>
          ))
        }
      </section>
    )
  }