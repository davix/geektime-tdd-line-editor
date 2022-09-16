import {describe, expect, it} from "vitest";
import Konva from "konva";
import {LineEditor} from "../src/line-editor";

describe('line editor', () => {
    it('should add anchor to line editor', function () {
        let line = new Konva.Line({points: [10, 10, 30, 30]})
        let editor = new LineEditor()
        editor.attach(line)

        expect(editor.findOne('.0-anchor').getAttrs()).toMatchObject({x: 10, y: 10})
        expect(editor.findOne('.1-anchor').getAttrs()).toMatchObject({x: 30, y: 30})
    });
})
