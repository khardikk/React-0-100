## Lecture 1
#### Video : What is react
- It is a JavaScript library : it is just JS only
-  ReactElement - Object => HTML ( Browser understands)
- React Replaces the rendered code
- React is working only inside div id root
- React can be used in any small part of the application
- it is thus a library and not a framework
# Assignment Question and Answers

## 1.  **What is Emmet?**
   -  It is a plugin improves HTML & CSS workflow, can use short expressions to generate HTML markup, CSS.” 
> Tip: While typing the Emmet Abbreviations, you can press **Ctrl + Space** see what will be generated(Inside a pop up)

The general way to write Emmet abbreviation is:
**tagName[series of expressions]**
Where _tagName_: is the HTML tag you want to generate
_Series of expressions_ will govern the markup that will be generated.
### HTML


 **Elements with text content inside them**
 If you want to generate a div with text content inside them
 
**div{This is a div}**
Will generate a div tag with whatever text that is specified inside the curly braces (**{}**)
 ![[1_Tneg7SSPZGotSPC13K_1gA.webp]]
**Nested elements**

To generate nested we will use **‘>’** operator

**ul>li**![[1_rTrXeNkP6GYAjSG0GdscSQ.webp]]

Generate a list 3 **li**’s , each **li** has an anchor(**a**) tag:

For nesting we can use **‘>’** operator. But how would we go about for repetition ? 
Repetition can be done using  operator **li`*`3** will give three li’s just like normal multiplication.

**ul>li*3>a*
![[1_amQIRkLG-M6faa3zs0F5kg.webp]]
If you wanted numbers inside your li’s you could use $ operator

**ul>li{$}*3**![[1_NjO5OR0xTBPtep42TUlBEw.webp]]
**ul>li{$@-}*5**
![[1_kM6CeQzsGk1_qw9WxjVwOQ.webp]]**What about classes and Id**

**div#main.container.responsive**

you can specify Id by using **‘#’** and classes by using .![[1_laqZ5TDwecl3tirbzOUBxg.webp]]
Custom attributes

If you want a div with custom data property you would do the following:

**div[data-name=logo]**![[1_R6-ZcTR_lFIksaQR8CibIQ.webp]]

**Generating Siblings.**

Let’s say you want to have a header tag, div tag, footer tag. What would you do?

These are not nested so you cant use ‘>’

To generate sibling use ‘+’ operator

**header+div+footer**![[1_oLUgW8pABSI0F7SUJ2_7TA.webp]]**Grouping**

You can use ‘()’ operator to group complex abbreviations.

**div>(a>p>span+span)*3**![[1_c_H8zGD3puVI3YaY1W5T7w.webp]]
**Lorem Ipsum**

Using this you can get lorem Ipsum placeholder text:

**lorem**

You can also use multiplication operator with this to get more content

**lorem*x5**
### **CSS**
**Margin of 10 on all sides**

_Just type :_

**m10–10–10–10**
_This will be expanded to:_

**_margin: 10px 10px 10px 10px;_**

same thing can be done for padding :

**_p10–10–10–10_**
https://docs.emmet.io/abbreviations/syntax/?source=post_page-----6af80f0f630c--------------------------------
https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0?source=post_page-----6af80f0f630c--------------------------------

## 2. Difference between a Library and Framework?

- Both libraries and software frameworks are just a collection of reusable code written by others. Their goal is to make ordinary problems easier to address.
-  The difference : Taking an example of a cottage :
	  - **Library** : A library is similar to building a cottage from the ground up. You may design your house as you want, with just about any architecture you want, and you can arrange your rooms however you want.
	- **Framework** :  Framework, on the other hand, is like buying a new cottage. You don’t have to deal with construction issues, but you can’t pick how to arrange your areas because the cottage is already completed.

- #### The Technical Difference

The technical difference between a framework and library lies in a term called **inversion of control.**

When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

By using a library, you control the flow of the program. The library can be invoked whenever and wherever you like. Contrary to this, when you use a framework, the flow is controlled by the framework. The framework instructs you where to put your code, but it will call your code as required. Simply put, our code calls the library’s code, but in a framework, it’s the framework’s code that calls our code as shown in the below diagram.
![[Pasted image 20231203135954.png]]

Libraries ex - React Js
Framework Ex - Node JS Angular JS, Vue Js

## 3. What is CDN? Why do we use it?

- CDN are distributed Network of Servers which can deliver the content requested by the client.
- CDN means Content Delivery Network
- A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.
- The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.
- Can also help with protection with DDOS
- Benefits
	- Improved website load time
	- Reduced Bandwidth cost - ( Caching )
	- Increased content availability and redundancy - Latency ( The globally distributed nature of a CDN means reduce distance between users and website resources. Instead of having to connect to wherever a website’s [origin server](https://www.cloudflare.com/learning/cdn/glossary/origin-server/) may live, a CDN lets users connect to a geographically closer [data center](https://www.cloudflare.com/learning/cdn/glossary/internet-exchange-point-ixp/). Less travel time means faster service.)
	- Improved Web Sec
## 4. Why is react known as react?

- It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.
- When Data changes the components dependent on that data also changes ( reacting to the change hence React )
- The whole Idea is to build reusable components following the DRY ( Do not repeat yourself principal). This makes it easier and more efficient to build complex user interfaces.
## 5. What is crossorigin in script tag?
```
<script crossorigin="anonymous|use-credentials">
```
![[Pasted image 20231203143150.png]]
![[Pasted image 20231203143157.png]]

- The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
- Web pages often make requests to load resources on other servers. Here is where CORS comes in.
- A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
- CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain.
- **The opposite of cross-origin requests is same-origin requests. This means that a web page can only interact with other documents that are also on the same server.**

## 6. What is diference between React and ReactDOM?

-  We import different cdn scripts for react and react dom as they are not the same.
- React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

- React - components, classes, elements etc.
- ReactDOM - render() and findDOMNode()
- Because React-DOM binds the idea of React to a web browser. And ideally, React has nothing to do with a browser or web for that matter. That’s why we’re seeing tools and frameworks like React-Native, React-Three being developed. 

## 7. What is difference between react.development.js and react.production.js files via CDN?
### Development (Dev) Link:

- The development link is typically used during the development phase of your application.
- It includes additional debugging tools, warnings, and helpful error messages.
- It is larger in file size and may negatively impact the performance of your application.
- It is not optimized for production use.

### Production (Prod) Link:

- The production link is meant for deploying your application in a production environment.
- It excludes development-specific tools, warnings, and error messages.
- It is smaller in file size, which improves the performance of your application.
- It is optimized for production use

### 8. What is async and defer?

The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

- Async :Async downloads and executes JavaScript as soon as it’s available,
   Does not gaurentee the order of the scripts
	- `<script async src="script.js"></script>`
	- Advantanges : 
	
- Defer : defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.
  This Gaurentees the order ( when multiple scripts are dependent on each other) ( maintains the order of the script)
	- `<script defer src="script.js"></script>`
	
![[Pasted image 20231203145542.png]]

- **Advantages of using the defer attribute:**

1. **Guaranteed Post-Load Execution:** Deferred scripts run after page load, ensuring they don't impede initial loading.
2. **Non-blocking Parsing:** They don't hinder the parsing of other page elements during loading.
3. **Independent Updates:** Deferred scripts can be modified without requiring a full page re-parse and re-render.

**Disadvantages of using the defer attribute:**

1. **Potential Loading Delay:** Multiple deferred scripts may concurrently load, potentially slowing down the page.
2. **Compatibility Issues:** Older browsers may not support defer, causing scripts not to load for some users.

**Advantages of using the async attribute:**

1. **Faster Perceived Load Time:** Async allows the browser to parse HTML while downloading large JavaScript files, reducing the perceived load time.

**Disadvantages of using the async attribute:**

1. **Render-Blocking CSS Break:** Async can break the render-blocking CSS rule, causing potential display issues.
2. **Resource Loading Delay:** Async may delay the loading of other page resources, like images.
3. **Compatibility with User Scripts:** Async can pose issues for user scripts and extensions relying on post-load DOM modification.
