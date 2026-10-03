import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth_context";
import { login, logout, register, profile } from "../services/auth_api";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const context = useContext(AuthContext)
    const [error, setError] = useState("");
    const { user, setuser, loading, setloading } = context
    const navigate = useNavigate();

    const handleLogin = async ({ user_id, password }) => {
        try {
            setloading(true);
            setError("");

            const data = await login({
                user_id,
                password,
            });

            // console.log("Login response:", data);

            setuser(data.user);

            navigate("/dashboard");
        } catch (error) {
            // console.error("Login failed:", error);

            setError(
                error.response?.data?.message || "Wrong ID or Password"
            );
        } finally {
            setloading(false);
        }
    };
    const handleRegister = async ({ username, email, password }) => {
        try {
            setloading(true);

            const data = await register({
                username,
                email,
                password,
            });

            console.log("REGISTER RESPONSE:", data);

            setuser(data.user);
            navigate("/dashboard");



        } catch (error) {
            setError(
                error.response?.data?.message || "Registration failed"
            );
        } finally {
            setloading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setloading(true);

            await logout();

            setuser(null);

            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setloading(false);
        }
    };
    useEffect(() => {
        const getandsetuser = async () => {
            try {
                const data = await profile();
                setuser(data.user);
            } catch (error) {
                console.log("Profile error:", error);
            } finally {
                setloading(false);
            }
        };

        getandsetuser();
    }, []);

    return { user, loading, handleLogin, handleLogout, handleRegister, error }
}