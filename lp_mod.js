(function() {
    function get_url(_parms) {
        var _indx, _key, _val;
        var _p = [];
        for (var i = 0; i < _parms.length; i++) {
            _indx = _parms[i].indexOf('=');
            if (_indx > 0) {
                _key = _parms[i].substring(0, _indx);
                _val = _parms[i].substring(_indx + 1);
                _p[_key] = _val;
            }
        }
        return _p;
    }

    var url = location.href;
    var url_slice = [];
    var parms = [];
    var i;

    if (url.indexOf('?') > 0) url_slice = url.split('?');

    if (url_slice.length > 1) {
        parms = get_url(url_slice[1].split('&'));
        if (parms['apadcode'] != null) {
            if (/^\d{6}$/.test(parms['apadcode'])) {
                var a_elm = $('a')
                for (i = 0; i < a_elm.length; i++) {
                    if (/\/webform\//.test(a_elm.eq(i).attr('href'))) {
                        var str = a_elm.eq(i).attr('href').replace('aid000144', 'aid' + parms['apadcode']);
                        a_elm.eq(i).attr('href', str);
                    }
                }

            }
        }
    }
}());
