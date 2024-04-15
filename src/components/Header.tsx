import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#1D1D20',
        color: 'white',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
      }}>
      <h1 style={{ marginLeft: '20px' }}>TMCarter</h1>

      <Link
        to="/queues"
        style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}>
        Queues
      </Link>
      <Link
        to="/checkout"
        style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}>
        Checkout
      </Link>
      <Link
        to="/cards"
        style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}>
        Cards
      </Link>
      <Link
        to="/proxies"
        style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}>
        Proxies
      </Link>
    </div>
  );
};
