function HeaderTabs() {
  const tabs = ['Bebidas', 'Comidas', 'Diversos'];

  return (
    <div class="container" >
      <div class="row">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" >
          {tabs.map((tabItem) => (
            <div class="btn-group me-2" role="group">
              <button type="button" class="btn btn-dark">
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