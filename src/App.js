import React, { useState } from 'react';

function Form() {

  // Declaring state to store every row data 
  const [data, setData] = useState([
    { account: '', debit: 0, credit: 0 },
    { account: '', debit: 0, credit: 0 },
    { account: '', debit: 0, credit: 0 }
  ]);

  // function to add new row in table
  const addRow = () => {
    setData([...data, { account: '', debit: 0, credit: 0 }]);
  }

  // function to delete row in the table
  const deleteRow = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  // function to update a value in the table
  const updateValue = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  }

  // function to calculate overall debit
  const calculateDebit = () => {
    let debit = 0;
    data.forEach(row => {
      if (!row.debit == '')
        debit += parseInt(row.debit);
    });
    return debit;
  }
  // function to calculate overall credit
  const calculateCredit = () => {
    let credit = 0;
    data.forEach(row => {
      if (!row.credit == '')
        credit += parseInt(row.credit);
    });
    return credit;
  }
  // function to calculate overall value
  const calculateTotal = () => {
    let total = 0;
    data.forEach(row => {
      total += row.debit - row.credit;
    });
    return total;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Debit</th>
            <th>Credit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <select value={row.account} onChange={event => updateValue(index, 'account', event.target.value)}>
                  <option value="">Select an account</option>
                  <option value="account1">Account 1</option>
                  <option value="account2">Account 2</option>
                  <option value="account3">Account 3</option>
                </select>
              </td>
              <td>
                <input type="number" value={row.debit} onChange={event => updateValue(index, 'debit', (event.target.value))} />
              </td>
              <td>
                <input type="number" value={row.credit} onChange={event => updateValue(index, 'credit', event.target.value)} />
              </td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <button onClick={addRow}>Add row</button>
            </td>
            <td><p>Debit: {calculateDebit()}</p></td>
            <td><p>Credit: {calculateCredit()}</p></td>
            <td><p>Total: {calculateTotal()}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Form;
