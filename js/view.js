(function () {
    window.app = window.app || {}
    window.app.View = View
    function View() {
        this.templates = window.app.Templates
    }
    View.prototype.render = function (boards) {
        document.querySelector('content').innerHTML = this.templates.Home(boards)
    }
    View.prototype.rerendered = function (tasks) {
        document.getElementById('taskBox').innerHTML = this.templates.Board(tasks)
    }
    View.prototype.addEvent = function (elementID, event, func) {
        document.getElementById(elementID).addEventListener(event, func)
    }
    View.prototype.setBackground = function () {
        document.querySelector('body').style.background = this.randomGradient()
    }
    View.prototype.randomGradient = function () {
        var colors = [{
            light: 'rgba(0, 255, 0, 0.7)',
            dark: 'rgba(0, 0, 255, 0.7)'
        },
        {
            light: 'rgba(255, 255, 0, 0.7)',
            dark: 'rgba(255, 0, 0, 0.7)'
        },
        {
            light: 'rgba(0, 247, 255, 0.5)',
            dark: 'rgba(106, 0, 255, 0.8)'
        }
        ]
        let rand = Math.floor(Math.random() * (colors.length - 0));
        return `linear-gradient(160deg, ${colors[rand].light}, ${colors[rand].dark})`
    }
})()