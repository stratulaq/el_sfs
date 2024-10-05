import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import html2pdf from 'html2pdf.js';
import Document from './Document';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment/moment";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [totalValue, setTotalValue] = useState(0);
  const [daysValue, setDaysValue] = useState(0);
  const [dayCost, setDayCost] = useState(0);
  const generatePDF = () => {
    const element = document.getElementById('pdf-content');    
    const opt = {
      margin: 0.4,
      filename: moment().format("MMMM_YYYY_") + 'raportSFS.pdf',
      image: { type: 'jpeg', quality: 1.0 }, 
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait', compressPDF: true, dpi: 150 }
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleChangeTotal = (event) => {
    setTotalValue(event.target.value);
  };
  const handleChangeDays = (event) => {
    setDaysValue(event.target.value);
    setDayCost(totalValue / event.target.value)
  };

  return (
    <div className="App container p-[12px] flex flex-col items-center mx-auto">
      <div className='flex gap-4'>
        <div >
          <label htmlFor="fullName" className="block mb-1">
            Дата
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)} 
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Общая сумма
          </label>
          <input
            type="number"
            id="total"
            name="total"
            value={totalValue}
            onChange={handleChangeTotal}
            className="w-full p-2 border rounded-[6px]"
          />
        </div>

        <div>
          <label htmlFor="age" className="block mb-1">
            Количество дней
          </label>
          <input
            type="number"
            id="days"
            name="days"
            value={daysValue}
            onChange={handleChangeDays}
            className="w-full p-2 border rounded-[6px]"
          />
        </div>
      <button className='bg-[#a9a9a9] px-[12px] rounded text-[#ffffff] font-[500]' onClick={generatePDF}>Download PDF</button>
      </div>
        <div className='h-12 border-1 border-[#a9a9a9] w-full flex flex-1'>
          <hr className='my-[24px] w-full' />
        </div>


      <div id="pdf-content" className=''>
        <Document date={startDate} total={totalValue} daycost={dayCost.toFixed(2)}  />
      </div>
    </div>
  );
}

export default App;
