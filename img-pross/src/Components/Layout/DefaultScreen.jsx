import React from 'react'

const DefaultScreen = () => {
    return (
        <div className="flex-1 flex items-start justify-start">
            <div className="text-start p-12">
                <h1 className="text-2xl font-semibold text-[#141414] mb-3">
                    Welcome to ArchAi
                </h1>
                <p className="text-[#707070] font-medium opacity-75 text-md">
                    Select an option from the sidebar to get started.
                </p>
            </div>
        </div>
  )
}

export default DefaultScreen