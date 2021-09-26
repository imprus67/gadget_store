import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../context/MainContext';
import styles from './Pagination.module.css';
import {fetchDevicesForPagination} from './../http/deviceAPI';

const Pagination = () => {

    

    const { 
        device, 
        totalCount, 
        limit, 
        setPage, 
        page,
        selectedType,
        selectedBrand,
        setDevices,
        setTotalCount,
        active,
        setActive
    } = useContext(MainContext);

    useEffect ( () => {

    fetchDevicesForPagination(selectedType, selectedBrand, page, limit).then(data => {
        setDevices(data.rows) 
        setTotalCount(data.count)
    })}, [selectedType, selectedBrand, page]);


    const pageCount = Math.ceil(totalCount / limit);

    const pages = [];

    for (let i=0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    console.log(page);

    const setActivePage = (activePage) => {
        setActive(activePage);
        setPage(activePage);
    }

    return (
        <div className={styles.PaginationWrapper}>
            {pages.map((i) => 
            <div key = {i}
            className={ active == i ? styles.PageElementActive : styles.PageElement}
            onClick={() => setActivePage(i)}
            >
                {i}
                </div>)}
        </div>

        // <ReactPaginate 
        // previousLabel={'Назад'}
        // nextLabel={'Вперед'}
        // pageCount={pages.length}
        // marginPagesDisplayed={2}
        // pageRangeDisplayed={5}
        // onPageChange={handlePageClick}
        // containerClassName={'pagination'}
        // activeClassName={'active'}
        // />
    )
}

export default Pagination;
