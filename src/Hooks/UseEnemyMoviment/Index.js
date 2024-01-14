"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interval_1 = require("@use-it/interval");
var react_1 = require("react");
var Sizes_1 = require("../../Componentes/Sizes");
function useEnemyMoviment(initialPosition) {
    var _a = (0, react_1.useState)(initialPosition), positionState = _a[0], updatePositionState = _a[1];
    var _b = (0, react_1.useState)('RIGHT'), direcao = _b[0], updateDirecaoState = _b[1];
    (0, interval_1.default)(function move() {
        var random = Math.floor(Math.random() * 4);
        var directionArray = Object.values(Sizes_1.EDirecao);
        var randomDirecao = directionArray[random];
        if (randomDirecao === Sizes_1.EDirecao.UP && positionState.y < 18) {
            updatePositionState({ x: positionState.x, y: positionState.y + 1 });
        }
        else if (randomDirecao === Sizes_1.EDirecao.LEFT && positionState.x > 0) {
            updatePositionState({ x: positionState.x - 1, y: positionState.y });
            updateDirecaoState('LEFT');
        }
        if (randomDirecao === Sizes_1.EDirecao.DOWN && positionState.y > 1) {
            updatePositionState({ x: positionState.x, y: positionState.y - 1 });
        }
        if (randomDirecao === Sizes_1.EDirecao.RIGHT && positionState.x < 19) {
            updatePositionState({ x: positionState.x + 1, y: positionState.y });
            updateDirecaoState('RIGHT');
        }
    }, 2000);
    return {
        positionState: positionState,
        direcao: direcao,
    };
}
;
exports.default = useEnemyMoviment;
