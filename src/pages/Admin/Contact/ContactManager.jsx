import React from "react";
import { useEffect } from "react";
import { getListsContact } from "../../../api/api";
import TableComponent from "../../../components/Table/Table";
import { useState } from "react";
import moment from "moment";

const ContactManager = (props) => {
  const [arr, setArr] = useState([]);
  useEffect(async () => {
    props.handleLoading(true);
    await getListsContact().then((res) => {
      setArr(res.data);
    });
    props.handleLoading(false);
  }, []);

  const rows = arr.map((e, index) => {
    return {
      id: index,
      stt: index + 1,
      fullName: e.fullName,
      email: e.email,
      message: e.message,
      subject: e.subject,
      created: moment(e?.created).format("DD/MM/YYY"),
    };
  });

  const columns = [
    { field: "stt", headerName: "STT", width: 90 },
    { field: "fullName", headerName: "Full Name", width: 160 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "subject", headerName: "Subject", width: 200 },
    { field: "message", headerName: "Message", width: 500 },
    { field: "created", headerName: "Created", width: 150 },
  ];
  return (
    <div className="wrap-content-admin">
      <div className="content-admin-title">
        <div>
          <span>Contact Manager:</span>
        </div>
      </div>
      <hr />
      <TableComponent columns={columns} rows={rows} />
    </div>
  );
};

export default ContactManager;
