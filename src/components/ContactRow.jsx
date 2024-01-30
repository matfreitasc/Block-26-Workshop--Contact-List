const ContactRow = ({ contact, setSelectedContactId }) => {
	console.log(contact)
	return (
		<tr onClick={() => setSelectedContactId(contact.id)} className='pointer'>
			<td>{contact.name}</td>
			<td>{contact.email}</td>
			<td>{contact.phone}</td>
		</tr>
	)
}

export default ContactRow
