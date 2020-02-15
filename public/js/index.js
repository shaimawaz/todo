var socket = io.connect('http://localhost:4000');
function addTask() {
    taskbody = document.getElementById('body').value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var time = today.getHours() +":"+today.getMinutes();
    today = dd + '/' + mm;
    socket.emit('addTask', {
        task: taskbody,
        date:today,
        time:time
    });
};
let result = document.getElementById('res');

socket.on('addTask', function (data) {
    result.innerHTML += `<div>
                            <p>`+ data.task + `</p>
                            <span>`+ data.date + `</span>
                            <span>`+ data.time + `</span>
                        </div>`;
});
