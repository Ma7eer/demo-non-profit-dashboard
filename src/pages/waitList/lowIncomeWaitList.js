import React, { Component } from "react";
import { CSVLink } from "react-csv";

import { getData } from "../../api/index";
import Table from "../../components/Table.js";
import TableContainer from "../../components/TableContainer";

const manifest = {
  path: "family/lowIncomeWaitList",
  title: "طلبات الاسر المعسرة",
  columns: [
    {
      Header: "اسم الزوجة",
      accessor: "wife.0.wifeName"
    },
    {
      Header: "	اسم الزوج",
      accessor: "husband.0.husbandName"
    },
    {
      Header: "رقم ملف الاسرة",
      accessor: "familyId"
    }
  ]
};

export default class WaitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      dataToDownload: []
    };
    this.download = this.download.bind(this);
  }

  componentWillMount() {
    this.setState({ loading: true });
    getData(manifest.path)
      .then(res => this.setState({ data: [...res], loading: false }))
      .catch(err => console.log(err));
  }

  download(event) {
    const currentRecords = this.reactTable.getResolvedState().sortedData;
    var data_to_download = [];
    for (var index = 0; index < currentRecords.length; index++) {
      let record_to_download = {};
      for (var colIndex = 0; colIndex < manifest.columns.length; colIndex++) {
        record_to_download[manifest.columns[colIndex].Header] =
          currentRecords[index][manifest.columns[colIndex].accessor];
      }
      data_to_download.push(record_to_download);
    }
    this.setState({ dataToDownload: data_to_download }, () => {
      // click the CSVLink component to trigger the CSV download
      this.csvLink.link.click();
    });
  }

  render() {
    let columns = [
      {
        Header: manifest.title,
        columns: [
          {
            Header: "",
            Cell: row => <button>submit</button>,
            Footer: row => (
              <span>
                {row.data.length} <strong>:المجموع</strong>
              </span>
            )
          },
          ...manifest.columns
        ]
      }
    ];
    return (
      <>
        <TableContainer>
          <div>
            <button className="btn btn-primary" onClick={this.download}>
              Download
            </button>
          </div>
          <div>
            <CSVLink
              data={this.state.dataToDownload}
              filename="data.csv"
              className="hidden"
              ref={r => (this.csvLink = r)}
              target="_blank"
            />
          </div>
          <Table
            columnData={columns}
            tableData={this.state.data}
            loading={this.state.loading}
            r={r => (this.reactTable = r)}
          />
        </TableContainer>
      </>
    );
  }
}
