# ssp19TestBuilder

Given a credit card number, this function should return a string with the 
name of a network, like 'MasterCard' or 'American Express'
Example: detectNetwork('343456789012345') should return 'American Express'

How can you tell one card network from another? Easy! 
There are two indicators:
  1. The first few numbers (called the prefix)
  2. The number of digits in the number (called the length)

Note: `cardNumber` will always be a string

1.The Diner's Club network always starts with a 38 or 39 and is 14 digits long

2.The American Express network always starts with a 34 or 37 and is 15 digits long

3.Visa always has a prefix of 4 and a length of 13, 16, or 19.

4.MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16

5.Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

6.Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

7.China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

8.Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and 
a length of 16, 18, or 19.

**Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent 
conflict, you should choose the network with the longer prefix.**
