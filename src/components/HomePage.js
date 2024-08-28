import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todoSlice";

const HomePage = ()=> {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state, 'state');

    if(state.todo.isLoading){
        return <div>Loading...</div>
    }
    const fetchDataHandler = ()=> {
        dispatch(fetchTodos())
    }
    return (
        <>
            <button onClick={fetchDataHandler}>Fetch To Do</button>
            {state.todo.data && state.todo.data.map((e, index) => (
                    <div key={index}>{e.title}</div>
                ))
            }
        </>
    )
}


export default HomePage;