class Maze {
    constructor (width = 15, height = 15) {
        this.width = width
        this.height = height
        this.grid = this.createGrid(width, height)

        this.connect()
        this.reset()
    }

    createGrid (width, height) {
        const grid = []
        for (let y=0; y<height; y++) {
            grid[y] = []
            for (let x=0; x<width; x++) {
                grid[y][x] = { x, y, color: 'white' }
            }
        }
        return grid
    }

    connect () {
        const grid = this.grid
        for (let y=0; y<this.height; y++) {
            for (let x=0; x<this.width; x++) {
                if (y - 1 >= 0) {
                    grid[y][x].top = grid[y - 1][x]
                } 
                if (y + 1 < this.height) {
                    grid[y][x].bottom = grid[y + 1][x]
                } 
                if (x - 1 >= 0) {
                    grid[y][x].left = grid[y][x - 1]
                } 
                if (x + 1 < this.width) {
                    grid[y][x].right = grid[y][x + 1]
                }
            }
        }
    }

    reset () {
        this.grid.forEach(row => {
            row.forEach(col => {
                col.borderTop = true
                col.borderBottom = true
                col.borderLeft = true
                col.borderRight = true
            })
        })
    }
}