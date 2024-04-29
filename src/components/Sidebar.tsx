import { IconlyCart } from '../images/IconlyCart';

export const Sidebar = () => {
  return (
    <div className="w-1/5 h-full bg-TMSideHeader text-white flex flex-col justify-start items-center fixed top-12 left-0 pt-5">
      <SpentCard />
      <div className="flex justify-between w-4/5 mt-5">
        <TotalCheckouts />
        <TotalDeclines />
      </div>
    </div>
  );
};

const SpentCard = () => {
  return (
    <div
      style={{
        width: '80%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#5A7EF6',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '15px',
        boxSizing: 'border-box',
        paddingLeft: '10px',
      }}>
      <IconlyCart />
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        Total Spent
      </a>
      <strong
        style={{
          color: 'white',
        }}>
        $1600
      </strong>
    </div>
  );
};

const TotalCheckouts = () => {
  return (
    <div
      style={{
        width: '45%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        backgroundColor: '#7C4EF6',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '15px',
        boxSizing: 'border-box',
        paddingLeft: '10px',
      }}>
      <IconlyCart />
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        Total Checkouts
      </a>
      <strong
        style={{
          color: 'white',
        }}>
        18
      </strong>
    </div>
  );
};

const TotalDeclines = () => {
  return (
    <div
      style={{
        width: '45%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FF6576',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '15px',
        boxSizing: 'border-box',
        paddingLeft: '10px',
      }}>
      <IconlyCart />
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
        }}>
        Total Declines
      </a>
      <strong
        style={{
          color: 'white',
        }}>
        5
      </strong>
    </div>
  );
};
