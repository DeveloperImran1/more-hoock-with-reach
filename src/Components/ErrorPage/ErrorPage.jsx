import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();   // ki error hoiase,, tar akta object pawa jabe useRouterErro() er maddhome.
    console.log(error)
    return (
        <div>
            <h2>Ooops !1</h2>
            <p>{error.statusText || error.message}</p>
           <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;