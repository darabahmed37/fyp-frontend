export function isAuthenticated() {
    return localStorage.getItem("access") !== null;
}