import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import StyledTableActionCell from './tableAction'
import { useState } from 'react';


export default function StyledTable({ header = [], data = [], isAction = true, actions = ["Edit", "Delete"], onActionClick }) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} >
                <TableHead>
                    <TableRow>
                        {
                            header.map((head, ind) => (
                                <TableCell key={ind}>{head}</TableCell>
                            ))
                        }
                        {isAction && <TableCell />}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : data
                    ).map((row, ind) => (
                        <TableRow
                            key={ind}
                            sx={{ height: 5 }}
                        >
                            {
                                header.map((head, ind) => (
                                    <TableCell sx={{ height: 5 }} key={ind}>{row[`${head}`]}</TableCell>
                                ))
                            }
                            <TableCell sx={{ height: 5 }}>
                                <StyledTableActionCell actions={actions} onCliked={(e) => { onActionClick && onActionClick({ index: e.index, action: e.action, data: row }) }} />
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <tr style={{ height: 34 * emptyRows }}>
                            <td colSpan={header.length} aria-hidden />
                        </tr>
                    )}
                </TableBody>
                <TableFooter sx={{ height: 80 }}>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, { label: 'All', value: -1 }]}
                        colSpan={header.length}
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        slotProps={{
                            select: {
                                'aria-label': 'rows per page',
                            },
                            actions: {
                                showFirstButton: true,
                                showLastButton: true,
                            },
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>

        </TableContainer>
    )
}
