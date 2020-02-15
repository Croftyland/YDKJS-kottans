//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(numbers) {
        const matrix = [];
        numbers.split('\n').forEach(row => {
            const inner = [];
            row.split(' ').forEach(num => {
                inner.push(+num);
            });
            matrix.push(inner);
        });
        this.matrix = matrix;
    }

    get rows() {
        return this.matrix;
    }

    get columns() {
        const rotated = [];
        for (let i = 0; i < this.matrix[0].length; i++) {
            const row = [];
            for (let j = 0; j < this.matrix.length; j++) {
                row.push(this.matrix[j][i]);
            }
            rotated.push(row);
        }
        return rotated;
    }
}
