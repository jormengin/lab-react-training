import React from 'react';

export default function NumbersTable({ limit }) {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }

  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          {numbers.map(number => (
            <td
              key={number}
              style={{
                backgroundColor: number % 2 === 0 ? 'red' : 'white',
                width: '50px',
                height: '50px',
                textAlign: 'center',
                border: '1px solid black',
              }}
            >
              {number}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
