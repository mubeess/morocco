import { useLocation } from 'react-router-dom';
import useVerifyBooking from '../Forms/hooks/useVerifyBooking';

export default function BookingInvoice() {
  const location = useLocation();
  const { verifying } = useVerifyBooking(location.state.id);
  return <div>{verifying ? <h1>Verifying</h1> : <h2>Verified</h2>}</div>;
}
