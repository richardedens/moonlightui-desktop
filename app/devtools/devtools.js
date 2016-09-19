document.addEventListener("keydown", function (e) {
    if (e.which === 123) {
        nodeRequire('remote').getCurrentWindow().toggleDevTools();
    } else if (e.which === 116) {
        location.reload();
    }
});