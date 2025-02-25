import { useState } from 'react'
import './App.css'
import Contact from './exercise-1-class/Contact'

function App() {
  const [INITIAL_CONTACTS, SET_CONTACTS] = useState([{
    id: 1,
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    id: 2,
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    id: 3,
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  },
  {
    id: 4,
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia"
  }]
  )

  const handleDeleteContact = (id) => {
    SET_CONTACTS(INITIAL_CONTACTS.filter(x => x.id !== id))
    console.log(INITIAL_CONTACTS)
  };

  const handleDeleteAll = () => {
    SET_CONTACTS([]);
  };
  return (
    <>
      <div className="container">
        <div className='row'>
          <Contact list={INITIAL_CONTACTS} onDelete={handleDeleteContact} />
        </div>
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-danger" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
      </div>

    </>
  )
}

export default App
