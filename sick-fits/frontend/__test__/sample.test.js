describe('sample test 101 ',() =>{
    it('works as expected',() => {
        var age = 100;
        expect(1).toEqual(1);
        expect(age).toEqual(100);
    });

    it('handle range',() => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    });

    //it.only() or fit() is to run only that it and skip others
    //it.skip() or xit() is to skip the test and open others

    it('list of name',() => {
        const dogs = ['snickers', 'hugo'];
        expect(dogs).toEqual(dogs);
        expect(dogs).toContain('snickers');
    });

});