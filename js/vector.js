class Vector2D {
    constructor(x = 0.0, y = 0.0) {
        this.x = Number(x);
        this.y = Number(y);
    }

    toString() {
        return `${this.x}@${this.y}`;
    }

    dump() {
        return `new Vector2D(${this.x},${this.y})`;
    }

    toJSON() {
        return {
            type: this.constructor.name,
            x: this.x,
            y: this.y
        };
    }
}

let zero = new Vector2D(1, '2.3');
console.log(`zero:${zero} ${JSON.stringify(zero)},${zero.dump()}`);
