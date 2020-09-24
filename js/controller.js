(function () {
    window.app = window.app || {}
    window.app.Controller = Controller
    function Controller(view) {
        this.view = view
        var that = this;
        this.apiCall().then(res => that.refresh(res))
    }
    Controller.prototype.refresh = function (res) {
        this.view.setBackground();
        this.view.render(res);
        this.view.rerendered(res.Project[0].Tasks);
        this.dragAndDrop();
        this.view.addEvent('projects', 'change', (event) => {
            var tasks = res.Project[event.target.value].Tasks;
            this.view.rerendered(tasks);
            this.dragAndDrop();
})
    }
    Controller.prototype.apiCall = () => {
        return new Promise((resolve, reject) => {
            const url = 'http://demo0242938.mockable.io/todo';
            fetch(url).then(function (res) {
                return res.json();
            }).then(function (res) {
                resolve(res);
            }).catch(err => reject(err, "error!!!"))
        })
    }
    Controller.prototype.dragAndDrop = function () {
        var dragSrcEl = null;
        function handleDragStart(e) {
            this.style.opacity = '0.8';
            dragSrcEl = this;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        }
        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }
        function handleDragEnter() {
            this.classList.add('over');
        }
        function handleDragLeave() {
            this.classList.remove('over');
        }
        function handleDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation(); 
            }

            if (dragSrcEl != this) {
                dragSrcEl.innerHTML = this.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text/html');
            }

            return false;
        }
        function handleDragEnd() {
            this.style.opacity = '1';

            items.forEach(function (item) {
                item.classList.remove('over');
            });
        }
        let items = document.querySelectorAll('.droptarget');
        items.forEach(function (item) {
            item.addEventListener('dragstart', handleDragStart, false);
            item.addEventListener('dragenter', handleDragEnter, false);
            item.addEventListener('dragover', handleDragOver, false);
            item.addEventListener('dragleave', handleDragLeave, false);
            item.addEventListener('drop', handleDrop, false);
            item.addEventListener('dragend', handleDragEnd, false);
        });
    };
})();