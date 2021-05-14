import React from "react"

const Widget = ({ url, title, subtitle }) => {
  return (
    <a
      className="widget"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="py-3 px-4 border-2 border-white rounded-md bg-indigo-800 hover:bg-indigo-700 hover:text-gray-100 transition duration-300">
        <span className="bold text-xl lg:text-2xl">{title}</span><span className="float-right text-xl">{subtitle}</span>
      </div>
    </a>
  )
}

export default Widget
