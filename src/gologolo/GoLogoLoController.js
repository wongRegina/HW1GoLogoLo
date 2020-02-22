import AppsterController from '../appster/AppsterController.js'
import {AppsterGUIId, AppsterHTML,AppsterGUIClass} from '../appster/AppsterConstants.js'
import {GoLogoLoCallBack, GoLogoLoGUIId} from './GoLogoLoConstants.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
import Appster from '../appster/Appster.js';

export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
        
    }

    registerAppsterEventHandlers(){
        super.registerAppsterEventHandlers();

        // Enter and Cancel Button
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_ENTER_CREATE_WORK]);
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_CANCEL_CREATE_WORK]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_ENTER_EDIT_TEXT])
        
        //Edit Logo Stuff
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, AppsterHTML.INPUT, this[GoLogoLoCallBack.GOLOGOGO_PROCESS_EDIT_LOGO]);
    }

    processEnterCreateWork = () =>{
        console.log("processEnterCreateWork");
        let dialog = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD).value;
        if(dialog.length < 1){

        }
        else if(this.model.getRecentWork(dialog) != null){
            this.model.showErrorMessage();
        }
        else{
            this.model.prependWork(this.model.createNewWork(dialog));
            document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL).classList.remove(AppsterGUIClass.IS_VISIBLE);
        }
    }
    
    processCancelCreateWork = () => {
        console.log("processCancelCreateWork");
        this.model.cancelButton();
    }

    processEditText = () => {
        console.log("processEditText");
        this.model.updateText();
    }

    processEditLogo = () =>{
        console.log("processEditLogo");
        this.model.updateLogo();

    }
}