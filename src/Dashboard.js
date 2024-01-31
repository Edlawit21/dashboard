import React from "react";

import {Link, useMatch,useResolvedPath} from "react-router-dom"
// import Username from './pages/Username'
// import Students from './pages/Students.jsx';
// import Receipts from './pages/Receipts.jsx';
// import Report from './pages/Report.jsx';
// import Payment from './pages/Payment.jsx';
const Dashboard = () => {
  return (<>
    <CustomLink to="/Username">Username</CustomLink>
    <h2>DTFYGUHJKL;,L</h2>
    </>
  );
};

function CustomLink({ to,childern, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path:resolvedPath.pathname,end:true})

  return(
    <li className={isActive ?"active":""}>
      <Link to={to} {...props}>
        {childern}
      </Link>
    </li>
  )
}
export default Dashboard;

