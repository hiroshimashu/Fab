var url = location.href;
var parms = [];
var i, j, k;
if (url.indexOf('?') > 0) {
    parms = url.split('?');
} else {
    parms = "";
}

$(function() {
    
    function get_slice( _parms ) {
        var _indx, _key, _val;
        var _get_parms = [];
        for (var i = 0; i < _parms.length; i++) {
            _indx = _parms[i].indexOf('=');
            if (_indx > 0) {
                _key = _parms[i].substring(0,_indx);
                _val = _parms[i].substring(_indx+1);
                _get_parms[_key] = _val;
            }
        }
        return _get_parms;
    }
    
    if ( parms != "") {
        var parms_tmp = parms[1].split('&');
        get_parms = get_slice(parms_tmp);
        
        //申込みコードセット
        if ( get_parms['apadcode'] != null ) {
            if ( get_parms['apadcode'].search(/^\d{6}$/) == 0 ) {
                var mbn = $('a')
                if ( mbn.size() > 0 ) {
                    var a_parms, get_a_parm, get_a_parms, webform_url;
                    for (i=0; mbn.length > i; i++) {
                        if( mbn.eq(i).attr('href').indexOf('/webform/') > -1) {
                            a_parms = mbn.eq(i).attr('href').split('?');
                            get_a_parm = a_parms[1].split('&');
                            get_a_parms = get_slice(get_a_parm);
                            var webform_url = a_parms[0] + '?agent=aid' + get_parms['apadcode'] + '&route=' + get_a_parms['route'] + '&lp=' + get_a_parms['lp'];
                            mbn.eq(i).attr('href', webform_url);
                        }
                    }
                    
                }
            }
        }
    }
    

});
