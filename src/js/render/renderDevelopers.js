// use dev temp and pass render
import {developerTemplate} from './../views/developerTemplate'

async function renderDevelopers(developerData){
    //console.log(developerData)
    //return "markup"
    let markup = ''

    developerData.forEach(developer =>{
        console.log(developer)
        markup += developerTemplate(developer)
        // will go through each obj and then keep adding
    })
    return markup 
    // will be returned to appInit()
}
export {renderDevelopers}
