import { DictionaryReplacer } from './../src/DictionaryReplacer';

// Kata from http://codingdojo.org/kata/DictionaryReplacer/
describe('This kata is about making a simple string replacer.', () => {
    it('input : "", dict empty, output:""', () => {
        // Arrange
        let input = '';
        let dictionary = {};
        let dictionaryReplacer = new DictionaryReplacer(dictionary);

        // Act
        let result = dictionaryReplacer.replace(input);

        // Assert
        expect(result).toBe('');
    });

    it('input : "$temp$", dict ["temp", "temporary"], output: "temporary"', () => {
        let input = '$temp$';
        let dictionary = {
            temp: 'temporary'
        };
        let dictionaryReplacer = new DictionaryReplacer(dictionary);

        let result = dictionaryReplacer.replace(input);

        expect(result).toBe('temporary');
    });

    it(`input : "$temp$ here comes the name $name$", 
         dict ["temp", "temporary"] ["name", "John Doe"], 
         output : "temporary here comes the name John Doe"`, () => {
        let input = '$temp$ here comes the name $name$';
        let dictionary = {
            temp: 'temporary',
            name: 'John Doe'
        };
        let dictionaryReplacer = new DictionaryReplacer(dictionary);

        let result = dictionaryReplacer.replace(input);

        expect(result).toBe('temporary here comes the name John Doe');
    });
});
