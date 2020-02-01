function dfs_generator(grid) {

    let current = grid[0][0]

    function loop () {
        const isActive = backtracker()
        if (isActive) requestAnimationFrame(loop)
    }
    loop()

    function backtracker() {
        let arr = [current.top, current.bottom, current.right, current.left]

        arr = arr.filter(b => b !== undefined && b.color === 'white')
        let rand = Math.floor(Math.random() * arr.length)
        let target = arr[rand]

        if (target !== undefined) {
            if (target === current.top) {
                current.borderTop = target.borderBottom = false
            }
            else if (target === current.bottom) {
                current.borderBottom = target.borderTop = false
            }
            else if (target === current.right) {
                current.borderRight = target.borderLeft = false
            }
            else if (target === current.left) {
                current.borderLeft = target.borderRight = false
            }
            current.color = 'orange'
        } else {
            if (!current.borderTop && current.top.color !== 'lightblue') {
                target = current.top
            }
            else if (!current.borderBottom && current.bottom.color !== 'lightblue') {
                target = current.bottom
            }
            else if (!current.borderRight && current.right.color !== 'lightblue') {
                target = current.right
            }
            else if (!current.borderLeft && current.left.color !== 'lightblue') {
                target = current.left
            }
            else {
                return false
            }
            current.color = 'lightblue'
        }

        current = target
        current.color = 'red'
        return true
    }
}