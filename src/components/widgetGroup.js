import * as React from "react"

export default ({ title, children }) => (
  <div className="flex flex-col space-y-4 lg:space-y-8 w-full">
    <h2 className="text-3xl font-bold mb-1">{title}</h2>
    { children }
  </div>
)