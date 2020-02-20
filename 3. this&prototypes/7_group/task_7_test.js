describe("ExampleTests", function(){
    it("testBob27Male", function(){
        let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M')
        let expected = "Hello. My name is Bob. I am 27. I am male."
        doTest(expected, dm.hello())
    })

    it("test27MaleBob", function(){
        let dm = new Dinglemouse().setAge(27).setSex('M').setName("Bob")
        let expected = "Hello. I am 27. I am male. My name is Bob."
        doTest(expected, dm.hello())
    })

    it("testAliceFemale", function(){
        let dm = new Dinglemouse().setName("Alice").setSex('F')
        let expected = "Hello. My name is Alice. I am female."
        doTest(expected, dm.hello())
    })

    it("testBatman", function(){
        let dm = new Dinglemouse().setName("Batman")
        let expected = "Hello. My name is Batman."
        doTest(expected, dm.hello())
    })
})
