import { useEffect, useState } from 'react'
import ContactRow from './ContactRow'

const ContactList = () => {
	const url = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'

	const [contacts, setContacts] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url)
			const data = await response.json()
			setContacts(data)
		}
		fetchData()
	}, [])

	return (
		<table>
			<thead>
				<tr>
					<th colSpan='3'>Contact List</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>Phone</td>
				</tr>
				{contacts.map((contact) => {
					return <ContactRow key={contact.id} contact={contact} />
				})}
			</tbody>
		</table>
	)
}

export default ContactList
