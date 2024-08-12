import React from 'react'

const BarSearchComponent = () => {
    return (
        <div>
            <div class='flex items-center justify-center '>
                <div class="flex rounded-full bg-[#0d1829] px-2 w-[800px] ">
                    <input
                        type="text"
                        class="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
                        placeholder="Search name hotel or travel you want"
                    />
                    <button type="submit" class="relative p-2 bg-[#0d1829] rounded-full">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:bg-slate-900 rounded-full'>

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BarSearchComponent