export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token') || null;

  return <>{token && <div>{children}</div> || <div>Access Not Authorized</div>}</>
};
