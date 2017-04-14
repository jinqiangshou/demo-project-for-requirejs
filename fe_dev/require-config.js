requirejs.config({
    baseUrl: '/assets/js',
    paths: {
        jquery: 'vendor/jquery-3.2.0.min',
        m1: 'module/m1',
        m2: 'module/m2',
        m3: 'module/m3',
        requirecss: 'vendor/require-css.min',
        'css-builder': 'vendor/css-builder',
        normalize: 'vendor/normalize',
        indexpage: 'page/indexpage'
    },
    map: {
        '*': {
            css: 'requirecss'
        }
    },
    shim: {
        m3: ['css!../css/m3']
    }
});