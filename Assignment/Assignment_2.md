- What is NPM 
	- It is not node package manager
	- Package.json is a configuration for npm 
		 - Why? - It manages the dependencies
		 - Can install packages into the projects
		 - MOST imp package is a BUNDLER - needs to minimized, bundle of all the code
	- Bundler used is parcel - Dev Dependencies
	- There are 2 dependencies 
		- Normal and Dev dependencies
	- caret vs tilde ( ^ and ~ in package.json)
	- Package.lock.json - keeps a record of exact version of installed packages - uses exact version
	- Parcel has it's own dependencies : It is a transitive dependencies
		- How is it getting managed?
	- How many package.json do we have?
		- Multiple in all node_modules
		- That is maintaining all these dependencies
		-  Do not push node_modules in git as it is easy to generate it again using package.json and package.lock.json will have the exact version.
		- Whatever you can regenerate on server don't push on git
	- npm - to install a package
	- Npx - to execute a package 1:09:20
	- Install React using NPM package as cdn links is not a good way, for updation and it is a costly network call.
	- Parcel is giving dev build, server, and doing Hot module Reload -> hot reloading,  doing with file watching algorithm built in c++. Caching - Faster builds after each reload. Image Optimization, Minification, bundling and compressing, Consistent Hashing, differential bundling - support for old browsers. Diagnostics. Tree shaking algo -> remove unused code
	- In production build using npm parcel build index.html will give an error as it will have a conflict with the app.js we setup as the main entry  point of our app- remove it.
	- in production build it will take time -> minify code in a single line
	- Build,dist,parcel cache can be generated again so it should not be pushed to github
	- Browserslist : tell what all browsers it will support -


# Assignment 2

## What is `NPM`?
- Npm is a lot of things
	-  It is a package manager for Node.js, It helps JS developers easily share packaged modules of code.
	-  The npm Registry is a public collection of packages of open-source code for Node.js, [front-end web apps](http://www.ember-cli.com/), [mobile apps](http://cordova.apache.org/), [robots](https://tessel.io/), [routers](https://linerate.f5.com/), and countless other needs of the JavaScript community.
	- npm is the command line client that allows developers to install and publish those packages.
## What is `Parcel/Webpack`? Why do we need it?

![image](https://github.com/khardikk/React-0-100/assets/64458111/6fc5a8cd-92b0-496a-8073-3ff3846da7ce)


-  They are both bundlers,  a bundler follows a simple concept: you give it your files, including style files like Sass, Less or Stylus, your images, fonts, JavaScript files and they will assemble them in a seamless way, so they work perfectly on production.
- Parcel is also capable of watching a JavaScript file rather than an HTML file as well.
- Parcel's claim? ZERO CONFIGURATION! So you don't have to do anything. All the things needed will be installed automatically with no effort.
- Parcel claims to support code splitting with zero configuration, and that's true.

## Parcel Cache
- #### Reliable caching
**Everything Parcel does is cached** – transformation, dependency resolution, bundling, optimizing, and everything in between. This means the dev server restarts instantly, and the same code is never built twice.

![image](https://github.com/khardikk/React-0-100/assets/64458111/1f52edf0-67ce-406d-b389-df2d290b80dd)


- Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes.
- It integrates with low-level operating system APIs to determine what files have changed in milliseconds, no matter the project size.

## What is `npx`?
- **npx** is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry. It’s now very easy to run any sort of Node.js based executable that you would normally install via npm.
- Run a locally installed package easily
If you wish to execute a locally installed package, all you need to do is type: $ npx your-package
npx will check whether <command> or package exists in $PATH, or in the local project binaries, and if so it will execute it.
- Another major advantage is the ability to execute a package that wasn’t previously installed.
- You can use npx to run any GitHub gists and repositories. 

## What is difference between `dependencies` vs `devDependencies`

- **A dependency is a library that a project needs to function effectively.** 
- **DevDependencies are the packages a developer needs during development**.

## What is Tree Shaking?
- **Tree shaking** is a term commonly used within a JavaScript context to describe the removal of dead code.
- It relies on the [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements to detect if code modules are exported and imported for use between JavaScript files.
## What is Hot Module Replacement? (HMR)
- Hot Module Replacement (HMR) **improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh**. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.
## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Tree Shaking
- Hot Reloading
- Diagnostics
- Realiable Caching
- Minification
- Image Optimization


## What is `.gitignore`? What should we add and not add into it?
- The purpose of gitignore files is **to ensure that certain files not tracked by Git remain untracked**. To stop tracking a file that is currently tracked, use git rm --cached to remove the file from the index. The filename can then be added to the .gitignore file to stop the file from being reintroduced in later commits.

## What is the difference between `package.json` and `package-lock.json`

- the package. json file focuses on project metadata and specifying the desired versions of dependencies, while the package-lock. json file ensures deterministic installations by locking the exact versions of dependencies and their dependencies.

## What is `node_modules` ? Is it a good idea to push that on git?
- Node modules **provide a way to re-use code in your Node application**. In some ways, they're similar to a class in other languages, like C# or Java. In many ways, they're completely different from a class
- Not a good idea to push it to Git as it can be reinstalled easily by package.json file.

## Why should I not modify `package-lock.json`?
- Lock files should exist so that anyone installing the dependencies get the exact same version.
- , lock files should not be modified unless you are actively updating the packages required. It seems that sometimes, however, `npm` decides to update the `package-lock.json` file when you run an `npm install`.

It does this to seemingly keep dependencies up-to-date without having to run `npm update` separately. This makes sense when working on a small project on your own but it can cause some confusion when a developer sees a modified file they didn't touch.

## - What is the `dist` folder?
- The dist folder, short for **distribution folder**, is dynamically generated when using the commands and includes the generated production ready HTML files and assets that are necessary to deploy and run your statically generated application.

## What is `browserlists`
- browserslist is **a configuration file that determines which browsers your project should support**. It is used by many tools, including Autoprefixer, Babel, and Stylelint, to automatically add vendor prefixes and polyfills to your CSS and JavaScript code.

## ^ - caret and ~ - tilda
-  the tilde () allows updates to the patch version of a package, while the caret (^) allows updates to the minor and patch versions of a package, while keeping the major version 
- ![image](https://github.com/khardikk/React-0-100/assets/64458111/efcb2d1e-8a70-439f-924b-d24b23cd24a4)

  ![image](https://github.com/khardikk/React-0-100/assets/64458111/ac3285b0-542c-45c4-b951-a68ab8bdce08)


## Vite, Webpack and parcel bundlers
- 1. **Vite**:
    
    - Vite is a next-generation build tool that serves source code over native ESM, allowing the browser to take over part of the bundling job
    - It offers fast and lightweight IDE support and is designed to be a fast and lightweight alternative to traditional bundlers
    - Vite pre-bundles dependencies using esbuild, which is written in Go and pre-bundles dependencies 10-100 times faster than JavaScript-based bundlers
    - It supports code splitting, route-based code splitting, and native ESM
    
1. **Webpack**: 
    - Webpack is a powerful and flexible bundler with a broad plugin ecosystem and extensive community suppor
    - It offers extensive configurability, handling a vast array of assets, including JavaScript, CSS, fonts, and images
    - Webpack supports code splitting out of the box, allowing you to optimize your app by splitting your code into various bundles
    - It provides Hot Module Replacement (HMR), allowing modules to be updated at runtime without needing a full refresh
    - However, Webpack's configuration can be daunting for beginners, and its build times can be slow compared to other bundlers
    
3. **Parcel**:
    
    - Parcel is a zero-configuration web application bundler that is fast and easy to use
    - It supports all module formats and works with any Rollup
    - Parcel handles the transformation process very smartly, unlike Rollup and Webpack, which require you to specify file types to transform
    - It offers fast and easy-to-use bundling for web applications

When choosing a bundler, consider the following factors:

- **Complexity**: For complex projects with complex build requirements, carefully evaluate whether Vite's unique approach aligns with your needs.
- **Ease of Use**: Parcel is a good choice if you want a fast and easy-to-use bundler for your web application.
- **Configuration**: Rollup offers a streamlined configuration process with a clear and concise setup, but certain aspects, like handling CSS and images, may require additional manual configuration.
- **Performance**: Vite focuses on optimization and performance, making it beneficial for smaller to medium-sized projects.



  
