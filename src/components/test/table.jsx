// export default function Datatable() {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <>
//       <div style={{ backgroundColor: "#EEEEEE" }}>
//         <Navbar />
//         <div className="container-fluid pt-5">
//           <div className="">
//             <div className="">
//               <div className="row">
//                 <div className="col-md-2 col-sm-4 col-lg-2 d-flex ">
//                   <Sidebar />
//                 </div>
//                 <div className="col-md-10 col-sm-8 col-lg-10">
//                   <div className="container text-center p-3">
//                     <div className="row">
//                       <div className="col-sm-4">
//                         <div
//                           className="card mb-2"
//                           style={{ borderRadius: "10px" }}
//                         >
//                           <div className="card-body">
//                             <AdminScatterChart />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div
//                           className="card mb-2"
//                           style={{ borderRadius: "10px" }}
//                         >
//                           <div className="card-body">
//                             <AdminBarGraph />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div
//                           className="card mb-2"
//                           style={{ borderRadius: "10px" }}
//                         >
//                           <div className="card-body">
//                             <AdminLineGraph />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className="datatable container"
//                     style={{ backgroundColor: "#fff", borderRadius: "10px" }}
//                   >
//                     <div className="datatableTitle">
//                       Registered Users
//                       <Link to="/users/new" className="link">
//                         New Exam
//                       </Link>
//                     </div>
//                     <DataGrid
//                       className="datagrid"
//                       rows={data}
//                       columns={userColumns.concat(actionColumn)}
//                       checkboxSelection
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
