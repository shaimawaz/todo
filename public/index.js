var socket = io.connect('http://localhost:4000');
function addTask() {
    taskbody = document.getElementById('body').value;
    assignee = document.getElementById('assign').value;
    socket.emit('addTask', {
        task: taskbody,
        assign: assignee
    });
};
let result = document.getElementById('res');

socket.on('addTask', function (data) {
    result.innerHTML += `<div>
                            <h4>HEY `+ data.assign + `</h4>
                            <p>this task is assigned to you</p>
                            <p>`+ data.task + `</p>
                        </div>`;
});
