import React from "react";
import MainNav from "../../components/mainNav";
import DataTable from "../../components/tables/materialTable";
import { BasicTable } from "../../components/tables/simpletable";

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{
		field: "gender",
		headerName: "Gender",
		type: "number",
		width: 90,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},
];

const rows = [
	{ id: 1, lastName: "Lit", firstName: "louise", gender: "M" },
	{ id: 2, lastName: "Specter", firstName: "Harvey", gender: "M" },
	{ id: 3, lastName: "", firstName: "Rachel", gender: "M" },
	{ id: 4, lastName: "Hardmen", firstName: "Arya", gender: "M" },
	{ id: 5, lastName: "Hardmen", firstName: "Pierson", gender: "M" },
	{ id: 6, lastName: "Melisandre", firstName: null, gender: "M" },
	{ id: 7, lastName: "Harris", firstName: "Sam", gender: "M" },
	{ id: 8, lastName: "Ross", firstName: "Mike", gender: "M" },
	{ id: 9, lastName: "Specter", firstName: "Donna", gender: "M" },
];

const PlayerTable = () => {
	return (
		<>
			<div className="mt-5 pt-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-11 col-md-8">
							<DataTable rows={rows} columns={columns} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PlayerTable;
