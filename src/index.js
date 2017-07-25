import ReactHabitat from 'react-habitat';
import App from './components/App.js';

class WP_React_Boilerplate extends ReactHabitat.Bootstrapper {
    constructor(){
        super();

        // Create a new container builder
        var container = new ReactHabitat.Container();

        // Register your top level component(s) (ie mini/child apps)
        container.register('App', App);

        // Finally, set the container
        this.setContainer(container);
    }
}

// Always export a 'new' instance so it immediately evokes
export default new WP_React_Boilerplate();
