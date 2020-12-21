import React, { useState } from 'react'
import { countries, townships, postcodes } from '../data'

function ZipCode() {
  // 記錄資料陣列的索引值
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <h1>台灣郵遞區號連動式下拉表單元素</h1>
      <select
        value={country}
        onChange={(event) => {
          // 設定要轉換為數字(索引值)
          setCountry(+event.target.value)
          // 設回預設值(區域)
          setTownship(-1)
        }}
      >
        {/* 預設值為-1 */}
        <option value={-1}>請選擇縣市</option>
        {/* 從countries提取縣市資料，索引值當作option的值 */}
        {countries.map((v, i) => (
          <option value={i} key={i}>
            {v}
          </option>
        ))}
      </select>
      <select
        value={township}
        onChange={(event) => {
          // 設定要轉換為數字(索引值)
          setTownship(+event.target.value)
        }}
      >
        {/* 預設值為-1 */}
        <option value={-1}>請選擇區域</option>
        {/* 從countries提取縣市資料，索引值當作option的值 */}
        {/* 要檢查country會有-1的情況 */}
        {country > -1 &&
          townships[country].map((v, i) => (
            <option value={i} key={i}>
              {v}
            </option>
          ))}
      </select>
      <span>
        {country > -1 && township > -1 && postcodes[country][township]}
      </span>
    </>
  )
}

export default ZipCode
