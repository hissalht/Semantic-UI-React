import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const firstHeaderRow = ['Name', 'Type', 'Files', 'Ruby', 'Javascript', 'Python']

const tableData = [
  { name: 'Alpha Team', type: 'Project 1', files: 2, ruby: true },
  { name: 'Beta Team', type: 'Project 1', files: 52, ruby: true },
  { name: 'Beta Team', type: 'Project 2', files: 12, javascript: true },
  { name: 'Beta Team', type: 'Project 3', files: 21, ruby: true },
]

const checkMark = <Icon color='green' name='checkmark' size='large' />

const renderBodyRow = ({ name, type, files, ruby, javascript, python }, i, data) => {
  const row = {
    key: name + type,
    cells: [
      name,
      type,
      { key: 'files', content: files, textAlign: 'right' },
      {
        key: 'ruby',
        content: ruby ? checkMark : null,
        textAlign: 'center',
      },
      {
        key: 'javascript',
        content: javascript ? checkMark : null,
        textAlign: 'center',
      },
      {
        key: 'python',
        content: python ? checkMark : null,
        textAlign: 'center',
      },
    ],
  }

  // assuming the data is sorted by 'name'...
  if (i === 0 || name !== data[i - 1].name) {
    let nameRowSpan = 1
    for (let j = i + 1; j < data.length; j += 1) {
      if (data[j].name === name) {
        nameRowSpan += 1
      }
    }
    // we replace the first cell
    row.cells[0] = { key: 'name', content: name, rowSpan: nameRowSpan }
  } else if (i > 0 && name === data[i - 1].name) {
    row.cells.shift()
  }

  return row
}

const TableExampleStructuredShorthand = () => (
  <Table
    celled
    structured
    tableData={tableData}
    renderBodyRow={renderBodyRow}
    headerRow={firstHeaderRow}
  />
)

export default TableExampleStructuredShorthand
