describe('functions', () => {
    describe('syntax for creating them', () => {
        it('declaring them', () => {
            // Named function - you can forward reference named functions in scope.
            function add(a: number, b: number) {
                return a + b;
            }
            expect(add(3, 3)).toBe(6);

            // Anonymous functions
            // -- an anonymous function that I immediately invoke
            expect((function (a, b) { return a / b; })(10, 5)).toBe(2);

            const multiply = function (a: number, b: number) { return a * b; };
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => a / b;     // 'fat arrow' means 'goes to ' in english
            // no return needed when body of function is an expression
            expect(divide(10, 2)).toBe(5);

            const logIt = (msg: string) => {
                msg = msg.toUpperCase();
                console.log(msg);
                return true;
            };
            logIt('Fun with functions!');
        });
    });
    describe('higher order function', () => {
        // Higher order function: function that takes one or more functions as arguments and returns a function as a result.
        it('first example', () => {
        });
    });

});