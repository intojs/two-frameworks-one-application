# Tiptoe around React or Express through Business Oriented Architecture

A few years ago, I started on a journey to distill a way of building software that delivers value while keeping me from burning out. I wanted a way to avoid that small, innocent-looking task turning into days of hard work!

Throughout my career, tight deadlines and ever-changing requirements were constants that often enough left me frustrated and overworked.

Building from my last article, _The Four Layers of Single Page Applications_, together with a lot of lessons learned from Robert C. Martin's _Clean Architecture_ and Eric Evan's _Domain Driven Design_, I'm going to take you through a few thoughts about building business-driven applications put into practice by an example.

At the end of our journey, we will conclude that we can build applications as ecosystems formed from a core consisting of business logic and various components orbiting around it.

# The client

What I realized tackling the problem from various angles is that it's best to start with the customer.

Whenever business people talk to me about building software, the terms they use are solely related to their business domain and needs. I have rarely seen a client talking about JavaScript frameworks.

The software we build needs to express and satisfy our customer's business endeavors.

# The primary value of software is that it is soft!

In today's market, the goals of our clients will always change together with their software. Clean, precise, long-lasting specifications are nearly impossible.

We need to make sure that our software satisfies our partner's immediate and long term goals by being fast to implement and easy to change.

# Everything apart business logic represents low-level implementation

I am going to be drastically and say nothing else matters except the client's domain.

The frameworks and databases we use represent just delivery and persistence mechanisms; implementations meant to satisfy the business requirements of our customers.

# The loan calculator

Let's take a hypothetical example of building a loan calculator, a simple application to determine the monthly payment for a fixed-rate loan.

With a new client and a short deadline (three one week sprints), we have a very challenging task on our hands.

With a short deadline and unknow technologies, we have a very challenging task on our hands.

Following the guidelines found in the brilliant book _Writing Effective Use Cases_ written by _Alistair Cockburn_, let's define a simple use case, user story, for our task.

## Calculate loan use case

### Primary actors
* User
* Calculator

### Main success scenario
1. The **User** submits the data necessary to calculate the loans monthly payment
2. The **Calculator** validates the data
3. ~ determines the monthly payment
4. ~ saves the calculation for later use
5. ~ sends an email to the **User** with the calculation
6. ~ presents the calculation to the **User**

### Extensions

* Submitted data is incomplete
    - The **Calculator** requests the missing data
    - The **User** supplies the missing data

* Submitted data is invalid
    - The **Calculator** informs the **User** about the invalid data
    - The **User** submits valid data
    
* The save operation fails
    - The **Calculator** returns the calculation to the **User** and informs him about the error

* Sending the email fails
    - The **Calculator** returns the calculation to the **User** and informs him about the error

### Necessary user data
- Email
- Loan amount
- Loan term
- Life insurance opt-in

### Loan conditions
- Min. loan amount: **$1,000**
- Max. loan amount: **$10,000**
- Min. loan term: **1 year**
- Max. loan term: **5 years**
- Interest rate: **loan term ≤ 2 years ? 20% per annum : 15% per annum**
- Interest rate discount for life insurance opt-in: **-3% per annum**
- The monthly payments will be calculated using this simple **formula**

## Sprint one, the core implementation

Using TDD, I have built the _Loan Calculator_ in _TypeScript_ as an independent node package without any hard dependencies and no delivery mechanism apart from unit tests.

Let's look at the _calculateLoan_ use case implementation. The **Calculator** receives a request from the **User** to calculate the loan. It then saves the data through a repository and sends an email with the calculation to the **User**'s email address, returning it at the end.

I would argue that the implementation reads like the user story.

Even without a delivery mechanism in place, we can use the application through unit tests.

The _Loan Calculator_ depends on a hypothetical loan repository and email service provided by its consumer, in this case, the testing framework.

For testing purposes, I have implemented the loan repository and email service using in-memory solutions.

# Sprint two, the Express app

To save time, the project manager decides to deliver the first version of the loan calculator through an Express app.

The business people will be able to test the app's logic through Postman.

The back-end team will implement the repository using a NoSql solution and the email service using a 3rd party vendor.

# Sprint three, the React app

Next sprint, he decides on delivering the loan calculator to the bank's customers through a React application.

The app will import the calculator module and build a fancy UI around it.

The front-end developers will implement the loan repository and email service using the solutions already put in place by the backend-team through ajax calls. 

# We did it!

We built a flexible loan calculator served, depending on the project needs, both server and client-side, without tying ourselves to any fancy framework or complicated services.

# Think in term of plugins

Starting from the client's business needs will make us extremely flexible in choosing our technologies. We will be able to build loosely coupled software that's easy to change and maintain.

If you design your application as a dictionary of business behavior and make everything else pluggable, I think you will be quite safe from most of the frustrations we encounter in our day to day engineering work.