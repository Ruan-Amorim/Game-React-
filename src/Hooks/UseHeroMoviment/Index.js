"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var use_event_listener_1 = require("use-event-listener");
var react_1 = require("react");
var Sizes_1 = require("../../Componentes/Sizes");
function useHeroMoviment(initialPosition) {
    var _a = (0, react_1.useState)(initialPosition), positionState = _a[0], updatePositionState = _a[1];
    var _b = (0, react_1.useState)('RIGHT'), direcao = _b[0], updateDirecaoState = _b[1];
    (0, use_event_listener_1.default)('keydown', function (event) {
        if (event.key === Sizes_1.EDirecao.UP) {
            updatePositionState({ x: positionState.x, y: positionState.y + 1 });
        }
        else if (event.key === Sizes_1.EDirecao.LEFT) {
            updatePositionState({ x: positionState.x - 1, y: positionState.y });
            updateDirecaoState('LEFT');
        }
        if (event.key === Sizes_1.EDirecao.DOWN) {
            updatePositionState({ x: positionState.x, y: positionState.y - 1 });
        }
        if (event.key === Sizes_1.EDirecao.RIGHT) {
            updatePositionState({ x: positionState.x + 1, y: positionState.y });
            updateDirecaoState('RIGHT');
        }
    });
    var _c = (0, react_1.useState)(10), faca = _c[0], setFaca = _c[1];
    var up = function () {
        if (positionState.y < 18) {
            updatePositionState({ x: positionState.x, y: positionState.y + 1 });
            setFaca(function (prevFaca) { return prevFaca + 1; });
        }
        if (faca > 6) {
            var currentPosition = window.scrollY;
            window.scroll({ top: currentPosition - 48, behavior: 'smooth' });
        }
        else { }
    };
    var down = function () {
        if (positionState.y > 1) {
            updatePositionState({ x: positionState.x, y: positionState.y - 1 });
            setFaca(function (prevFaca) { return prevFaca - 1; });
        }
        if (faca < 17) {
            var currentPosition = window.scrollY;
            window.scroll({ top: currentPosition + 48, behavior: 'smooth' });
        }
    };
    var right = function () {
        if (positionState.x < 19) {
            updatePositionState({ x: positionState.x + 1, y: positionState.y });
            updateDirecaoState('RIGHT');
        }
        else { }
    };
    var left = function () {
        if (positionState.x > 0) {
            updatePositionState({ x: positionState.x - 1, y: positionState.y });
            updateDirecaoState('LEFT');
        }
        else { }
    };
    return {
        positionState: positionState,
        direcao: direcao,
        up: up,
        down: down,
        left: left,
        right: right,
    };
}
;
exports.default = useHeroMoviment;
