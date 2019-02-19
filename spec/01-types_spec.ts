describe('variables and constants and stuff', () => {
    describe('declaring variables', () => {
        it('using let to create a binding', () => {
            let name;
            name = 'Joe';
            expect(name).toBe('Joe');
            name = 11;
            expect(name).toBe(11);
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = 'Joe'; // Union type
            //name = 'Joe';
            expect(name).toBe('Joe');
            name = 11;
            expect(name).toBe(11);
        });
        it('declaring constants', () => {
            const PI = 3.14159;  // You can't assign a new value to this variable
            const FAVORITE_NUMBERS = [9, 22, 108];

            //FAVORITE_NUMBERS = [];  // illegal
            FAVORITE_NUMBERS[0] = 10;   // allowed

            const MOVIE = {
                title: 'The Force Awakens',
                director: 'Abrams'
            };

            MOVIE.director = 'Johnson';    // Objects are mutable in JavaScript
        });

        it('var is still there but it stinks and should not be used', () => {
            if (true) {
                var name = 'Fido';  // This is the thing you should NOT do (because of JavaScript variable hoisting)
            }
            expect(name).toBe('Fido');
        });

        describe('strings', () => {
            it('delimiting', () => {
                let first = 'Joe',
                    last = "Schmidt";
                expect("Joe").toBe(first);

                let msg = "She told \"Get Lost!\"";
                let msg2 = 'She told me "Get Lost!"';

                let story = `Chapter 1.
            
It was a drak and stormy night`;
                console.log(story);

                let fullName = `That is ${last}, ${first}`;
                expect(fullName).toBe('That is Schmidt, Joe');

            });

            describe('various literals', () => {
                it('examples', () => {
                    let n1 = 12 // number
                    let n2 = 1.3 // still a number
                    let n3 = 0xff; // still a number, but hexidecimal
                    let n4 = 0b00101;  // still a number but binary
                    let n5 = 0o744; // octal. Who the heck uses that??

                    //typescript thing
                    const salary = 1_000_000;    // you can use this notation for large numbers.
                });
            });

            describe('arrays and array literals', () => {
                it('has them', () => {
                    const stuff: Array<number | string> = [12, 13];
                    stuff[2] = 'tacos';
                    expect(stuff[2]).toBe('tacos');
                    let food = stuff[2];
                });
            });
            describe('tuples', () => {


                it('a brief introduction TS'), () => {
                    let warren: [string, string, number, string];
                    warren = ['Warren', 'Ellis', 55, 'Musician'];
                    let occupation = warren[3];
                    let age = warren[2];

                });
            it('an example of Tuples', () => {
                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }

                const [fullName, len] = formatName('Han', 'Solo');  // destructuring
                expect(fullName).toBe('Solo, Han');
                expect(len).toBe(9);

                const stuff = ['Jeff', 'Gonzalez', 49];
                const [firstName, , age] = stuff;
                expect(firstName).toBe('Jeff');
                expect(age).toBe(49);

            });
        });
    });


});
});
