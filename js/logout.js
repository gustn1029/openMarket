const Logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/openMarket/";
};

export default Logout;