(function(){
    function App(){
      this.view = new window.app.View()
      this.controller = new window.app.Controller(this.view)
  }
    
    var app = new App();
})()