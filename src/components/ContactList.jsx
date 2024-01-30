import { useEffect, useState } from 'react'
import ContactRow from './ContactRow'

const ContactList = () => {
	const url = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'

	const [contacts, setContacts] = useState([])
    const [selectedContactId, setSelectedContactId] = useState(null)

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
					<th>
						<button onClick={() => setSelectedContactId(null)}>Clear</button>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>Phone</td>
				</tr>
				<tr>
					<td>
						<hr />
					</td>
					<td>
						<hr />
					</td>
					<td>
						<hr />
					</td>
				</tr>
				{selectedContactId ? (
					<ContactRow
						contact={contacts.find(
							(contact) => contact.id === selectedContactId
						)}
					/>
				) : (
					contacts.map((contact) => (
						<ContactRow
							key={contact.id}
							contact={contact}
							setSelectedContactId={setSelectedContactId}
						/>
					))
				)}
			</tbody>
		</table>
	)
}

export default ContactList
