import React from "react";
import MainNav from "../../components/mainNav";
import DataTable from "../../components/tables/materialTable";
import { BasicTable } from "../../components/tables/simpletable";

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{
		field: "age",
		headerName: "Age",
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
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const SportCenterTable = () => {
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

export default SportCenterTable;
