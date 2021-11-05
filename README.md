# Table of Contents
    [Project title]
    [Task description]
    [User Story]
    [Acceptance Criteria]
    [Reference]
    [Repository structure]

# Project title
Password regenerator web application

# Task description
This task requires to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

# User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


# Acceptance Criteria
- Initiate when I press "Generate a Password"
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of

- Use prompt windows to acquire user input/preference
WHEN prompted for password criteria
THEN I [select] which criteria to include in the password

- Perference 1 = password length
WHEN prompted for the length of the password
THEN I choose a length of at least [8 characters and no more than 128] characters

- Preference 2,3,4,5 = character types 
WHEN asked for character types to include in the password
THEN I confirm whether or not to include [lowercase, uppercase, numeric, and/or special characters]

- Check input validity
WHEN I answer each prompt
THEN my input should be [validated] and at least one character type should be selected

- Generate password
WHEN all prompts are answered
THEN a [password] is generated that matches the selected criteria

- Display the password
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

- (personal choice - line 34) Reconfirm the users preference
WHEN user preference input is not valid
THEN I receive a message taking me back to select a series of options again

# Reference

The following picture has been taken as a reference(03-javascript-homework-demo.png)

# Repository structure
password-generator/Assets/
    Contains all instructional reference

password-generator/Develop
    Contains all supportive files linked to html(css, js)
