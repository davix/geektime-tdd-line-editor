import Konva from "konva";

export class LineEditor extends Konva.Group {
    private line?: Konva.Line

    attach(line: Konva.Line) {
        let points = line.points()
        let pre = -1
        for (let i = 0; i < points.length/2; i++) {
            let curX = points[i*2]
            let curY = points[i*2+1]
            this.add(new Konva.Circle({ name:`${i}-anchor`, radius:10, x:curX, y:curY }))
            if (pre !== -1) {
                let preX = points[pre*2]
                let preY = points[pre*2+1]

                this.add(new Konva.Circle({ name:`${i}-control`, radius:10,
                    x:preX+(curX-preX)/2, y:preY+(curY-preY)/2 }))
            }
            pre = i
        }

        this.line = line
        line.on('pointsChange', () => {this.update()})
    }

    update() {
        let points = this.line!.points()
        let pre = -1
        for (let i = 0; i < points.length/2; i++) {
            let curX = points[i*2]
            let curY = points[i*2+1]
            this.findOne(`.${i}-anchor`).setAttrs({x:curX, y:curY })
            if (pre !== -1) {
                let preX = points[pre*2]
                let preY = points[pre*2+1]

                this.findOne(`.${i}-control`).setAttrs(
                    {x:preX+(curX-preX)/2, y:preY+(curY-preY)/2 })
            }
            pre = i
        }
    }
}
