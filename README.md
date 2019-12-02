# Step away from frameworks like React or Express to Business-Driven Applications

[Check out the article on Medium.com](https://medium.com/@danieldughila/what-the-hell-two-frameworks-one-app-5f29db981949)

For me, building applications is like playing strategy games. I get to architect complex systems and, in a way, I feel like an artist.

The problem is that throughout my career, tight deadlines and ever-changing requirements were constants that often enough left me frustrated and overworked.

I wanted a way to avoid that small, innocent-looking task turning into days of hard work!

A few years ago, I started on a journey to distill a better way of engineering software, one that delivers value while keeping me from burning out.

Continuing from my last article, _The Four Layers of Single Page Applications_, together with a lot of lessons learned from Robert C. Martin's _Clean Architecture_ and Eric Evan's _Domain Driven Design_ book, I'm going to take you on a journey on developing business-driven applications.

You're probably asking what are business-driven applications and how do we go on about building them?

# Easy, we talk to our client!

Whenever business people talk to me about engineering their software, the terms they use are solely related to their business domain and needs. I have rarely seen a client talking about JavaScript frameworks. The software we develop has to represent our customer's domain.

In today's market, the goals of our clients will always change together with their software. Clean, precise, long-lasting specifications are nearly impossible. We need to make sure that our software satisfies our partner's immediate and long term goals by being fast to implement and easy to change.

# In a business-driven architecture, everything apart business logic represents low-level implementation

I am going to be drastically and say nothing else matters except the customer's domain.

I feel we are focusing too much on the frameworks and libraries we use. We even call ourselves React or Angular "5. whatever" developers. When asked to describe the applications that we're working on, we will describe fancy React-Redux apps, forgetting to mention what our applications do altogether. The frameworks and databases we use represent just delivery and persistence mechanisms; implementations meant to satisfy the business requirements of our customers.
                   
I firmly believe we should architect applications as ecosystems, formed by a core consisting of business logic and various components orbiting around it.

# If you like the fundamentals of business-driven applications, how about building one together with me?   

## The loan calculator

Let's take a hypothetical example of implementing a loan calculator, a simple application to determine the monthly payment for a fixed-rate loan.

With a new client and a short deadline (three one week sprints), we have a very challenging task on our hands.

The first thing we need to do is talk to the customer and understand their business.

With this priceless information, following the guidelines found in the brilliant book _Writing Effective Use Cases_ written by _Alistair Cockburn_, we are ready to define the use case for our task (our user story).

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

We're not concerned about frameworks, persistence, or email services. We're business-driven, and we want to create the application's core.

Using TDD, we have built the _Loan Calculator_ in _TypeScript_ as an independent node package without any hard dependencies and no delivery mechanism apart from unit tests.

Let's look at the _calculateLoan_ use case implementation.

The **Calculator** receives a request from the **User** to calculate the loan. It then saves the data through a repository and sends an email with the calculation to the **User**'s email address, returning it at the end.

I would argue that the implementation reads like the user story.

Even without a delivery system in place, we can use the application through unit tests.

The _Loan Calculator_ depends on a hypothetical loan repository and email service implemented by its consumer, the testing framework, using in-memory solutions.

# Sprint two, the Express app

To save time, we decide to deliver the first version of the loan calculator through an Express app. We will implement the repository using a NoSql solution and the email service using a 3rd party vendor.

Our client will be able to test the application's logic through Postman and give us valuable, early feedback.

# Sprint three, the React app

Next sprint, we decide on delivering the loan calculator to our customer through a React application.

The application will import the calculator module and build a fancy UI around it.

We will implement the loan repository and email service using the solutions already put in place in the previous sprint.

# It feels like we have to do more, but we did it!

## We built our first business-driven application!

We created a flexible loan calculator served, depending on the project requirements, both server and client-side, without tying ourselves to any fancy framework or complicated services.

Starting from the client's business needs made us very flexible in choosing our technologies. We were able to build loosely coupled software that's easy to change and maintain.

# Developing business-driven applications will keep you safe from most difficulties encountered in your day to day engineering work

Thank you for joining me on this journey to learn about business-driven architecture! If we've got this right, we'll meet on a beach somewhere sipping pina colada! :)

I would love to read your opinions on this article, so please comment below; follow me here or on Twitter to get updates about my work.
