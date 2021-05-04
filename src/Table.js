import React from 'react';
import './Table.css';

const Table = ({countries}) => {
    return (
        <table className="table">
            <thead></thead>
            <tbody>
            {
                countries.map(({country,cases}, index) => (
                    <tr key={index}>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Table
