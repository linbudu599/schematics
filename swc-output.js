function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var regeneratorRuntime = require("regenerator-runtime");
import { build } from 'esbuild';
// import { esbuildPluginTsc } from './esbuild-decorator.plugin';
// import { esbuildIgnorePlugin } from './ignore-plugin';
import { esbuildHtmlPlugin } from './html-plugin';
_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var res1;
    return regeneratorRuntime.wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.prev = 0;
                _ctx.next = 3;
                return build({
                    entryPoints: [
                        './html-plugin/src/index.ts', 
                    ],
                    bundle: true,
                    tsconfig: 'tsconfig.base.json',
                    // outdir: './html-plugin/out',
                    outfile: './html-plugin/out/dist.js',
                    plugins: [
                        esbuildHtmlPlugin({
                            templatePath: './html-plugin/src/index.html'
                        }), 
                    ],
                    target: 'node14',
                    format: 'esm'
                });
            case 3:
                res1 = _ctx.sent;
                console.log('res1: ', res1);
                _ctx.next = 10;
                break;
            case 7:
                _ctx.prev = 7;
                _ctx.t0 = _ctx["catch"](0);
                console.log('error: ', _ctx.t0);
            case 10:
            case "end":
                return _ctx.stop();
        }
    }, _callee, null, [
        [
            0,
            7
        ]
    ]);
}))();
