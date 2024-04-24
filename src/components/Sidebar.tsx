import { IconlyCart } from '../images/IconlyCart';

export const Sidebar = () => {
  return (
    <div
      style={{
        width: '20%',
        height: '100%',
        backgroundColor: '#1D1D20',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'fixed',
        top: '50px',
        left: '0px',
        fontFamily: 'Inter, sans-serif',
        boxSizing: 'border-box',
        paddingTop: '20px',
      }}>
      <SpentCard />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between  ',
          width: '80%',
          marginTop: '20px',
        }}>
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
  return <div style={
    {
        width: "45%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FF6576",
        fontFamily: "Inter, sans-serif",
        borderRadius: "15px",
        boxSizing: "border-box",
        paddingLeft: "10px",
    }
}>
    <IconlyCart/>
    <a style={
        {
            color: "white",
            textDecoration: "none",
        }
    }>Total Declines</a>
    <strong
        style={
            {
                color: "white",
            }
        }
    >5</strong>
</div>
} 