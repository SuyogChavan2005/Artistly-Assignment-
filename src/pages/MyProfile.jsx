import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th cross, richmod",
      line2: "circle, =church road, london"
    },
    gender: 'Male',
    dob: '2000-02-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
          ? <input
              type="text"
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            />
          : <p>{userData.name}</p>
      }
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
      </div>
      <p>Email id:</p>
      <p>{userData.email}</p>
      <p>Phone:</p>
      {
        isEdit
          ? <input
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          : <p>{userData.phone}</p>
      }
      <p>Address</p>
      {
        isEdit ? (
          <p>
            <input
              type="text"
              value={userData.address.line1}
              onChange={e =>
                setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value }
                }))
              }
            />
            <br />
            <input
              type="text"
              value={userData.address.line2}
              onChange={e =>
                setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value }
                }))
              }
            />
          </p>
        ) : (
          <>
            <p>{userData.address.line1}</p>
            <br />
            <p>{userData.address.line2}</p>
          </>
        )
      }

      <div>
        {
          isEdit 
          ? <button onClick={()=>setIsEdit(false)}>Save Informatiuon</button>
          : <button onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

      <br/>
      <div> <h1> This Page was maded in rush due to which its css may not work and its a bit incompleete. I am really Sorry for that. </h1></div>
    </div>
  )
}

export default MyProfile
