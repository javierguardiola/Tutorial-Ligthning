import { LightningElement, track} from 'lwc';

export default class MiPrueba extends LightningElement {
    @track pText;

    handleInputChange(event) {
        this.pText = event.target.value;
    }
}