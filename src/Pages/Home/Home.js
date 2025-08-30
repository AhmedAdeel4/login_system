import React from 'react'
import { Card } from 'react-bootstrap'
import LogOut from '../../Components/Button/LogOut'
import { useRecoilState } from 'recoil'
import { $Name } from '../../Components/store/auth'

export default function Home() {
  const [user] = useRecoilState($Name)
  return (
    <div className='container mt-5' style={{maxWidth:400}}>
      <Card>
        <Card.Body>
          <h5>Welcome {user}</h5>
          <LogOut />
        </Card.Body>
      </Card>
    </div>
  )
}
