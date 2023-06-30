import Breadcrumb from '../../components/Breadcrumb'
import CreateTicketForm from '../../components/createTicketForm'

const CreateTicket = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Breadcrumb page={'New Ticket'} />
      </div>
      <div>
        <CreateTicketForm />
      </div>
    </div>
  )
}
export default CreateTicket
