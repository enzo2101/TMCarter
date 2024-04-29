import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="w-full h-50px bg-TMSideHeader text-white flex items-center justify-start top-0 left-0 fixed">
      <h1 className="text-5xl">TMCarter</h1>
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
      <Link
        to="/tmaccount"
        style={{ marginLeft: '20px', color: 'white', textDecoration: 'none' }}>
        TMAccount
      </Link>
    </div>
  );
};
