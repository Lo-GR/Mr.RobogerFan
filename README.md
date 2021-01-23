# **Mr.Roboger's Neighborhood Fanboy**
### This is a web application that will count a every number from 0 to an inputted number.

 ### _Contributor(s) and Contact Info_
> Logan Roth diamondintheroth@gmail.com - [Github(Lo-GR)](https://github.com/Lo-GR)

<br/>

## _Technologies Used_

* **HTML**
* **CSS**
* **Markdown**
* **Gitbash**
* **JavaScript**

## _Description_
This web application will take a number provided and show every number from 0 to the given number. In addition, the application will replace any numbers that include a 1, 2, or 3 with Beep, Boop, or "Won't you be my neighbor" respectively. It includes a very friendly dancing robot friend. 

This is a practice project for Looping and Array manipulation for a class at Epicodus.

## _Setup/Installation_

> Repository: https://github.com/Lo-GR/Mr.RobogerFan.git
1. Clone the above repository from Github
2. Navigate to the root directory of the project in your terminal and type "open index.html" to view the project in your default browser.
3. Open the project in your text editor to view the code.

## _Known Bugs_
* No known bugs at this time. Please contact a contributor to report any bugs found during use.

## _Future Updates_
* Add different interactions when entering non-numbers (as opposed to preventing input through CSS)
* Add more animations to text entering page
* Add a reverse order option
* Add an option to do negative numbers

## _Specs/Tests_

Describe: beepBoop().

Test: "It should return an array with a 0 if the number 0 is inputted"
>Expect(beepBoop(0).toEqual([0]);

Test: "It should return an array of numbers from 0 to the inputted number"
> Expect(beepBoop(5).toEqual([0, 1, 2, 3, 4, 5]);

Test: "It should return an array of numbers from 0 to the inputted number where every number containing a '1' replaces all digits with 'Beep!'"
>Expect(beepBoop(5).toEqual(["Beep!", 2, 3, 4, 5]);

Test: "It should return an array of numbers from 0 to the inputted number where every number containing a '1' replaces all digits of that number with 'Beep!' and every number containing '2' replaces all digits of that number with 'Boop!'"
>Expect(beepBoop(5).toEqual(["Beep!", "Boop!", 3, 4, 5]);

Test: "It should return an array of numbers from 0 to the inputted number where every number containing a '1' replaces all digits of that number with 'Beep!', every number containing '2' replaces all digits of that number with 'Boop!', and every number containing 3 replaces all digits of that number with 'Won't you be my neighbor?'"
>Expect(beepBoop(5).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]);

## _License_

[_MIT_](https://opensource.org/licenses/MIT)

Copyright (c) 2021, Logan Roth.

Please contact Contributor for further use information or if you would like to make a contribution.