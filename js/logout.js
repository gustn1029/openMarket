const Logout = () => {
    localStorage.removeItem("user");
    const beforeHash = localStorage.getItem("beforePage");
    window.location.href = `/openMarket/${beforeHash ? beforeHash: ""}`;
    window.location.reload();
    localStorage.removeItem("beforePage");
};

export default Logout;