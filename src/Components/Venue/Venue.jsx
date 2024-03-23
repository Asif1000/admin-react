import { React, useState, useEffect } from 'react';
import { Container, Button, Card, Row, Dropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import './Venue.css';
import { VenueService } from './service/VenueService';
import PlusIcon from '../../assets/icons/plus-icon.svg';

const Venue = () => {
  
    const columns= [
        {
            name:"Name",
            selector:(row)=>row.name,
            sortable:true
        },
        {
            name:"Price",
            selector:(row)=>row.price,
            sortable:true
        },
        {
            name:"Main Category",
            selector:(row)=>row.main_category,
            sortable:true
        },
        {
            name:"Sub Category",
            selector:(row)=>row.sub_category,
            sortable:true
        },
        {
            name:"Status",
            selector:(row)=>row.status,
            sortable:true
        },
        {
            name:"Is Draft",
            selector:(row)=>row.is_draft,
            sortable:true
        },
        {
            name:"Action",
            cell:(row)=>(
                <Dropdown>
                <Dropdown.Toggle variant="success" className='action-dropdown' id="dropdown-basic">
                    Edit/Delete
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                    <Dropdown.Item href="#">Delete</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            )
        }

    ];




    const [data, setData]= useState([]);
    const [search, SetSearch]= useState('');
    const [filter, setFilter]= useState([]);

    const getProduct=async()=>{
    try{
        VenueService.getVenues().then(data => setData(data));
        VenueService.getVenues().then(data => setFilter(data));
    } catch(error){
       console.log(error);
    }
    }
    useEffect(()=>{
        getProduct();
    }, []);

    useEffect(()=>{
        const result= data.filter((item)=>{
         return item.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);

   const handleDelete=(val)=>{
    const newdata= data.filter((item)=>item.id!==val);
    setFilter(newdata);
   }
   
   const tableHeaderstyle={
    headCells:{
        style:{
            fontWeight:"bold",
            fontSize:"14px",
            backgroundColor:"#F5F8FE"

        },
    },
   }

  return (
    <Container className="main-container">
        <div className="d-flex justify-content-between page-heading">
            <span className='page-title'>Manage Venues</span>
            <Button variant="primary" className="add-button me-4" type="button"><span>Add Venue</span> <img src={PlusIcon} /></Button>
            <div className='breadcrumb-section'>
                <ul className="breadcrumb float-end m-0 ps-0 pe-0">
                    <li className="breadcrumb-item"><Link style={{color: "#F800C0"}} to="/">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Venues</li>
                </ul>
            </div>
        </div>


        <section className='manage-section'>

            <Card>
                <Card.Body>
                <>
                    <DataTable 
                    customStyles={ tableHeaderstyle}
                    columns={columns}
                    data={filter}
                    pagination
                    fixedHeader
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input type="text"
                        className="w-25 data-search form-control"
                        placeholder="Search..."
                        value={ search}
                        onChange={(e)=>SetSearch(e.target.value)}
                        
                        />
                    }
                    subHeaderAlign="left"
                    
                    />
                    </>
                </Card.Body>
            </Card>
        </section>
    </Container>
  )
}

export default Venue;