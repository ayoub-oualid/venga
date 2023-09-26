import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const useAuth = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/current', {
        method: 'GET',
        credentials: 'include', 
      });
 
      if (response.ok) {
        setUser(await response.json());
      } else if (response.status === 401) {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/logout', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });

      if (response.ok) {
        setUser(null);
        navigate('/auth/login');
      }
    } catch (error) {
      //console.error('Error logging out:', error);
    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {

  }, []);


  return { user, loading, logout };
};