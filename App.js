       // Creating a React Element using React CDN
       const heading = React.createElement('h1',
       {id:'my-heading',className:'heading'},
       'Hello World From React');

       // Creating a Root Element using ReactDOM CDN
      const root = ReactDOM.createRoot(document.getElementById('root'));

        //   Rendering the React Element into the Root Element
      root.render(heading);