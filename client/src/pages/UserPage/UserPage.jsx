import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/pagesSlice';
import "./UserPage.scss";

const UserPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPage("user"));
    }, []);

    return (
        <section className="user-page">
            <h1>User Page</h1>
        </section>
    );
}

export default UserPage;    