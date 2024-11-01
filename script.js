function showOptions() {
    document.getElementById('options').style.display = 'block';
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
    document.getElementById('messageContainer').style.display = 'block';
}

function copyText() {
    const text = document.getElementById('message').textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('متن کپی شد!');
    }, function(err) {
        alert('خطا در کپی کردن متن');
    });
}
