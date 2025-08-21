import React, { forwardRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./PrintPage.css";
import { ReactComponent as Logo } from "../../images/logo-a.svg";
import Modal from "../../pages/Modal";
import closeIcon from "../../images/close-circle-red.svg";
import Button from "../Buttons/Button";
import printerIcon from "../../images/printer-icon.svg";

const ComponentToPrint = forwardRef((props, ref) => {
  const [signatures, setSignatures] = useState([
    {
      id: 1,
      jobTitle: "Direct Manager",
      userName: "Admin user",
      privilege: "Officer",
      signed: "8c986851a79fa66",
      signedAt: "12/14/2023",
    },
    {
      id: 2,
      jobTitle: "Procurement Department",
      userName: "Admin user",
      privilege: "Officer",
      signed: "Not appropriate",
      signedAt: "12/14/2023",
    },
    {
      id: 3,
      jobTitle: "Accounting Department",
      userName: "Admin user",
      privilege: "Officer",
      signed: "5b68c986851a79fa66",
      signedAt: "12/14/2023",
    },
    {
      id: 4,
      jobTitle: "Budget Holder",
      userName: "Admin user",
      privilege: "Officer",
      signed: "68c98685 1a79fa66",
      signedAt: "12/14/2023",
    },
  ]);
  return (
    // <Modal widht={'100%'}  >
    <div ref={ref} className="print-page-container">
      <header className="print-header">
        <div className="header-time">
          <div className="time-heder-a">8:48 PM 12/14/2023</div>
          <div className="buttom-time">Purchase Request</div>
        </div>
        <div className="header-logo">
          {/* <img src={logo} alt="" /> */}
          <Logo />
        </div>
        <div className="header-section">Procurement Section</div>
      </header>

      <section style={{ width: "100%" }}>
        <table className="request-details" style={{ width: "100%" }}>
          <tbody>
            <tr className="request-row">
              <th>Purchase Request No.</th>
              <td>PRT23062</td>
              <th>Requested by</th>
              <td>Core</td>
            </tr>
            <tr className="request-row">
              <th>Unit Code</th>
              <td>1001</td>
              <th>Currency</th>
              <td>USD</td>
            </tr>
            <tr className="request-row">
              <th>Budget Line Value</th>
              <td>-</td>
              <th>Spent Budget Line Value</th>
              <td>-</td>
            </tr>
            <tr className="request-row">
              <th>PR Date</th>
              <td>8 / Dec / 2023</td>
              <th>Required implementation Date</th>
              <td>11 / Dec / 2023</td>
            </tr>
            <tr className="request-row">
              <th>Project Start Date</th>
              <td>9 / Oct / 2023</td>
              <th>Project End Date</th>
              <td>9 / Oct / 2023</td>
            </tr>
            <tr className="request-row">
              <th>Organization Name</th>
              <td>Midmar</td>
              <th>Unit Name</th>
              <td>1001-Antep office-A0</td>
            </tr>
            <tr className="request-row">
              <th colSpan={1}>Description</th>
              <td colSpan={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="items-table">
        <h2>Items</h2>
        <table className="request-details" style={{ width: "100%" }}>
          <thead>
            <tr className="request-row">
              <th>#</th>
              <th>Item</th>
              <th>Unit</th>
              <th>quantity</th>
              <th>Estimated Unit Price</th>
              <th>Estimated Total Price</th>
              <th>Budget Code</th>
            </tr>
          </thead>
          <tbody>
            <tr className="request-row">
              <td>1</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
              <td>Page</td>
              <td>140</td>
              <td>14.00</td>
              <td>1960.00</td>
              <td>1-1001-1.3</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="total-price-table">
        <h2>Total Price</h2>
        <table className="request-details" style={{ width: "100%" }}>
          <tbody>
            <tr className="request-row">
              <th style={{ width: "64%" }} colSpan={4}>
                Estimated Total Price
              </th>
              <td style={{ width: "16%" }}>1960.00</td>
              <td style={{ width: "16%" }}>USD</td>
            </tr>
            <tr className="request-row">
              <th colSpan={2}>The number of total items</th>
              <td style={{ width: "16%" }}>1</td>
              <td className="total-price-description" colSpan={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="signatures-print" style={{ marginTop: "10rem" }}>
        <h2>Signatures</h2>
        <table className="request-details" style={{ width: "100%" }}>
          <thead>
            <tr className="request-row">
              <th>#</th>
              <th>Job title</th>
              <th>User Name</th>
              <th>Privilege</th>
              <th>Signed</th>
              <th>Signed at</th>
            </tr>
          </thead>
          <tbody>
            {signatures.map((signature, index) => (
              <tr
                key={index}
                className="request-row"
                style={{ whiteSpace: "wrap" }}
              >
                <td style={{ width: "", backgroundColor: "#F5F5F5" }}>
                  {signature.id}
                </td>
                <td
                  style={{
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  {signature.jobTitle}
                </td>
                <td>{signature.userName}</td>
                <td>{signature.privilege}</td>
                <td>
                  {signature.signed === "Not appropriate" ? (
                    <span className="not-appropriate">
                      Not appropriate <img src={closeIcon} alt="" />{" "}
                    </span>
                  ) : (
                    signature.signed
                  )}
                </td>
                <td>{signature.signedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    // </Modal>
  );
});

const PrintPage = () => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => alert("Print finished!"),
  });

  const savePdf = async () => {
    const canvas = await html2canvas(componentRef.current);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
    });

    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("purchase-request.pdf");
  };

  return (
    <div className="select-state budget-table-pur ">
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </div>
      {/* <button onClick={handlePrint}>Print this out!</button> */}
      {/* <button onClick={savePdf}>Save as PDF</button> */}
      <div className="select-state budget-table-pur ">
        <h2>Print</h2>
        <div className="select-state-content">
          <Button
            onClick={handlePrint}
            Icon={printerIcon}
            iconPosition={"right"}
            width={"50%"}
            type="submit"
            label="Click here to print"
            className={"button-edit-project "}
            height={"3rem"}
          />
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
