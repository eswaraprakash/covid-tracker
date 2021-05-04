import React from 'react';
import './Table.css';
import numeral from "numeral";

const Table = ({countries}) => {
    return (
        <table className="table">
            <thead></thead>
            <tbody>
            {
                countries.map(({country,cases}, index) => (
                    <tr key={index}>
                        <td>{country}</td>
                        <td><strong>{numeral(cases).format("000,000")}</strong></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Table
