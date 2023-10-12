import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';
import { auth } from "/src/API/firebase";
import { useDispatch } from 'react-redux';
import { getUserFromDB } from '../store/userSlice';

function Root (){
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                dispatch(getUserFromDB(authUser.uid));
            } else {
                console.log('No User!');
            }
        });
    }, []);
    return(
        <>
        <ToastContainer autoClose={2000} />
        <Header />
        <Outlet /> 
        </>
    )
}
export default Root;