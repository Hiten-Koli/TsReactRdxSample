import { UserNameToLower } from "./data/authData";
import { authenticateUser, sum } from "./data/utils";

describe.only("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    //arrange
    const sut = sum;
    //acting
    const actual = sut(1,2)
    //asserting
    expect(actual).toBe(3);
    expect(actual).toBeGreaterThan(2);
    expect(actual).toBeLessThan(4);
    expect(actual).toEqual(3);
  });
  it.each([
    [3,4,7],
    [0,6,6],
    [9,13,22],
    [9,8,17]
  ])(`return the sum of %i and %i as %i`, (a, b, expected)=>{
    const actual = sum(a,b);
    expect(actual).toBe(expected)
  })
  //repeatation
  describe("Authenticate User", ()=>{
    it('lower case of username', ()=>{
        const sut = authenticateUser;
        const actual = sut('Developer', 'PassDev')
        expect(actual.usernameToLower).toBe("developer")
    });
    it('username characters of valid username', ()=>{
        const sut = authenticateUser;
        const actual = sut('Dev', 'PassDev')
        expect(actual.usernameCharacter).toEqual(['D','e','v'])
    });
    it('check if user is authenticated', ()=>{
        const sut = authenticateUser;
        const actual = sut('Dev', 'PassDev')
        expect(actual.isAuthenticated).toBeTruthy()
    });
  })
  describe('Username To Lower Case Class test', ()=>{
    let sut: UserNameToLower;
    beforeEach(()=>{
        console.log('setup here')
        sut = new UserNameToLower()
    })
    // afterEach(()=>{
    //     console.log("this is the teardown....")
    // })
    it('return username ', ()=>{
        const actual= sut.toLower("TestUser")
        console.log('this is the main test...')
        expect(actual).toBe('testuser')
    });
    it('throws an invalid username error... ', ()=>{
        expect(()=>sut.toLower("")).toThrow()
    })
  })
});
