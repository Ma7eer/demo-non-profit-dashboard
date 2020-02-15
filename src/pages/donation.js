import React, { useState, useEffect, useRef } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

import assistanceSchema from '../schemas/assistance'
import { patchData, postData, getData, deleteData, getOne } from '../api/index'
import Table from '../components/Table.js'
import TableButtons from '../components/TableButtons'
import TableContainer from '../components/TableContainer'
import FormContainer from '../components/FormContainer'
import Separator from '../components/Separator'
import ExportButton from '../components/ExportButton'
// import Assistance from './assistance'
import { sumAllRows } from '../util/tableMethods'

const manifest = {
  schema: assistanceSchema,
  path: 'donation',
  title: 'بيانات المساعدات',
  columns: [
    {
      Header: 'المبلغ',
      accessor: 'cost'
    },
    {
      Header: 'التاريخ',
      accessor: 'supportNeeded.date'
    },
    {
      Header: 'وصف المساعدة',
      accessor: 'supportNeeded.description'
    },
    {
      Header: 'نوع المساعدة',
      accessor: 'assistanceCategory'
    },
    {
      Header: '	رقم المساعدة',
      accessor: 'assistanceId'
    },
    {
      Header: 'رقم ملف الأسرة',
      accessor: 'familyId'
    }
  ]
}

const Assistance = () => {
  // #region hooks ////////////////////////
  const [schema, setSchema] = useState({})
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataToDownload, setDataToDownload] = useState([])

  const reactTable = useRef({})
  const csvLink = useRef({})
  // #endregion //////////////////////////

  // #region Lifecycle ////////////////////////
  const fetchData = async () => {
    try {
      const result = await getData(manifest.path)
      setData([...result])
    } catch (err) {
      console.log(err)
    }
  }
  // #endregion //////////////////////////

  // #region Lifecycle ////////////////////////
  useEffect(() => {
    setLoading(true)
    fetchData()
    setLoading(false)
  }, [])
  // #endregion //////////////////////////

  // #region handlers ////////////////////////
  const handleSubmit = async Schema => {
    setSchema(Schema.data)
    setLoading(true)

    if (editMode) {
      patchData(manifest.path, Schema.data)
      getData(manifest.path).then(res => {
        let arr = res
        arr.splice(editIndex, 1, Schema.data)
        setSchema({})
        setEditMode(false)
        setData(arr)
        setEditIndex(null)
        setLoading(false)
      })
    } else {
      setLoading(true)
      await postData(manifest.path, Schema.data)
      await getData(manifest.path).then(res => {
        setData(res)
        setSchema({})
        setEditMode(false)
        setLoading(false)
      })
    }
  }

  const handleEditButtonClick = async (data, index) => {
    setLoading(true)
    let d = await getOne(manifest.path, data._id)

    setSchema(d)
    setEditMode(true)
    setEditIndex(index)
    setLoading(false)
  }

  const handleDeleteButtonClick = async data => {
    if (window.confirm('Are you sure you want to delete?')) {
      setLoading(true)
      await deleteData(manifest.path, data.original)
      await fetchData()
      setLoading(false)
    } else {
      return
    }
  }

  const getDataToDownLoad = async () => {
    const currentRecords = await reactTable.current.getResolvedState()
      .sortedData
    var data_to_download = []
    for (var index = 0; index < currentRecords.length; index++) {
      let record_to_download = {}
      for (var colIndex = 0; colIndex < manifest.columns.length; colIndex++) {
        record_to_download[manifest.columns[colIndex].Header] =
          currentRecords[index][manifest.columns[colIndex].accessor]
      }
      data_to_download.push(record_to_download)
    }
    await setDataToDownload(data_to_download)
    // this.setState({ dataToDownload: data_to_download }, () => {
    //   // click the CSVLink component to trigger the CSV download
    //   // this.csvLink.link.click()
    // })
    // await csvLink.current.link.click()
    return data_to_download
  }

  const download = async () => {
    await getDataToDownLoad()
    await csvLink.current.link.click()
  }

  const print = async () => {
    let d = await getDataToDownLoad()
    let col = []
    for (let i = 0; i < manifest.columns.length; i++) {
      col.push(manifest.columns[i].Header)
    }
    await printJS({
      printable: d,
      properties: col,
      type: 'json',
      gridHeaderStyle:
        'color: black;  border: 2px solid #3971A5; font-weight: bold;',
      gridStyle: 'border: 2px solid #3971A5; text-align: center'
    })
  }
  // #endregion //////////////////////////

  let columns = [
    {
      Header: manifest.title,
      columns: [
        {
          Header: '',
          Cell: row => (
            <TableButtons
              row={row}
              handleEdit={handleEditButtonClick}
              handleDelete={handleDeleteButtonClick}
            />
          ),
          Footer: row => sumAllRows(row)
        },
        ...manifest.columns
      ]
    }
  ]

  return (
    <>
      <FormContainer title={manifest.title}>
        <Form
          form={manifest.schema}
          onSubmit={handleSubmit}
          submission={{ data: schema }}
        />
      </FormContainer>
      <Separator />
      <TableContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ExportButton title="تنزيل البيانات" handleExport={download} />
          <ExportButton title="طباعة البيانات" handleExport={print} />
        </div>
        <div>
          <CSVLink
            data={dataToDownload}
            filename="data.csv"
            className="hidden"
            ref={csvLink}
            target="_blank"
          />
        </div>
        <Table
          columnData={columns}
          tableData={data}
          loading={loading}
          r={reactTable}
        />
      </TableContainer>
    </>
  )
}

export default Assistance
