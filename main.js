$(window).on('load', function () {
    if (window.location.href.indexOf("livechat=true") != -1) {
        Moneypenny.startLink();
    }
    if (window.location.href.indexOf("livechat=true&proactive") != -1) {
        Moneypenny.openProactiveChat(true, true);
    }
    if (window.location.href.indexOf("livechat=true&proactivecustom") != -1) {
        Moneypenny.openProactiveChat(true, true, 'Hello, can I help you with our setup process?');
    }

});