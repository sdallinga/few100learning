describe('writing a basic spec', () => {
    it('should be easy', () => {
        // given (Arrange)  (Create lab environment)
        let firstName = 'Boba',
            lastName = 'Fett';
        // when (Act) (poke at something)
        let fullName = lastName + ', ' + firstName;
        // then (Assert) (check what happened)
        expect(fullName).toBe('Fett, Boba');
    });
});