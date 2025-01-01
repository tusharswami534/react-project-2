import React from 'react'
import { Checked, Cross } from '../../utils/icons'

const TableMap = () => {
    const DATA_LIST = [
        {
            heading: "Rift",
            mobile : <Cross/>,
            invoicing: <Cross/>,
            bookkeeping: <Cross/>,
            accountancySupport: <Checked/>,
            taxFiling: <Checked/>,
            fee: "Est: £300 per year",
        },
        {
            heading: "Taxscouts",
            mobile : <Cross/>,
            invoicing: <Cross/>,
            bookkeeping: <Cross/>,
            accountancySupport: <Checked/>,
            taxFiling: <Checked/>,
            fee: "£300 per year",
        },
        {
            heading: "Coconut",
            mobile : <Checked/>,
            invoicing: <Checked/>,
            bookkeeping: <Checked/>,
            accountancySupport: <Cross/>,
            taxFiling: <Checked/>,
            fee: "£9.00 p/m £108 per year",
        },
        {
            heading: "Pie",
            mobile : <Checked/>,
            invoicing: <Checked/>,
            bookkeeping: <Checked/>,
            accountancySupport: <Checked/>,
            taxFiling: <Checked/>,
            fee: "£6.99 or £9.99p/m £59.99 review fee £143.87 per year",
        },
    ]
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-[#026070] max-w-[580px] overflow-auto px-4 py-12 rounded-xl'>
            <div className='flex'>
                <div className='min-w-[140px] w-full'>
                    <div className='min-h-[64px]'></div>
                    <p className='py-[18.8px] pl-1 text-xs border-t border-solid border-black text-white'>Mobile App</p>
                    <p className='py-[18.8px] pl-1 text-xs border-t border-solid border-black text-white'>Invoicing</p>
                    <p className='py-[18.8px] pl-1 text-xs border-t border-solid border-black text-white'>Bookkeeping</p>
                    <p className='py-[18.8px] pl-1 text-xs border-t border-solid border-black text-white '>Accountancy <span className='block'> support </span></p>
                    <p className='py-[18.8px] pl-1 text-xs border-t border-solid border-black text-white'>Tax Filing</p>
                    <p className='py-[18.8px] pl-1 text-xs border-t border-solid border-black text-white'>Fee</p>
                </div>
                {DATA_LIST.map((data, index) => (
                    <div key={index} className='min-w-[102.31px] w-full'>
                        <div className='w-full'>
                            <div className={`max-w-[92.31px] bg-white rounded-t-[6px] min-h-[64px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                <p className='text-[#026070] text-xs'>{data.heading}</p>
                            </div>
                        </div>
                        <div className='w-full border-t border-solid border-black'>
                            <div className={`max-w-[92.31px] bg-white min-h-[53.59px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                {data.mobile}
                            </div>
                        </div>
                        <div className='w-full border-t border-solid border-black'>
                            <div className={`max-w-[92.31px] bg-white min-h-[53.59px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                {data.invoicing}
                            </div>
                        </div>
                        <div className='w-full border-t border-solid border-black'>
                            <div className={`max-w-[92.31px] bg-white min-h-[53.59px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                {data.bookkeeping}
                            </div>
                        </div>
                        <div className='w-full border-t border-solid border-black'>
                            <div className={`max-w-[92.31px] bg-white min-h-[69.59px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                {data.accountancySupport}
                            </div>
                        </div>
                        <div className='w-full border-t border-solid border-black'>
                            <div className={`max-w-[92.31px] bg-white min-h-[53.59px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                {data.bookkeeping}
                            </div>
                        </div>
                        <div className='w-full border-t border-solid border-black'>
                            <div className={`max-w-[92.31px] rounded-b-[6px] bg-white min-h-[53.59px] flex flex-col justify-center items-center w-full ${index === 3 ? '!bg-[#56E3CB]' : ''}`}>
                                <p className={`text-[8px]  text-center ${index === 0 ? 'max-w-[32px]' : index === 1 ? 'max-w-[31px]' : index === 2 ? 'max-w-[48px]' : index === 3 ? 'max-w-[65px] text-left' : ''}`}>{data.fee}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TableMap
