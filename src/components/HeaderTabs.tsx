import React from "react";

function HeaderTabs() {
  const tabs = ['Bebidas', 'Comidas', 'Diversos'];

  return (
    <div className="container" >
      <div className="row">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" >
          {tabs.map((tabItem) => (
            <div className="btn-group me-2" role="group">
              <button type="button" className="btn btn-dark">
                {tabItem}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderTabs;