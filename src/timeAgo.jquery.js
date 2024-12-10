import $ from 'jquery';

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const secondsPast = Math.ceil((now - date) / 1000);

    if (secondsPast < 12) {
        return 'vừa xong';
    } else if (secondsPast < 60) {
        return secondsPast + ' giây trước';
    } else if (secondsPast < 3600) {
        return Math.ceil(secondsPast / 60) + ' phút trước';
    } else if (secondsPast < 86400) {
        return Math.ceil(secondsPast / 3600) + ' giờ trước'
    } else {
        return Math.ceil(secondsPast / 86400) + ' ngày trước';
    }
}

$.fn.timeAgo = function (options) {
    const M = $.extend({
        attr: 'datetime'
    }, options);

    this.each(function () {
        let item = $(this)
        item.html(timeAgo(item.attr(M.attr)))
    })
};

export { $ };
