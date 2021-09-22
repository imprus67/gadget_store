import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import jwtDecode from 'jwt-decode';

const withAuthAdmin = (WrappedComponent) => {

  return (props) => {

    const Router = useRouter();

    const [verified, setVerified] = useState(false);

    useEffect(async () => {

      const accessToken = localStorage.getItem('token');
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
      } else {
        // we call the api that verifies the token.
        const data = await jwtDecode(accessToken);
        // if token was verified we set the state.
        if (data.role === 'ADMIN') {
          setVerified(true);
        } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem('token');

          Router.replace("/");
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuthAdmin;