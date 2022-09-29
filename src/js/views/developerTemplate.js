// template literal >> developer card ... (readme)

function developerTemplate({type, firstName, lastName, avatar, ...props}){
 // instead of developerData to be passed in the fxn , deconstruct to its properties:
// {firstName, lastName, email ...} don't forget the {} as they are just props
// easier to add to template instead of {developerData.type}

    // developerData is now an object after the foreach loop from render
    // and all the properties included

    //now that it renders styling, add the CLASS for its custom styling based on type as dev
    // ${developerType(type)} is the class name for CSS
    // create the fxn:

    function developerType(type){
        if(type === "full stack developer"){
            return "full-stack"
            // turns the avatars green!
        } 
        if(type === "front end developer"){
            return "front-end"
            // turns the avatars pink!
        } 
        if(type === "back end developer"){
            return "back-end"
            // turns the avatars blue!
        } 

    }

    return `<li class="developer">
    <aside>
        <div class="avatar ${developerType(type)}"> 
            <img
                src="${avatar}"
                width="104"
                height="104"
                alt="${firstName} ${lastName} profile avatar"
            />
        </div>
            
        <header>           
            <h2 class="name">${firstName} ${lastName}</h2> 
            <p class="speciality">${type}</p>
        </header>
    </aside>
</li>`
}

export {developerTemplate}