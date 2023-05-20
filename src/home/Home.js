import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getData } from './action';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

export default function Home() {

    const dispatch = useDispatch();

    const { isLoading, homePageData } = useSelector((store) => ({
        isLoading: store?.home?.loading,
        homePageData: store?.home?.homePageData
    }));

    useEffect(() => {
        dispatch(getData())
    }, []);

    console.log(homePageData);

    return (
        <>
            {isLoading ? "Loading..." : <div className="my-5">
                <h1>Exam</h1>
                <div className="mt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/*Get data */} 
                            {homePageData?.map((item, index) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>}
        </>
    )
}

