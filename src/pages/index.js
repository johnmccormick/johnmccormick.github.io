import * as React from "react"

import Widget from "../components/widget"
import WidgetGroup from "../components/widgetGroup"

// markup
const IndexPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-800 to-indigo-900">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        <div className="py-8 lg:py-12">
          <h1 className="text-4xl lg:text-5xl font-bold">John McCormick</h1>
        </div>
        <div className="flex flex-col items-center justify-center pb-10 lg:pb-16 lg:pt-4 space-y-8 lg:space-y-16">
          <WidgetGroup title="Developer">
            <Widget url="https://github.com/johnmccormick" title="Github" />
            <Widget url="https://www.linkedin.com/in/john--mccormick/" title="LinkedIn" />
            <Widget url="mailto:johnmccormick91@gmail.com" title="Contact" />
          </WidgetGroup>
          <WidgetGroup title="Apps">
            <Widget url="https://www.pizzaexpress.com/mobile-pay" title="PizzaExpress: Mobile Pay" subtitle="2020" />
            <Widget url="https://tv-roulette.herokuapp.com" title="TV Roulette" subtitle="2019" />
          </WidgetGroup>
          <WidgetGroup title="Misc">
            <Widget url="https://johnmccormick.github.io/fluid-cubes/" title="Fluid Cubes" subtitle="2020" />
            <Widget url="https://johnmccormick.github.io/fractal-cubes/" title="Fractal Cubes" subtitle="2020" />
            <Widget url="https://johnmccormick.github.io/plant/" title="Plant" subtitle="2017" />
            <Widget url="https://johnmccormick.github.io/lightcycles/" title="Light Cycles" subtitle="2011" />
          </WidgetGroup>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
