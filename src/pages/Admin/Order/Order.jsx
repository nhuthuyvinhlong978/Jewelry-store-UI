import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import TableComponent from '../../../components/Table/Table';
import IconButton from '@material-ui/core/IconButton';
import { getAllOrder } from '../../../api/api';
import moment from 'moment';

const Order = () => {
  const [arr, setArr] = useState([]);
  useEffect(async () => {
    await getAllOrder().then(res => {
      setArr(res.data);
    })
  },[])
  const columns = [
    { field: 'stt', headerName: 'STT', width: 90 },
    { field: 'receiver', headerName: 'Customer', width: 250 },
    { field: 'phoneNumber', headerName: 'Phone', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 200 },
    { field: 'date', headerName: 'Created', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (action) => {
        return (
           <></>
        );
      },
    },
  ];
  const rows = arr.map((e, index) => {
    console.log(e);
    return {
      id: index,
      stt: index + 1,
      receiver: e.receiver,
      phoneNumber: e.phoneNumber,
      address: e.address,
      paymentMethod: e.paymentMethod,
      date: moment(e.created).format("DD-MM-YYYY")
    }
  });
  return (
    <div className="wrap-content-admin">
      <div className="content-admin-title">
        <div>
          <span>Order Manager:</span>
        </div>
      </div>
      <hr />
      <TableComponent columns={columns} rows={rows} />
    </div>
  );
};

export default Order;
