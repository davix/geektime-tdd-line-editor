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
    it('should update anchor positions when line update', function () {
        let line = new Konva.Line({points: [10, 10, 30, 30]})
        let editor = new LineEditor()
        editor.attach(line)

        line.points([40, 40, 60, 60])

        expect(editor.findOne('.0-anchor').getAttrs()).toMatchObject({x: 40, y: 40})
        expect(editor.findOne('.1-anchor').getAttrs()).toMatchObject({x: 60, y: 60})
    });

    it('should add control point to line editor', function () {
        let line = new Konva.Line({points: [10, 10, 30, 30]})
        let editor = new LineEditor()
        editor.attach(line)

        expect(editor.findOne('.1-control').getAttrs()).toMatchObject({x: 20, y: 20})
    });

    it('should update control positions when line update', function () {
        let line = new Konva.Line({points: [10, 10, 30, 30]})
        let editor = new LineEditor()
        editor.attach(line)

        line.points([40, 40, 60, 60])

        expect(editor.findOne('.1-control').getAttrs()).toMatchObject({x: 50, y: 50})
    });
    //TODO change line points when dragging anchor
    it('should change line points when dragging anchor', function () {
        let line = new Konva.Line({points: [10, 10, 30, 30]})
        let editor = new LineEditor()
        editor.attach(line)

        let anchor = editor.findOne('.1-anchor')

        expect(anchor.draggable()).toEqual(true)
    });
    //TODO add new anchor on editor when dragging control point
    //TODO remove anchor when double click anchor
})
