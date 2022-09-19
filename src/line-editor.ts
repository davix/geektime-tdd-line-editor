import Konva from "konva";

export class LineEditor extends Konva.Group {
    private line?: Konva.Line

    attach(line: Konva.Line) {
        this.line = line
        line.on('pointsChange', () => {this.update()})
        this.update()
    }

    update() {
        let points = this.line!.points()
        let pre = -1
        for (let i = 0; i < points.length/2; i++) {
            let curX = points[i*2]
            let curY = points[i*2+1]
            this.get(i, `anchor`).setAttrs({x:curX, y:curY })
            if (pre !== -1) {
                let preX = points[pre*2]
                let preY = points[pre*2+1]

                this.get(i, `control`).setAttrs(
                    {x:preX+(curX-preX)/2, y:preY+(curY-preY)/2 })
            }
            pre = i
        }
    }

    private get(index: number, type: string) {
        return this.findOne(`.${index}-${type}`) || this.create(index, type)
    }

    private create(index: number, type: string) {
        let point = new Konva.Circle({name: `${index}-${type}`, radius: 10})
        if (type === 'anchor') {
            point.draggable(true)
                .on('dragmove', (e) => {
                    let points = this.line!.points()
                    points[index*2] = e.target.x()
                    points[index*2+1] = e.target.y()
                    this.line!.points(points)
                })
        }
        this.add(point)
        return point
    }
}
