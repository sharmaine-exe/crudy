// import {developerTemplate} from "./views/developerTemplate"

// console.log(developerTemplate())

/*
    import all the developers JSON data
*/ 

import {getAllDevelopers} from './api/getRequests';
import {renderDevelopers} from './render/renderDevelopers'

async function appInit(){
    // fetch the data
    const developerData = await getAllDevelopers()
    if(developerData){
        // start the process of rendering/creating li items for dev card
        // const someMarkup = await renderDevelopers(developerData)
        // console.log(someMarkup)

        // not yet in DOM! it would be added under the <ul> 
        // note the id of the ul, id= developerList
        document.querySelector('#developerList').innerHTML = await renderDevelopers(developerData)
    } else {
        // loading spinner ....
    }
}

appInit()