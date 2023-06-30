import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

const data = [[1,2],[1]]

const wopts = { bookType:"xlsx", bookSST:false, type:"array" };

const workSheet = XLSX.utils.aoa_to_sheet(data)

const workbook = XLSX.utils.book_new()
workbook.SheetNames = ["sheet1"]
workbook.Sheets = {["sheet1"]: workSheet};

console.log(workbook)



const wbout = XLSX.writeXLSX(workbook,wopts);

console.log(wbout)



saveAs(new Blob([wbout],{type:"application/octet-stream"}), "test.xlsx");