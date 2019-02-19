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

        });
    });
});