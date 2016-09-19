moonlightui().onready(function() {

    // Set menu.
    const {remote} = nodeRequire('electron');
    const {Menu} = remote;
    const {win} = remote;

    const menu = Menu.buildFromTemplate([
        {
            label: 'MOONLIGHTUI',
            submenu: [
                {
                    label: 'Development tools',
                    click: function() {
                        var win = remote.getCurrentWindow();
                        win.openDevTools();
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

    // Set interface
    moonlightui().energize('.moonlightui');

    // Close the application
    moonlightui('.main-app .moonlightui-modal-close').on('click', function() {
        var win = remote.getCurrentWindow();
        win.close();
        remote.quit();
    });
    // Minify the application
    moonlightui('.main-app .moonlightui-modal-min').on('click', function() {
        var win = remote.getCurrentWindow();
        win.minimize();
    });
    // Maximize the application
    moonlightui('.main-app .moonlightui-modal-max').on('click', function() {
        var win = remote.getCurrentWindow();
        if (!win.isMaximized()) {
            win.maximize();
        } else {
            win.unmaximize();
        }
    });
    // Maximize on doubleclick header
    moonlightui('.main-app.moonlightui-modal-header').on('dblclick', function() {
        var win = remote.getCurrentWindow();
        if (!win.isMaximized()) {
            win.maximize();
        } else {
            win.unmaximize();
        }
    });

});

