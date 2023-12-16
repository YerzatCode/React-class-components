import { toast } from 'react-toastify'
import message from '../store/message'


export default function notify() {
	toast(message.message)
}
