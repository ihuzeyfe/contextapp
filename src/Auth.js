import { useContext } from "react";
import authContext from "./context/auth-context";

function Auth() {
      const {status, login} =   useContext(authContext)
    // const hasan = useContext(authContext);
      console.log(status);

    return ( <div>
        <h1>
            Giriş Yaptın Mı?
        </h1>
        {status ? <p>Ohoooo Çoktannnn</p> : <p>Hayır?</p>}

        <button onClick={login}>Giriş Yap!</button>
    </div> );
}

export default Auth;