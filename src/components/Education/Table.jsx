import React from 'react'

function Table({list}) {
  return (
    <div>
      {list.length > 0 && (
        <table
        cellSpacing={'20px'}
        style={{width: '100%', fontSize: 'calc(10px + 2vmax)'}}
        >
          <tbody>
            {Object.values(list).map((obj, inx) => (
              <tr key={inx} >
                {Object.values(obj).map((value, inx2) => (
                  <td key={inx2} style={{padding:'10px'}}>{value}</td>
                ))}
              
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table
