import React, { useState } from 'react'
import OrderDetails from './OrderDetails';

export default function Order( { order } ) {

    function convertSqlDateToJavascriptDate(sqlDate){
        let date = new Date(sqlDate);
        return date.toDateString()
    };

    const [open , setOpen] = useState(false);

  return (
    <>
          <tr key={order._id} className="text-center" >
            <td className="text-sm py-3" >{order._id}</td>
            <td>
              <p className="text-sm py-3" >{convertSqlDateToJavascriptDate(order.createdAt)}</p>
            </td>
            <td className="text-sm py-3">
              <p>{order.amount}€</p>
            </td>
            <td className="text-sm py-3">
                <p className={`${ (order.status === 'Cancelled') ? 'bg-green-400 ' : 'bg-blue-500' } px-2 py-1 rounded`} >
                    {order.status}
                </p>
              
            </td>
            <td className="text-sm py-3">
                <i onClick={() => setOpen(true)} className="fas fa-right-to-bracket text-xl cursor-pointer"></i>
            </td>
          </tr>
          <OrderDetails order = {order} open={open} setOpen={(setOpen)} />
    </>
  )
}
