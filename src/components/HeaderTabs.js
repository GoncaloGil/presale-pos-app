function HeaderTabs() {
  const tabs = ['Bebidas', 'Comidas', 'Diversos'];

  return (
      <div className="row">
        {tabs.map((tabItem) => (
          <button>
            {tabItem}
          </button>
        ))}
      </div>
  )
}

export default HeaderTabs;