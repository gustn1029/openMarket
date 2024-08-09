import { url } from "./main";

const Logout = () => {
    const res = fetch(`${url}/accounts/logout/`, {method:"post"});

    res.then((res)=> {
        if(res.ok){
            localStorage.removeItem("user");
            const beforeHash = localStorage.getItem("beforePage");
            window.location.href = `/openMarket/#`;
            window.location.reload();
            localStorage.removeItem("beforePage");
        }
    }).catch((error)=> console.error(error.message));
};

export default Logout;