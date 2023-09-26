import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../components/Datatables/Table";
import TableCell from "../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function Validation2table({ loading, dataHeader, data, handleDelete }) {
    return (
        <Datatables loading={loading} dataHeader={dataHeader}>
            {data?.map((row, index) => (
                <tr
                    key={index}
                    className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
                >
                    <TableCell dataLabel="type_demande" showLabel={true}>
                        <span className="font-medium text-sm text-gray-900">
                            {row.type_demande}
                        </span>
                    </TableCell>
                    <TableCell dataLabel="nom_client" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.nom_client}</p>
                    </TableCell>
                    <TableCell dataLabel="prenom_client" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.prenom_client}</p>
                    </TableCell>
                    <TableCell dataLabel="agence" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.agence}</p>
                    </TableCell>
                    <TableCell dataLabel="email" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.email}</p>
                    </TableCell>
                    <TableCell dataLabel="date_demande" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.date_demande}</p>
                    </TableCell>
                    <TableCell dataLabel="validateur1" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.validateur1}</p>
                    </TableCell>
                    <TableCell dataLabel="dateValidation1" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.date_validation}</p>
                    </TableCell>
                    <TableCell dataLabel="etat_inscription" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.etat_inscription}</p>
                    </TableCell>
                    <TableCell dataLabel="commentaire-validateur" showLabel={true}>
                        <p className="font-normal text-sm text-gray-500">{row.commentaire_validateur}</p>
                    </TableCell>
                    <TableCell>
                        <Link
                            to={`/auth/master/user/${row.id}/edit`}
                            className={`text-sky-700 inline-flex py-2 px-2 rounded  text-sm`}
                        >
                            <FontAwesomeIcon icon={faPencil} />
                        </Link>
                        <Link
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete(row.id);
                            }}
                            to={`/auth/master/user/${row.id}/edit`}
                            className={`text-red-700 inline-flex py-2 px-2 rounded  text-sm`}
                        >
                            <FontAwesomeIcon icon={faRemove} />
                        </Link>
                    </TableCell>
                </tr>
            ))}
        </Datatables>
    );
}

export default Validation2table;
