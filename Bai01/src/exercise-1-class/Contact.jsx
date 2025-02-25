function Contact({list, onDelete}) {
    return (
        <>
            {list.map((contact) => (
                <div className="col-md-3 mb-4" key={contact.id}>
                    <div className="card t p-0" >
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5>{contact.firstName} </h5>
                                {contact.lastName}
                            </li>
                            <li className="list-group-item " >Phone:
                                <b> {contact.phone}</b>
                            </li>
                            <li className="list-group-item">Address:
                                <b> {contact.address}</b>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <button className="btn btn-danger ml-auto" onClick={() => onDelete(contact.id)}>
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}


        </>
    )
}
export default Contact;