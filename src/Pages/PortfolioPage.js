import { useState } from "react";
import * as XLSX from "xlsx";
import CombinedChart from "../util/CombinedChart";

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];

      let sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { range: 5 });

      sheet = sheet.map((row) => ({
        Date:
          typeof row["NAV Date"] === "number"
            ? XLSX.SSF.format("yyyy-mm-dd", row["NAV Date"])
            : row["NAV Date"],
        NAV: Number(row["NAV (Rs)"]),
      }));

      sheet.reverse();
      setData(sheet);

      setFilteredData(sheet); 
    };
    reader.readAsBinaryString(file);
  };

  const handleFilter = () => {
    if (!startDate && !endDate) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((d) => {
      const current = new Date(d.Date);
      return (
        (!startDate || current >= new Date(startDate)) &&
        (!endDate || current <= new Date(endDate))
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Portfolio Statistics</h2>
      <input type="file" onChange={handleFileUpload} />

      {data.length > 0 && (
        <>
          {filteredData.length > 0 ? (
            <>
            <div style={{ margin: "20px 0", overflowX: "auto" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          whiteSpace: "nowrap",
        }}
      >
        <tbody>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px 12px",
                background: "#f4f4f4",
              }}
            >
              NAV Date
            </th>
            {filteredData.map((row, i) => (
              <td
                key={i}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px 12px",
                  textAlign: "center",
                }}
              >
                {row.Date}
              </td>
            ))}
          </tr>

          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px 12px",
                background: "#f4f4f4",
              }}
            >
              NAV
            </th>
            {filteredData.map((row, i) => (
              <td
                key={i}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px 12px",
                  textAlign: "center",
                }}
              >
                {row.NAV}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>

    <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              margin: "20px 0",
              gap: "10px",
            }}
          >
            <label style={{ fontWeight: "500" }}>From:</label>
            <input
              type="date"
              value={startDate}
              placeholder="Select Date"
              onChange={(e) => setStartDate(e.target.value)}
              style={{
                padding: "5px 8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <label style={{ fontWeight: "500" }}>To:</label>
            <input
              type="date"
              value={endDate}
              placeholder="Select Date"
              onChange={(e) => setEndDate(e.target.value)}
              style={{
                padding: "5px 8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <button
              onClick={handleFilter}
              style={{
                background: "#2563eb",
                color: "white",
                padding: "6px 12px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Apply
            </button>
          </div>
              <h3>Equity Chart</h3>
              <CombinedChart data={filteredData} />
            </>
          ) : (
            <p style={{ textAlign: "center", color: "gray" }}>
              No data available for the selected range.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Portfolio;
