"use strict";
var DictionaryReplacer_1 = require("./../src/DictionaryReplacer");
// Kata from http://codingdojo.org/kata/DictionaryReplacer/
describe('This kata is about making a simple string replacer.', function () {
    it('input : "", dict empty, output:""', function () {
        // Arrange
        var input = '';
        var dictionary = {};
        var dictionaryReplacer = new DictionaryReplacer_1.DictionaryReplacer(dictionary);
        // Act
        var result = dictionaryReplacer.replace(input);
        // Assert
        expect(result).toBe('');
    });
    it('input : "$temp$", dict ["temp", "temporary"], output: "temporary"', function () {
        var input = '$temp$';
        var dictionary = {
            temp: 'temporary'
        };
        var dictionaryReplacer = new DictionaryReplacer_1.DictionaryReplacer(dictionary);
        var result = dictionaryReplacer.replace(input);
        expect(result).toBe('temporary');
    });
    it("input : \"$temp$ here comes the name $name$\", \n         dict [\"temp\", \"temporary\"] [\"name\", \"John Doe\"], \n         output : \"temporary here comes the name John Doe\"", function () {
        var input = '$temp$ here comes the name $name$';
        var dictionary = {
            temp: 'temporary',
            name: 'John Doe'
        };
        var dictionaryReplacer = new DictionaryReplacer_1.DictionaryReplacer(dictionary);
        var result = dictionaryReplacer.replace(input);
        expect(result).toBe('temporary here comes the name John Doe');
    });
});
//# sourceMappingURL=KataDictionaryReplacer.spec.js.map