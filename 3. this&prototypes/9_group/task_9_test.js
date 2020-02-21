describe("Who has the most money?", () => {
    it("Basic tests", () => {
        const andy = new Student("Andy", 0, 0, 2);
        const stephen = new Student("Stephen", 0, 4, 0);
        const eric = new Student("Eric", 8, 1, 0);
        const david = new Student("David", 2, 0, 1);
        const phil = new Student("Phil", 0, 2, 1);
        const cam = new Student("Cameron", 2, 2, 0);
        const geoff = new Student("Geoff", 0, 3, 0);

        // "What happens if one student has the most money?"
        assert.strictEqual(mostMoney([andy, stephen, eric, david, phil]), "Eric")
        assert.strictEqual(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric")

        // "What happens if there is only one student?"
        assert.strictEqual(mostMoney([andy]), "Andy")
        assert.strictEqual(mostMoney([stephen]), "Stephen")

        // "What happens if all students have the same amount of money?"
        assert.strictEqual(mostMoney([cam, geoff]), "all")
        assert.strictEqual(mostMoney([david, cam, geoff]), "all")
    });
});
