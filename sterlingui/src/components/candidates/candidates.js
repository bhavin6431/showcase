import DataTable from 'react-data-table-component';
import CandidateDetails from './candidatedetails';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 5,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 6,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 7,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 8,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 9,
        title: 'Ghostbusters',
        year: '1984',
    },

]

const tableCustomStyles = {
    headRow: {
      style: {
        color:'#223336',
        backgroundColor: '#e7eef0'
      },
    },
    rows: {
      style: {
        color: "green",
        backgroundColor: "STRIPEDCOLOR"
      },
      stripedStyle: {
        color: "red",
        backgroundColor: "#dfe7f5"
      }
    }
  }

export default function Candidates() {

    return (
        <div className='container-fuild p-3  h-100 align-items-center justify-content-center'>
            <div className="card shadow d-flex p-3 mb-5 bg-white rounded">
                <h5 className="d-flex justify-content-center border border-primary rounded bg-success">Candiate List</h5>
                <div className="card-body">
                    <DataTable                        
                        columns={columns}
                        data={data}
                        pagination
                        selectableRows
                        dense
                        highlightOnHover
                        expandableRows
                        expandableRowsComponent={CandidateDetails}                        
                        fixedHeader
                        fixedHeaderScrollHeight="300px"
                        striped                        
                        customStyles={tableCustomStyles}                       
                    />
                </div></div></div>
    )
}