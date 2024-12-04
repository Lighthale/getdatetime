$(document).ready(function () {
    let time;

    $.get('get_date_time.php', function (data, status) {
        time = new Date(data.current_date);
        displayTime();
    });

    setInterval(updateTime, 1000);

    function updateTime() {
        time.setSeconds(time.getSeconds() + 1);
        displayTime();
    }

    function displayTime() {
        $('#clock').val(time.toLocaleString('en-US', { timezone: 'Asia/Singapore'}));
    }

    $('#btn-time-in').click(function () {
        let logs = $('#logs').html();
        $.get('get_date_time.php', function (data, status) {
            time = new Date(data.current_date);
            logs += 'Time in pressed at ' + time.toLocaleString('en-US', { timezone: 'Asia/Singapore'}) + ' <br>';

            $('#logs').html(logs);
        });
    });
});