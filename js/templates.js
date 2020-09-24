//template rendering
(function(){
    window.app = window.app || {};
    window.app.Templates = { Home,Board}
    function Home (boards) {
        return `<header class="header">
                    <h1 class="header-font">To-Do LIST</h1>
                </header>
                <main class="main-body">
                    <div>
                        ${  
                            boards.Project.length !== 0 ? 
                            TaskBoard(boards.Project) :
                            '<div>No Data Fetched !!!</div>'
                        }
                        <div id="taskBox"></div>
                    </div>
                </main>`
    }
    function TaskBoard (project) {
        return ` <div class ="margin font"><label>Choose a Project:</label>
    <select name="projects" class="font" id="projects">${project.map((i,index)=>Option(i,index))}
        </select></div>
        `
    }
    function Option({Name},index){
        return `<option class ="font" value=${index} >${Name}</option>`
    }
    function Board(tasks){
        var taskBoard="<div>";
         tasks.map((i,index)=>taskBoard=taskBoard+eachtask(i,index));
         return taskBoard + "</div>";

    }
    function eachtask(task,index){
        return `<div id='task_${index}'  class = "droptarget"><div><input type="checkbox" ><span>${task}</span></div></div>`
    }
})()