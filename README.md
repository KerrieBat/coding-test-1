### MYOB  coding challenge

This coding challenge project is designed to give front-end developers an API to code against. There are several routes provided that perform the backend work, and your task is to complete a font-end solution.



## Design Decisions and assumptions

I used Materialize design framework, it's nice and clean. Screens are responsive.
I haven't spent a lot of time trying to match the colours exactly as this would be specified normally, I have used approximate HTML colour names.
I haven't spent a lot of time trying to match the fonts as this would be specified normally, I have used a standard Materialize font.
I haven't been able to get the interface with api.js working properly, I have checked the screens directly in the browser.



## Installation

* You should just copy the project to a directory on your computer.
* You need to have Node.js installed on your computer (we used 6.9.5 when writing this).
* Run `npm install` from the directory that you copied the project to.
* Run `npm start` from the directory that you copied the project to to start the server.


* You must login to get a session token (for the purposes of this any username and password will suffice).
* When you are saving a payslip or retrieving a payslip you must provide the user and token as headers in the requests.

Note that we are only storing data in memory, so if you restart the server then you will need to login again to get a new token.

In all the responses if you see error = true, then your request has not worked.


## Discussion

I found the challenge quite difficult. It is not working, there is very little interface with the backend. I spent a lot of time trying to understand the backend.
Should I submit a solution that isn't working?..... Maybe not, but it was good practise. When you are job hunting it is hard to decide what to learn next, when you have a job, this is clear!
