import { 
	_getHashStringWithAssignedParam, 
	_getObjectFromHashString, 
	_getHashStringFromObject,
} from './lib'


describe('_getObjectFromHashString', () => {
	it('returns empty object when given undefined', () => {
		expect(_getObjectFromHashString()).toEqual({})
		expect(Object.keys(_getObjectFromHashString()).length).toEqual(0)
	})

	it('returns empty object when given empty string', () => {
		expect(_getObjectFromHashString('')).toEqual({})
		expect(Object.keys(_getObjectFromHashString('')).length).toEqual(0)
	})

	it('makes object from hash string with multiple params', () => {
		expect(_getObjectFromHashString('#x=10&y=20')).toEqual({x:'10', y:'20'})
	})
})

describe('_getHashStringFromObject', () => {
	it('returns empty string when object doesn\'t contain keys', () => {
		expect(_getHashStringFromObject({})).toEqual('')
	})

	it('makes hash string from object with one property', () => {
		expect(_getHashStringFromObject({x: '100'})).toEqual('#x=100')
	})

	it('makes hash string from object with multiple properties', () => {
		expect(_getHashStringFromObject({x: 10, y:'20'})).toEqual('#x=10&y=20')
	})
})

describe('_getHashStringWithAssignedParam', () => {
	it('assigns param to empty hash string', () => {
		expect(_getHashStringWithAssignedParam('','x','12')).toEqual('#x=12')
	})

	it('attaches param to existing hash string', () => {
		expect(_getHashStringWithAssignedParam('#x=12', 'y', 18)).toEqual('#x=12&y=18')
	})

	it('replaces param in existing hash string', () => {
		expect(_getHashStringWithAssignedParam('#x=12&y=18', 'x', 2)).toEqual('#x=2&y=18')
	})
})