
https://react-bootstrap.netlify.app/components/offcanvas/

<Router>
  <div className="App">
    <Navbar />
    <div ClassName="content">
      <Switch>
        <Route path="/todos/:id/create">
          <Steps /> {/*Displays the form to create steps or subtasks for an specific todo*/}
        <Route/>
        <Route path="/todos/create">
          <Form /> {/*Displays the form to create a todo*/}
        <Route/>
        <Route path="/todos/:id">
          <Todos /> {/*Display an specific todo*/}
        <Route/>
        <Route path="/todos">
          <TodoList /> {/*Displays the list of all the todos*/}
        <Route/>
        <Route path="/">
          <Home />
        <Route/>
      </Switch>
    </div>
  </div>
</Router>
