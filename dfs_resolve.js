function dfs_resolve(grid) {

    let current = grid[0][0]

    function loop () {
        backtracker()
        if (current.x === 29 && current.y === 29) return false
        requestAnimationFrame(loop)
    }
    loop()

    function backtracker() {

        if (current.borderTop === false && current.top.color === 'lightblue') {
            current.color = 'orange'
            current = current.top
        }
        else if (current.borderBottom === false && current.bottom.color === 'lightblue') {
            current.color = 'orange'
            current = current.bottom
        }
        else if (current.borderRight === false && current.right.color === 'lightblue') {
            current.color = 'orange'
            current = current.right
        }
        else if (current.borderLeft === false && current.left.color === 'lightblue') {
            current.color = 'orange'
            current = current.left
        }
        else if (current.borderTop === false && current.top.color === 'orange') {
            current.color = 'gray'
            current = current.top
        }
        else if (current.borderBottom === false && current.bottom.color === 'orange') {
            current.color = 'gray'
            current = current.bottom
        }
        else if (current.borderRight === false && current.right.color === 'orange') {
            current.color = 'gray'
            current = current.right
        }
        else if (current.borderLeft === false && current.left.color === 'orange') {
            current.color = 'gray'
            current = current.left
        }

        current.color = 'red'
    }
}