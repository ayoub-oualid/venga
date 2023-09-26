import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function PointsTable({ loading, dataHeader, data, handleDelete }) {
    return (
        <Datatables loading={loading} dataHeader={dataHeader}>
            {data?.map((row, index) => (
                <tr
                    key={index}
                    className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
                >
                    <TableCell dataLabel="mois" showLabel={true}>
                        <span className="font-medium text-sm text-gray-900">
                            {row.mois}
                        </span>
                    </TableCell>
                    <TableCell dataLabel="debit" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.debit}</p>
                    </TableCell>
                    <TableCell dataLabel="credit" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.credit}</p>
                    </TableCell>
                    <TableCell dataLabel="solde" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.solde}</p>
                    </TableCell>
                    <TableCell>
                        <Link
                            to={`/auth/master/user/${row.id}/edit`}
                            className={`text-sky-700 inline-flex py-2 px-2 rounded  text-sm`}
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </Link>
                    </TableCell>
                </tr>
            ))}
        </Datatables>
    );
}

export default PointsTable;
