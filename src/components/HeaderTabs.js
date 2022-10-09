function HeaderTabs() {
  const tabs = ['Bebidas', 'Comidas', 'Diversos'];

  return (
      <div className="btn-group btn-group-lg" role="group" aria-label="Tabs Buttons">
        {tabs.map((tabItem) => (
          <button type="button" class="btn btn-secondary">
            {tabItem}
          </button>
        ))}
      </div>
  )
}

export default HeaderTabs;